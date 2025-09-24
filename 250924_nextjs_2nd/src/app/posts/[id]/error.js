"use client";

export default function PostDetailError({ error, reset }) {
  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold text-red-600 mb-4">
        게시물을 불러올 수 없습니다
      </h1>
      <p className="text-gray-600 mb-4">
        {error.message || "오류가 발생했습니다."}
      </p>
      <div className="space-x-4">
        <button
          onClick={reset}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          다시 시도
        </button>
        <a
          href="/posts"
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 inline-block"
        >
          목록으로 돌아가기
        </a>
      </div>
    </div>
  );
}
