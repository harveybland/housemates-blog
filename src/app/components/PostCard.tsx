import Link from "next/link";
import { PostProps } from "../../../types/types";

export default function PostCard({ id, title, body, name }: PostProps) {
  return (
    <Link
      href={`/post/${id}`}
      className="flex gap-1 flex-col border border-b-2 mb-3 p-3 rounded"
    >
      <span>Author: {name}</span>
      <div>
        <h1 className="font-semibold">{title}</h1>
        <p>{body}</p>
      </div>
      <div className="flex gap-4">
        <span>min read </span>
        <span>5 Comments</span>
      </div>
    </Link>
  );
}
