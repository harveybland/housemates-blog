"use client";

import { useEffect, useState } from "react";
import { postsData } from "../../lib/api";
import { PostProps, PostResponseProps } from "../../types/types";
import PostCard from "./components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isGrid, setIsGrid] = useState(true);

  async function getPosts() {
    const response: PostResponseProps[] = await postsData();
    setPosts(response);
    if (response) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="page-container relative">
      {isLoading && <div className="loadingBar"></div>}
      <div className="my-4">
        <div className="flex gap-2">
          <button
            type="button"
            className={`button-primary ${isGrid && "!bg-brand-leaf"}`}
            onClick={() => setIsGrid(true)}
          >
            Grid view
          </button>
          <button
            type="button"
            className={`button-primary ${!isGrid && "!bg-brand-leaf"}`}
            onClick={() => setIsGrid(false)}
          >
            List view
          </button>
        </div>
      </div>
      <div>
        {posts.length > 0 && (
          <div
            className={`blog-cards animate-pop-in ${!isGrid && "!grid-cols-1"}`}
          >
            {posts.map((post: PostProps) => (
              <div key={post.id}>
                <PostCard
                  id={post.id}
                  title={post.title}
                  body={post.body}
                  NumbOfComments={post.NumbOfComments}
                  user={post.user}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
