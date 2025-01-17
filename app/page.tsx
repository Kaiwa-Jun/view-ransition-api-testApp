import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { posts } from "@/lib/posts";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">投稿一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="transition-transform transform hover:scale-105 hover:bg-gray-100 w-full"
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{post.description}</p>
                <p className="text-sm text-gray-500 mt-2">{post.date}</p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
