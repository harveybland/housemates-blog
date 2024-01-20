import Link from "next/link";
import { PostProps } from "../../../types/types";

export default function PostCard({ id, title, userId, body }: PostProps) {
  return (
    <Link
      href={`/post/${id}`}
      className="block border border-b-2 mb-3 p-3 rounded"
    >
      <h1>{title}</h1>
      <p>{body}</p>
    </Link>
  );
}
