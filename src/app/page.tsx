"use client";

import { useEffect, useState } from "react";
import { postsData } from "../../lib/api";
import { PostProps } from "../../types/types";
import PostCard from "./components/PostCard";

export default function Home() {
  const [postsResponse, setPosts] = useState<PostProps[]>([]);

  async function getPosts() {
    const response = await postsData();
    setPosts(response);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="page-container">
      {postsResponse.length > 0 && (
        <div>
          {postsResponse.map((post: PostProps) => (
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
      )}
    </div>
  );
}
