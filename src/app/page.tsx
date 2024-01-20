import { PostProps } from "../../types/types";
import PostCard from "./components/PostCard";

export default async function Home() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postsJson = await posts.json();

  return (
    <div className="page-container">
      <div className="animate-pop-in">
        {postsJson.map((post: PostProps) => (
          <div key={post.id}>
            <PostCard
              id={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
