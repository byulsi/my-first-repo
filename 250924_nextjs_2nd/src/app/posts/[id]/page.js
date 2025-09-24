import { notFound } from "next/navigation";

async function getPost(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok) {
      return null; // 에러시 null 반환
    }
    return response.json();
  } catch (error) {
    return null; // 예외시 null 반환
  }
}

export default async function PostDetailPage({ params }) {
  const post = await getPost(params.id);

  if (!post) {
    notFound(); // not-found.js로 리다이렉트
  }

  return (
    <article className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg leading-relaxed">{post.body}</p>
    </article>
  );
}
