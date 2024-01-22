import { Author } from "../../../../types/types";
import Avatar from "../Avatar";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoBusinessOutline } from "react-icons/io5";
import ThemeWrapper from "../ThemeWrapper";

export default function AuthorCard({
  name,
  email,
  address,
  phone,
  website,
  company,
}: Author) {
  return (
    <ThemeWrapper className="bg-white p-3 rounded">
      <div className="flex gap-3 items-center border-b pb-3 mb-2">
        <div>
          <Avatar name={name} />
        </div>
        <div className="flex justify-between flex-1">
          <div className="flex flex-col">
            <h1 className="font-semibold">{name}</h1>
            <p>{website}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold">Details</h2>
        <div className="flex gap-2 items-center">
          <IoLocationOutline size={18} />
          <p>{address?.suite},</p>
          <p>{address?.street},</p>
          <p>{address?.city},</p>
          <p>{address?.zipcode}</p>
        </div>
        <div className="flex gap-3">
          <div className="flex gap-2 items-center">
            <MdOutlineEmail size={18} />
            <p className="underline">{email}</p>
          </div>
          <div className="flex gap-2 items-center">
            <LuPhone size={18} />
            <p>{phone}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <IoBusinessOutline size={18} />
          <p>{company?.name}</p>
          <p>{company?.catchPhrase}</p>
        </div>
      </div>
    </ThemeWrapper>
  );
}
