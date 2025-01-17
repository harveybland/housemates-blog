import Avatar from "../Avatar";
import { Post } from "../../../../types/types";
import { FaRegComment } from "react-icons/fa";
import ThemeWrapper from "../ThemeWrapper";

export default function PostCard({
  title,
  body,
  author,
  NumbOfComments,
  isGrid,
}: Post) {
  return (
    <ThemeWrapper
      className="flex gap-4 flex-col justify-between p-3 rounded min-h-[250px] max-h-[250px] bg-white shadow-[0px_0px_20px_0px_rgba(0,0,0,.1)]"
      isGrid={isGrid}
    >
      <div className="flex flex-col gap-3">
        <div
          className={`flex gap-2 items-center group ${
            !author?.name && "hidden"
          }`}
        >
          <Avatar name={author?.name ?? ""} />
          <span className="group-hover:underline">{author?.name}</span>
        </div>
        <div>
          <h2 className="font-semibold mb-1 blog-title">{title}</h2>
          <p className="text-brand-space blog-text">{body}</p>
        </div>
      </div>
      <div className="flex gap-4 text-brand-space text-sm border-t border-b border-gray-300 py-2 px-1">
        <p>1 min read</p>
        <p className="flex items-center gap-1">
          <FaRegComment size={18} />
          <span>{NumbOfComments}</span>
        </p>
      </div>
    </ThemeWrapper>
  );
}
