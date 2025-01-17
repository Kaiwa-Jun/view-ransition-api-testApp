import { PostList } from "@/components/PostList";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <PostList heading="投稿一覧" />
    </main>
  );
}
