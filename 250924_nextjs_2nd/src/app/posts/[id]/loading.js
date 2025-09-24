// app/posts/[id]/loading.js
export default function PostDetailLoading() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* 뒤로가기 버튼 로딩 */}
      <div className="h-4 bg-gray-200 rounded w-32 mb-4 animate-pulse"></div>

      <article className="bg-white rounded-lg shadow-lg p-8 animate-pulse">
        {/* 제목 로딩 */}
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>

        {/* 사용자 정보 로딩 */}
        <div className="space-y-2 mb-6 pb-4 border-b">
          <div className="h-4 bg-gray-200 rounded w-48"></div>
          <div className="h-4 bg-gray-200 rounded w-64"></div>
        </div>

        {/* 본문 로딩 */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </article>
    </div>
  );
}
