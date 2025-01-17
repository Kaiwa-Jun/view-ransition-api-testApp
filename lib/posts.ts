export type PostType = {
  id: number;
  title: string;
  date: string;
  description: string;
};

export const posts: PostType[] = [
  {
    id: 1,
    title: "Introduction to Programming",
    date: "2025-01-01",
    description: "Learn the basics of programming with this introductory post.",
  },
  {
    id: 2,
    title: "Advanced JavaScript Techniques",
    date: "2025-01-01",
    description: "Explore advanced concepts and techniques in JavaScript.",
  },
  {
    id: 3,
    title: "Understanding React",
    date: "2025-01-02",
    description: "A comprehensive guide to building applications with React.",
  },
  {
    id: 4,
    title: "CSS for Beginners",
    date: "2025-01-03",
    description: "Get started with CSS and learn how to style your web pages.",
  },
  {
    id: 5,
    title: "Mastering TypeScript",
    date: "2025-01-04",
    description:
      "Deep dive into TypeScript and enhance your JavaScript skills.",
  },
  {
    id: 6,
    title: "Web Development Trends 2025",
    date: "2025-01-05",
    description: "Stay updated with the latest trends in web development.",
  },
  {
    id: 7,
    title: "Building REST APIs",
    date: "2025-01-06",
    description: "Learn how to build robust and scalable REST APIs.",
  },
  {
    id: 8,
    title: "Introduction to GraphQL",
    date: "2025-01-07",
    description: "Discover the power of GraphQL for querying your data.",
  },
  {
    id: 9,
    title: "Deploying Applications with Docker",
    date: "2025-01-08",
    description: "A guide to deploying your applications using Docker.",
  },
];
