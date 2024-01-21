import { CommentProps } from "../../../../types/types";
import avatar from "../../../../public/images/profile.png";
import Image from "next/image";

export default function CommentCard({ name, body, email }: CommentProps) {
  return (
    <div className="bg-white flex gap-1 flex-col mb-3 p-3 rounded">
      <div className="flex items-center gap-2">
        <Image src={avatar} alt="avatar" width={23} height={23} />
        <h1 className="font-semibold">{name}</h1>
      </div>
      <p>{body}</p>
      <p>{email}</p>
    </div>
  );
}
