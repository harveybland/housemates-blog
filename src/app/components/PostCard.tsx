import { PostProps } from "../../../types/types";

export default function PostCard({ id, title, userId, body }: PostProps) {
  return (
    <div className="border border-b-2 mb-3">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}
