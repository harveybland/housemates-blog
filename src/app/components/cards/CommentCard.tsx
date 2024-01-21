import { CommentProps } from "../../../../types/types";

export default function CommentCard({ name, body, email }: CommentProps) {
  return (
    <div className="flex gap-1 flex-col mb-3 p-3 rounded">
      <h1 className="font-semibold">{name}</h1>
      <p>{body}</p>
      <p>{email}</p>
    </div>
  );
}
