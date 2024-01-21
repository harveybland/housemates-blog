import { UserProps } from "../../../../types/types";
import Avatar from "../avatar";

export default function UserCard({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}: UserProps) {
  return (
    <div className="bg-white p-3">
      <div className="flex gap-3 items-center p-2 border-b-2">
        <div className="relative inline-block">
          <Avatar name={name} />
        </div>
        <div className="flex flex-col">
          <h2>{name}</h2>
          {/* <p>{username}</p> */}
          <p>{website}</p>
        </div>
      </div>
      <div>
        <h2>Address</h2>
        <div className="flex gap-1">
          <p>{address?.suite}</p>
          <p>{address?.street}</p>
          <p>{address?.city}</p>
          <p>{address?.zipcode}</p>
        </div>
      </div>
      <div>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
      <div>
        <h2>Company</h2>
        <p>{company?.name}</p>
        <p>{company?.catchPhrase}</p>
      </div>
    </div>
  );
}
