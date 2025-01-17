// app/posts/[id]/page.tsx
import { posts, PostType } from "@/lib/posts";
import { notFound } from "next/navigation";
import Image from "next/image";

// 1) params の型：今回は URLパラメータが { id: string } になるように定義
type PostDetailPageProps = {
  params: {
    id: string;
  };
};

// 2) PostDetail の引数となる型
function PostDetail({ heading, post }: { heading: string; post: PostType }) {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">
        {heading}：{post.title}
      </h2>
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={600}
        height={300}
        className="w-full h-auto object-cover"
      />
      <div className="card">
        <h3 className="font-semibold">{post.title}</h3>
        <p className="text-gray-600">{post.description}</p>
        <p className="text-sm text-gray-500 mt-2">{post.date}</p>
      </div>
    </main>
  );
}

// 3) ページコンポーネント側
export default function PostDetailPage({ params }: PostDetailPageProps) {
  const post = posts.find((p) => p.id === Number(params.id));
  if (!post) {
    notFound(); // 404エラー
  }

  return post ? <PostDetail heading="投稿詳細" post={post} /> : null;
}
