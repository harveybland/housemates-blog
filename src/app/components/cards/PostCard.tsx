import Link from "next/link";
import { PostProps } from "../../../../types/types";
import Image from "next/image";
import comment from "../../../../public/images/comment.svg";
import Avatar from "../Avatar";

export default function PostCard({
  id,
  title,
  body,
  user,
  NumbOfComments,
  isGrid,
}: PostProps) {
  return (
    <Link
      href={`/post/${id}`}
      className={`flex gap-4 flex-col justify-between p-3 rounded min-h-[250px] max-h-[250px] bg-white shadow-[0px_0px_20px_0px_rgba(0,0,0,.1)] ${
        !isGrid && "!min-h-[100px]"
      } `}
    >
      <div className="flex flex-col gap-3">
        <div
          className={`flex gap-2 items-center group ${!user?.name && "hidden"}`}
        >
          <Avatar name={user?.name ?? ""} />
          <span className="group-hover:underline">{user?.name}</span>
        </div>
        <div>
          <h2 className="font-semibold mb-1 blog-title">{title}</h2>
          <p className="text-brand-space blog-text">{body}</p>
        </div>
      </div>
      <div className="flex gap-4 text-brand-space text-sm border-t border-b border-gray-300 py-2 px-1">
        <p>1 min read</p>
        <p className="flex items-center gap-1">
          <Image src={comment} alt="comment svg" width={18} height={18} />
          <span>{NumbOfComments}</span>
        </p>
      </div>
    </Link>
  );
}
