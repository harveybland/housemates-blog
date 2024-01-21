import CommentCard from "@/app/components/cards/CommentCard";
import PostCard from "@/app/components/cards/PostCard";
import { CommentProps } from "../../../../types/types";

export default async function Post({
  params,
}: {
  params: {
    id: string;
  };
}) {
  // Post data
  const reponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await reponse.json();

  // User data
  const reponse2 = await fetch(
    `https://jsonplaceholder.typicode.com/users/${post.userId}`
  );
  const user = await reponse2.json();

  // Comments data
  const reponse3 = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${params.id}`
  );
  const comments = await reponse3.json();

  return (
    <>
      <div className="page-container">
        <div>
          {user && (
            <div>
              <div key={user.id}>{user.name}</div>
            </div>
          )}
        </div>
        <div>
          {post && (
            <div key={post.id}>
              <PostCard
                id={post.id}
                title={post.title}
                body={post.body}
                NumbOfComments={post.NumbOfComments}
              />
            </div>
          )}
        </div>
        <div>
          {comments && (
            <div className="pt-5 mx-5">
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
        </div>
      </div>
      <div className="bg-brand-leaf">
        <div className="page-container">
          <h1 className="text-2xl font-semibold text-white">
            More posts from {user.name}
          </h1>
        </div>
      </div>
    </>
  );
}
