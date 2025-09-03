import dayjs from 'dayjs';
import 'dayjs/locale/ko.js';      // .js 확장자 포함
import relativeTime from 'dayjs/plugin/relativeTime.js';

dayjs.locale('ko');
dayjs.extend(relativeTime);

// 상대 시간 계산 함수
export function getRelativeTime(timestamp) {
  const diff = Date.now() - timestamp;
  const minutes = Math.floor(diff / 60000);

  if (minutes < 1) {
    return '방금 전';
  }
  if (minutes < 60) {
    return `${minutes}분 전`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours}시간 전`;
  }

  const days = Math.floor(hours / 24);
  return `${days}일 전`;
}

// 출력 예시
const now = Date.now();
console.log('현재 날짜:', dayjs().format('YYYY년 MM월 DD일'));      // ex. 2025년 09월 03일
console.log('현재 시간:', dayjs().format('A h:mm'));              // ex. 오후 5:23

// 30초 전
const thirtySecondsAgo = now - 30 * 1000;
console.log('30초 전:', getRelativeTime(thirtySecondsAgo));      // "방금 전"

// 10분 전
const tenMinutesAgo = now - 10 * 60 * 1000;
console.log('10분 전:', getRelativeTime(tenMinutesAgo));         // "10분 전"

// 2시간 전
const twoHoursAgo = now - 2 * 60 * 60 * 1000;
console.log('2시간 전:', getRelativeTime(twoHoursAgo));          // "2시간 전"

// 3일 전
const threeDaysAgo = now - 3 * 24 * 60 * 60 * 1000;
console.log('3일 전:', getRelativeTime(threeDaysAgo));           // "3일 전"
