import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {/* 전체 화면 높이, 회색 배경, 중앙 정렬 */}

      <div className="text-center">
        {/* 텍스트 중앙 정렬 컨테이너 */}

        <h1 className="text-9xl font-bold text-gray-300 mb-4">
          404
          {/* 매우 큰 폰트, 연한 회색, 아래 여백 4 */}
        </h1>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          페이지를 찾을 수 없습니다
          {/* 큰 제목, 진한 회색, 아래 여백 4 */}
        </h2>

        <p className="text-gray-600 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
          {/* 회색 텍스트, 아래 여백 8 */}
        </p>

        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
