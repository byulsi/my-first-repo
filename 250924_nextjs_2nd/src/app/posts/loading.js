// app/posts/loading.js
export default function PostsLoading() {
  return (
    <div className="p-8">
      {/* 제목 로딩 스켈레톤 */}
      <h1 className="text-3xl font-bold mb-8">게시물 목록</h1>
      <div className="space-y-4">
        {/* 5개의 가짜 게시물 박스를 보여줍니다 */}
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="border p-4 rounded-1g shadow animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
