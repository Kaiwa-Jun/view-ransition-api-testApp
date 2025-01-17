"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { posts } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";

// 一覧のレンダリング処理をまとめたコンポーネント
export function PostList({ heading }: { heading: string }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{heading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <Card className="transition-transform transform hover:scale-105 hover:bg-gray-100 w-full">
              <Image
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-32 object-cover"
                width={250}
                height={150}
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
          </Link>
        ))}
      </div>
    </div>
  );
}
