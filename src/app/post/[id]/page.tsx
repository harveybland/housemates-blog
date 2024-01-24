import CommentCard from "@/app/components/cards/CommentCard";
import PostCard from "@/app/components/cards/PostCard";
import { Comment as Comment, Post, Author } from "../../../../types/types";
import AuthorCard from "@/app/components/cards/AuthorCard";
import { Metadata } from "next";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ThemeWrapper from "@/app/components/ThemeWrapper";

const URL = "https://jsonplaceholder.typicode.com";

export async function generateMetadata({
  params,
  searchParams,
}: any): Promise<Metadata> {
  const id = params.id;

  // fetch author data
  const authorResponse = await fetch(`${URL}/users/${id}`);
  const author = await authorResponse.json();

  return {
    title: `${author.name} Blog Post`,
    description: `${author.name} Blog Post Description`,
  };
}

export default async function Post({
  params,
}: {
  params: {
    id: string;
  };
}) {
  // Blog post
  const postReponse = await fetch(`${URL}/posts/${params.id}`);
  const post: Post = await postReponse.json();

  // Author data
  const authorResponse = await fetch(`${URL}/users/${post.userId}`);
  const author: Author = await authorResponse.json();

  // Blog post comments
  const commentsResponse = await fetch(`${URL}/comments?postId=${params.id}`);
  const comments: Comment[] = await commentsResponse.json();

  // Filtered posts from author
  const postsReponse = await fetch(`${URL}/posts`);

  const posts = await postsReponse.json();
  const filterPosts: Post[] = posts.filter(
    (filtered: Post) => filtered.userId === post.userId
  );

  return (
    <div className="main-bg">
      <div className="page-container">
        <div>
          <div>
            {author && (
              <div key={author.id}>
                <AuthorCard
                  name={author.name}
                  email={author.email}
                  address={author.address}
                  phone={author.phone}
                  website={author.website}
                  company={author.company}
                />
              </div>
            )}
          </div>
          <div className="pt-5">
            {post && (
              <div key={post.id}>
                <PostCard
                  id={post.id}
                  title={post.title}
                  body={post.body}
                  NumbOfComments={comments.length}
                  isGrid={false}
                />
              </div>
            )}
          </div>
          <ThemeWrapper className="bg-white pt-1 pb-3 px-5 rounded-b">
            <div className="flex gap-1 items-center">
              <h3 className="font-semibold text-lg">Most relevant </h3>
              <MdOutlineKeyboardArrowDown size={25} />
            </div>
            {comments && (
              <div>
                {comments.map((comment) => (
                  <CommentCard
                    key={comment.id}
                    name={comment.name}
                    body={comment.body}
                    email={comment.email}
                  />
                ))}
              </div>
            )}
          </ThemeWrapper>
        </div>
      </div>
      <div className="bg-brand-leaf">
        <div className="page-container">
          <h2 className="text-2xl mb-4 font-semibold text-white">
            Latest posts from {author.name}
          </h2>
          {filterPosts.length > 0 && (
            <div className={`blog-cards`}>
              {filterPosts.slice(0, 3).map((post) => (
                <Link href={`/post/${post.id}`} key={post.id}>
                  <PostCard
                    id={post.id}
                    title={post.title}
                    body={post.body}
                    NumbOfComments={comments.length}
                    author={author}
                    isGrid={true}
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
