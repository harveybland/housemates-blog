import { CommentProps } from "../../../../types/types";
import Avatar from "../Avatar";

export default function CommentCard({ name, body, email }: CommentProps) {
  return (
    <div className="flex flex-col  bg-white mb-2 p-2 rounded">
      <div className="flex  sm:flex-row flex-col gap-2">
        <Avatar name={name} />
        <div className="bg-gray-200 p-15 rounded-2xl px-5 py-2 w-full">
          <div className="flex flex-wrap justify-between w-full">
            <h2 className="font-semibold">{name}</h2>
            <p className="text-sm">{email}</p>
          </div>
          <p className="font-light">{body}</p>
        </div>
      </div>
    </div>
  );
}
