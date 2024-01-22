"use client";

import { useEffect, useState } from "react";
import { postsData } from "../../lib/api";
import { PostProps, PostsResponseProps } from "../../types/types";
import PostCard from "./components/cards/PostCard";
import ViewToggleButton from "./components/buttons/ViewToggleButton";

export default function Home() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isGrid, setIsGrid] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  async function getPosts() {
    const response: PostsResponseProps[] = await postsData();
    setPosts(response);
    setFilteredPosts(response); // Set filteredPosts to all posts
    setIsLoading(false);
  }

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    // Filter posts based on user name and search term
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
      <div className="bg-white p-2 rounded flex justify-between gap-2 items-center mb-5 shadow-[0px_0px_20px_0px_rgba(0,0,0,.1)] sticky top-0 z-50">
        <div className="w-full">
          <input
            type="text"
            className="input-primary"
            placeholder="Search Author"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="hidden gap-2 sm:flex">
          <ViewToggleButton
            isGrid={isGrid}
            onClick={() => setIsGrid(true)}
            label="Grid"
          />
          <ViewToggleButton
            isGrid={!isGrid}
            onClick={() => setIsGrid(false)}
            label="List"
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
                  isGrid={isGrid}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
