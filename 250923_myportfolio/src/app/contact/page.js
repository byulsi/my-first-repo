// src/app/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-16 px-6 max-w-4xl mx-auto text-center">
      <h1 className="text-6xl font-extrabold mb-4 text-gray-800">404</h1>
      <h2 className="text-2xl mb-4 text-gray-600">페이지를 찾을 수 없습니다</h2>
      <p className="text-gray-500 mb-6">요청하신 페이지가 존재하지 않습니다.</p>
      <Link
        href="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
