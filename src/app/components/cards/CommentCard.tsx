import { CommentProps } from "../../../../types/types";
import Avatar from "../avatar";

export default function CommentCard({ name, body, email }: CommentProps) {
  return (
    <div className="bg-white flex gap-1 flex-col mb-3 p-3 rounded">
      <div className="flex items-center gap-2">
        <Avatar name={name} />
        <div className="flex gap-1">
          <h2 className="font-semibold">{name}</h2>
          <p>{email}</p>
        </div>
      </div>
      <p>{body}</p>
    </div>
  );
}
