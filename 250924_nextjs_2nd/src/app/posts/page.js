// app/posts/page.js (수정된 버전)
import Link from "next/link"; // Next.js의 Link 컴포넌트 가져오기

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("데이터를 가져오는데 실패했습니다");
  }
  const posts = await response.json();
  return posts.slice(0, 10);
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">게시글 목록</h1>

      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/posts/${post.id}`} // 동적 URL 생성
          className="block"
        >
          <div className="border p-4 mb-4 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              {post.id}. {post.title}
            </h2>
            <p className="text-gray-600">{post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
