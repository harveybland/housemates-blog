import CommentCard from "@/app/components/cards/CommentCard";
import PostCard from "@/app/components/cards/PostCard";
import { CommentProps, PostProps } from "../../../../types/types";
import UserCard from "@/app/components/cards/UserCard";
import { Metadata } from "next";

export async function generateMetadata({
  params,
  searchParams,
}: any): Promise<Metadata> {
  const id = params.id;

  // fetch user data
  const userResponse = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await userResponse.json();

  return {
    title: `${user.name} Blog Post`,
    description: `${user.name} Blog Post Description`,
  };
}

export default async function Post({
  params,
}: {
  params: {
    id: string;
  };
}) {
  // Post data
  const postReponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await postReponse.json();

  // Posts by user
  const postsReponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts`
  );

  const posts = await postsReponse.json();
  const filterPosts = posts
    .slice(0, 3)
    .filter((p: any) => p.userId === post.userId);

  // User data
  const userResponse = await fetch(
    `https://jsonplaceholder.typicode.com/users/${post.userId}`
  );
  const user = await userResponse.json();

  // Comments data
  const commentsResponse = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${params.id}`
  );
  const comments = await commentsResponse.json();

  return (
    <>
      <div className="page-container">
        <div>
          <div>
            {user && (
              <div key={user.id}>
                <UserCard
                  name={user.name}
                  username={user.username}
                  email={user.email}
                  address={user.address}
                  phone={user.phone}
                  website={user.website}
                  company={user.company}
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
          <div className="bg-white pt-3 pb-4 px-5">
            <h3 className="font-semibold mb-2 text-lg">Most relevant </h3>
            {comments && (
              <div>
                {comments.map((comment: CommentProps) => (
                  <CommentCard
                    key={comment.id}
                    name={comment.name}
                    body={comment.body}
                    email={comment.email}
                  />
                ))}
              </div>
            )}
            <div>
              <input
                type="text"
                className="input-primary"
                placeholder="Write a comment..."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-brand-leaf">
        <div className="page-container">
          <h2 className="text-2xl mb-4 font-semibold text-white">
            More posts from {user.name}
          </h2>
          {filterPosts.length > 0 && (
            <div className={`blog-cards`}>
              {filterPosts.map((post: PostProps) => (
                <div key={post.id}>
                  <PostCard
                    id={post.id}
                    title={post.title}
                    body={post.body}
                    NumbOfComments={post.NumbOfComments}
                    user={user}
                    isGrid={true}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
