"use client";

import { useEffect, useState } from "react";
import { postsData } from "../../lib/api";
import { PostProps, PostResponseProps } from "../../types/types";
import PostCard from "./components/PostCard";
import ViewToggleButton from "./components/buttons/ViewToggleButton";

export default function Home() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isGrid, setIsGrid] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  async function getPosts() {
    const response: PostResponseProps[] = await postsData();
    setPosts(response);
    setFilteredPosts(response); // Initially set filteredPosts to all posts
    setIsLoading(false);
  }

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    // Filter posts based on user.name and search term
    const filtered = posts.filter((post) => {
      const userNameMatches = post.user?.name
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());
      return userNameMatches;
    });

    setFilteredPosts(filtered);
  }, [searchTerm, posts]);

  return (
    <div className="page-container relative">
      {isLoading && <div className="loadingBar"></div>}
      <div className="flex justify-between items-center my-4">
        <div>
          <input
            type="text"
            placeholder="Search Author"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <ViewToggleButton
            isGrid={isGrid}
            onClick={() => setIsGrid(true)}
            label="Grid view"
          />
          <ViewToggleButton
            isGrid={!isGrid}
            onClick={() => setIsGrid(false)}
            label="List view"
          />
        </div>
      </div>
      <div>
        {filteredPosts.length > 0 && (
          <div
            className={`blog-cards animate-pop-in ${!isGrid && "!grid-cols-1"}`}
          >
            {filteredPosts.map((post: PostProps) => (
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
