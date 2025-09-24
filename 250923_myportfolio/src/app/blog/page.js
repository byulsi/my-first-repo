// src/app/blog/page.js
import Link from "next/link";

export default function BlogList() {
  const posts = [
    {
      slug: "getting-started-nextjs",
      title: "Next.js 시작하기",
      date: "2025-08-15",
      summary: "Next.js를 처음 시작하는 방법을 알아봅니다",
    },
    {
      slug: "understanding-routing",
      title: "라우팅 이해하기",
      date: "2025-08-16",
      summary: "Next.js 파일 기반 라우팅을 배워봅니다",
    },
    {
      slug: "my-coding-journey",
      title: "나의 코딩 여정",
      date: "2025-08-17",
      summary: "코딩 시작 계기와 경험을 공유합니다",
    },
  ];

  return (
    <div className="py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-800">블로그</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-8">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600">
                {post.title}
              </h2>
            </Link>
            <div className="flex gap-4 text-sm text-gray-600 mb-4">
              <span>{post.date}</span>
            </div>
            <p className="text-gray-700 leading-relaxed">{post.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
