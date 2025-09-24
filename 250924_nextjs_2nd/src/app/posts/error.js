"use client"; // 클라이언트 컴포넌트로 지정

export default function PostsError({ error, reset }) {
  return (
    <div className="p-8">
      {" "}
      {/* 전체 컨테이너에 패딩 8 적용 */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        {/* 연한 빨간 배경, 빨간 테두리, 둥근 모서리, 패딩 6 */}

        <h2 className="text-xl font-bold text-red-800 mb-2">
          오류가 발생했습니다 {/* 제목: 큰 폰트, 진한 빨간색 */}
        </h2>

        <p className="text-red-600 mb-4">
          {error.message || "게시물을 불러오는 중 문제가 발생했습니다."}
          {/* 에러 메시지 표시, 없으면 기본 메시지 */}
        </p>

        <button
          onClick={reset}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          다시 시도
        </button>
      </div>
    </div>
  );
}
