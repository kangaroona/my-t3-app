import { api } from "@/trpc/server";
export async function PostList() {
  const posts = await api.post.getAll();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.name}</li>
      ))}
    </ul>
  );
}
