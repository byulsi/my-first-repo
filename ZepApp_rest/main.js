// 상태 옵션 (이전과 동일)
const STATUS_OPTIONS = ["참여 중", "자리 비움", "화장실", "휴식", "외출"];
const REST_STATUSES = ["자리 비움", "화장실", "휴식", "외출"]; // 휴식으로 간주할 상태

// 수업 시간 설정 (ms 단위, 자정 기준)
const MIDNIGHT = () => new Date().setHours(0, 0, 0, 0);
const START_TIME_MS = 10 * 60 * 60 * 1000; // 10:00
const END_TIME_MS = 19 * 60 * 60 * 1000; // 19:00
const LUNCH_START_MS = (11 * 60 + 50) * 60 * 1000; // 11:50
const LUNCH_END_MS = (12 * 60 + 50) * 60 * 1000; // 12:50

// 중첩 시간 계산 함수
function calculateOverlap(start, end, lunchStart, lunchEnd) {
  return Math.max(0, Math.min(end, lunchEnd) - Math.max(start, lunchStart));
}

// 현재 시간이 수업 중인지 확인
function isDuringClass(nowMsFromMidnight) {
  return nowMsFromMidnight >= START_TIME_MS && nowMsFromMidnight < END_TIME_MS;
}

// 사이드바 앱 터치 시 실행 (로그 제거)
App.onSidebarTouched.Add(function (player) {
  player.tag.widget = player.showWidget("widget.html", "sidebar", 300, 400);

  // 위젯 초기화: 현재 상태와 총 휴식 시간 전송
  let status = App.storage.getValue(player.id, "status") || "참여 중";
  let totalRestTime = App.storage.getValue(player.id, "totalRestTime") || 0; // ms
  player.tag.widget.sendMessage({
    type: "init",
    status: status,
    totalRestMinutes: Math.floor(totalRestTime / 60000),
  });

  // 위젯에서 메시지 수신 (로그 제거)
  player.tag.widget.onMessage.Add(function (player, data) {
    if (data.type === "set_status") {
      let oldStatus = App.storage.getValue(player.id, "status") || "참여 중";
      App.storage.setValue(player.id, "status", data.status);

      let now = Date.now();
      let midnight = MIDNIGHT();
      let nowMs = now - midnight;

      if (isDuringClass(nowMs)) {
        if (
          REST_STATUSES.includes(data.status) &&
          !REST_STATUSES.includes(oldStatus)
        ) {
          // 휴식 시작: 횟수 증가, 시작 시간 기록
          let restCount = App.storage.getValue(player.id, "restCount") || 0;
          App.storage.setValue(player.id, "restCount", restCount + 1);
          App.storage.setValue(player.id, "lastRestStart", now);
        } else if (
          !REST_STATUSES.includes(data.status) &&
          REST_STATUSES.includes(oldStatus)
        ) {
          // 휴식 끝: 시간 계산 (점심 제외)
          let lastRestStart = App.storage.getValue(player.id, "lastRestStart");
          if (lastRestStart) {
            let rawDuration = now - lastRestStart;
            let lunchStartToday = midnight + LUNCH_START_MS;
            let lunchEndToday = midnight + LUNCH_END_MS;
            let overlap = calculateOverlap(
              lastRestStart,
              now,
              lunchStartToday,
              lunchEndToday
            );
            let effectiveDuration = rawDuration - overlap;

            let totalRestTime =
              App.storage.getValue(player.id, "totalRestTime") || 0;
            App.storage.setValue(
              player.id,
              "totalRestTime",
              totalRestTime + effectiveDuration
            );
            App.storage.removeValue(player.id, "lastRestStart");
          }
        }
      }

      // 호스트에게 알림 (로그 대신 알림 사용)
      App.players.forEach(function (p) {
        if (p.isHost) {
          p.showCenterLabel(
            `${player.name}님이 상태를 ${data.status}(으)로 변경했습니다.`
          );
        }
      });
    }

    if (data.type === "close") {
      player.tag.widget.destroy();
      player.tag.widget = null;
    }
  });
});

// 플레이어 입장 시 초기화
App.onJoinPlayer.Add(function (player) {
  player.tag = { widget: null };
  App.storage.setValue(player.id, "status", "참여 중");
});

// 플레이어 퇴장 시 정리 (휴식 중이라면 계산)
App.onLeavePlayer.Add(function (player) {
  let status = App.storage.getValue(player.id, "status") || "참여 중";
  if (REST_STATUSES.includes(status)) {
    let lastRestStart = App.storage.getValue(player.id, "lastRestStart");
    if (lastRestStart) {
      let now = Date.now();
      let midnight = MIDNIGHT();
      let rawDuration = now - lastRestStart;
      let lunchStartToday = midnight + LUNCH_START_MS;
      let lunchEndToday = midnight + LUNCH_END_MS;
      let overlap = calculateOverlap(
        lastRestStart,
        now,
        lunchStartToday,
        lunchEndToday
      );
      let effectiveDuration = rawDuration - overlap;

      let totalRestTime = App.storage.getValue(player.id, "totalRestTime") || 0;
      App.storage.setValue(
        player.id,
        "totalRestTime",
        totalRestTime + effectiveDuration
      );
      App.storage.removeValue(player.id, "lastRestStart");
    }
  }
  if (player.tag.widget) {
    player.tag.widget.destroy();
    player.tag.widget = null;
  }
});

// 호스트 상태 확인 (로그 제거)
App.onChat.Add(function (player, msg) {
  if (player.isHost) {
    if (msg === "/check_status") {
      App.players.forEach(function (p) {
        let status = App.storage.getValue(p.id, "status") || "참여 중";
        player.showCenterLabel(`${p.name}: ${status}`);
      });
    } else if (msg.startsWith("/check_rest ")) {
      let targetName = msg.split(" ")[1];
      let targetPlayer = App.players.find((p) => p.name === targetName);
      if (targetPlayer) {
        let restCount = App.storage.getValue(targetPlayer.id, "restCount") || 0;
        let totalRestTime =
          App.storage.getValue(targetPlayer.id, "totalRestTime") || 0;
        let minutes = Math.floor(totalRestTime / 60000);
        player.showCenterLabel(
          `${targetName} 휴식 횟수: ${restCount}, 총 시간: ${minutes}분`
        );
      } else {
        player.showCenterLabel(`플레이어 ${targetName}를 찾을 수 없습니다.`);
      }
    }
  }
});

// 실시간 업데이트 (로그 제거, 불필요한 출력 최소화)
let updateTimer = 0;
App.onUpdate.Add(function (dt) {
  updateTimer += dt;
  if (updateTimer >= 60) {
    // 매 1분마다 체크
    updateTimer = 0;
    let nowMs = Date.now() - MIDNIGHT();
    if (nowMs >= END_TIME_MS) {
      App.sayToAll("수업 종료 시간입니다!");
    }
  }
});
