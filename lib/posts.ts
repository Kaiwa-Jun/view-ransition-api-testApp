export type PostType = {
  id: number;
  title: string;
  date: string;
  description: string;
};

export const posts: PostType[] = [
  {
    id: 1,
    title: "Hello, world!",
    date: "2025-01-01",
    description: "This is a test post.",
  },
  {
    id: 2,
    title: "Hello, world Next.js!",
    date: "2025-01-01",
    description: "This is a test post2.",
  },
];
