import { CommentProps } from "../../../../types/types";
import Avatar from "../Avatar";

export default function CommentCard({ name, body, email }: CommentProps) {
  return (
    <div className="flex flex-col  bg-white mb-2 py-2 rounded">
      <div className="flex  gap-2">
        <Avatar name={name} />
        <div>
          <div className="bg-gray-200 p-15 rounded-2xl px-5 py-2 w-full">
            <div className="flex flex-wrap justify-between w-full">
              <h2 className="font-semibold">{name}</h2>
              <p className="text-sm underline">{email}</p>
            </div>
            <p className="font-light">{body}</p>
          </div>
          <div className="flex gap-4 mt-1 ml-1 text-sm">
            <p>2 d</p>
            <p>Like</p>
            <p>Reply</p>
          </div>
        </div>
      </div>
    </div>
  );
}
