import CommentCard from "@/app/components/cards/CommentCard";
import PostCard from "@/app/components/cards/PostCard";
import { CommentProps } from "../../../../types/types";
import UserCard from "@/app/components/cards/UserCard";
import RevealOnScroll from "@/app/components/RevealOnScroll";

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
                />
              </div>
            )}
          </div>
          <div className="pt-5 mx-5">
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
          </div>
        </div>
      </div>
      <div className="bg-brand-leaf">
        <div className="page-container">
          <h2 className="text-2xl font-semibold text-white">
            More posts from {user.name}
          </h2>
        </div>
      </div>
      <div>
        <RevealOnScroll name={user.name} postTitle={post.title} />
      </div>
    </>
  );
}
