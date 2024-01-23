import { Comment } from "../../../../types/types";
import Avatar from "../Avatar";
import ThemeWrapper from "../ThemeWrapper";

export default function CommentCard({ name, body, email }: Comment) {
  return (
    <ThemeWrapper className="flex flex-col  bg-white mb-3 py-2 rounded">
      <div className="flex gap-2 flex-col sm:flex-row">
        <Avatar name={name} width="w-8" height="h-8" fontSize="sm" />
        <div className="flex-1">
          <ThemeWrapper className="bg-gray-200 p-15 rounded-2xl px-3 py-2">
            <div className="flex flex-wrap pl-1 justify-between w-full">
              <h2 className="font-semibold">{name}</h2>
              <p className="text-sm underline">{email}</p>
            </div>
            <p className="pt-1 text-brand-space">{body}</p>
          </ThemeWrapper>
          <div className="flex gap-4 mt-1 ml-1 text-sm">
            <p>2 d</p>
            <p className="ursor-pointer ">Like</p>
            <p className="ursor-pointer ">Reply</p>
          </div>
        </div>
      </div>
    </ThemeWrapper>
  );
}
