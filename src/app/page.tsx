"use client";

import { useEffect, useState } from "react";
import { postsData } from "../../lib/api";
import { Post } from "../../types/types";
import PostCard from "./components/cards/PostCard";
import Link from "next/link";
import AuthorSearchComponent from "./components/OptionBar";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isGrid, setIsGrid] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  async function getPosts() {
    const response: Post[] = await postsData();
    setIsLoading(false);
    setPosts(response);
    setFilteredPosts(response);
  }

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    // Filter posts based on author name and search term
    const filtered = posts.filter((post) => {
      const authorNameMatches = post.author?.name
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());
      return authorNameMatches;
    });

    setFilteredPosts(filtered);
  }, [searchTerm, posts]);

  return (
    <div className="page-container relative">
      <div>
        <h1 className="text-5xl font-bold mb-5">Blogs</h1>
      </div>
      {isLoading && <div className="loading-bar"></div>}
      <AuthorSearchComponent
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isGrid={isGrid}
        setIsGrid={setIsGrid}
      />
      <div>
        {filteredPosts.length > 0 ? (
          <div
            className={`blog-cards animate-pop-in ${!isGrid && "!grid-cols-1"}`}
          >
            {filteredPosts.map((post) => (
              <Link href={`/post/${post.id}`} key={post.id}>
                <PostCard
                  id={post.id}
                  title={post.title}
                  body={post.body}
                  NumbOfComments={post.NumbOfComments}
                  author={post.author}
                  isGrid={isGrid}
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 pt-5">No posts found</div>
        )}
      </div>
    </div>
  );
}
