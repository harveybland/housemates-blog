import PostCard from "@/app/components/PostCard";

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

  return (
    <div>
      <div>
        {user && (
          <div>
            <div key={user.id}>{user.name}</div>
          </div>
        )}
      </div>
      <div>
        {post && (
          <div className="animate-pop-in">
            <div key={post.id}>
              <PostCard
                id={post.id}
                title={post.title}
                body={post.body}
                NumbOfComments={post.NumbOfComments}
                user={user}
              />
            </div>
          </div>
        )}
      </div>
      <div>
        <h1>More posts from {user.name}</h1>
      </div>
    </div>
  );
}
