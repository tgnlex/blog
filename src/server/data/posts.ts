

type Post = { id: number; title: string; md: string };

const posts: Post[] = [
  { id: 1, title: 'post 1', md: "one.md" },
  { id: 2, title: 'post 2', md: "two.md" }
]


export default posts;
export type { Post };
