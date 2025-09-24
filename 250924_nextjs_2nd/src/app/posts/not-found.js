import Link from "next/link";

export default function PostNotFound() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-center">
      {/* 최대 너비, 중앙 정렬, 패딩, 텍스트 중앙 정렬 */}

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
        {/* 연한 노란 배경, 노란 테두리, 둥근 모서리, 패딩 8 */}

        <h1 className="text-6xl font-bold text-yellow-600 mb-4">
          🔍
          {/* 큰 검색 이모지 */}
        </h1>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          게시물을 찾을 수 없습니다
          {/* 제목: 큰 폰트, 굵게, 진한 회색 */}
        </h2>

        <p className="text-gray-600 mb-6">
          요청하신 게시물이 삭제되었거나 존재하지 않습니다.
          {/* 설명 텍스트: 회색, 아래 여백 6 */}
        </p>

        <div className="space-x-4">
          {/* 자식 요소들 사이에 가로 간격 4 */}

          <Link
            href="/posts"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block"
          >
            게시물 목록
          </Link>

          <Link
            href="/"
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 inline-block"
          >
            홈으로 가기
          </Link>
        </div>
      </div>
    </div>
  );
}
