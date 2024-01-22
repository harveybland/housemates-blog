import { Author } from "../../../../types/types";
import Avatar from "../Avatar";

export default function AuthorCard({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}: Author) {
  return (
    <div className="bg-white p-3 rounded">
      <div className="flex gap-3 items-center border-b pb-3 mb-2">
        <div>
          <Avatar name={name} />
        </div>
        <div className="flex justify-between flex-1">
          <div className="flex flex-col">
            <h2 className="font-semibold">{name}</h2>
            <p>{website}</p>
          </div>
          {/* <p className="bg-brand-leaf p-1 rounded-md">{username}</p> */}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold">Details</h2>
        <div className="flex gap-1">
          <p>{address?.suite}</p>
          <p>{address?.street}</p>
          <p>{address?.city}</p>
          <p>{address?.zipcode}</p>
        </div>
        <div className="flex gap-1">
          <p className="underline">{email}</p>
          <p>{phone}</p>
        </div>
        <div className="flex gap-1">
          <p>{company?.name}</p>
          <p>{company?.catchPhrase}</p>
        </div>
      </div>
    </div>
  );
}
