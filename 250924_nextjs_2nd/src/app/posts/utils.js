// app/posts/utils.js
export async function getPosts(id) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/${id}"
  );
  if (!response.ok) {
    throw new Error("데이터를 불러오는 중 오류가 발생했습니다.");
  }
  return await response.json();
}
