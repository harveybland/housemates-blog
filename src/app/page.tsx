"use client";

import { useEffect, useState } from "react";
import { postsData } from "../../lib/api";
import { PostProps, PostResponseProps } from "../../types/types";
import PostCard from "./components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  async function getPosts() {
    const response: PostResponseProps[] = await postsData();
    setPosts(response);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="page-container">
      {posts.length > 0 && (
        <div className="animate-pop-in">
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
  );
}
