import { posts } from "@/lib/posts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function PostDetail({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === Number(params.id));
  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto p-6">
      <Card>
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={600}
          height={300}
          className="w-full h-auto object-cover"
        />
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{post.description}</p>
          <p className="text-sm text-gray-500 mt-2">{post.date}</p>
        </CardContent>
      </Card>
    </main>
  );
}
