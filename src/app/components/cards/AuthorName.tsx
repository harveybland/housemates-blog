import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Avatar from "../Avatar";

interface User {
  name: string;
}

export default function AuthorName({ user, id }: { user: User; id: number }) {
  // If user has a name, display the user information with Tooltip
  if (user?.name) {
    return (
      <div
        data-tooltip-id={`my-tooltip-${id}`}
        className="flex gap-2 items-center group"
      >
        <Avatar name={user.name} />
        <span className="group-hover:underline">{user.name}</span>
        <ReactTooltip
          id={`my-tooltip-${id}`}
          place="top"
          className="z-50"
          content={`Hello ${user.name}! I'm a Tooltip`}
        />
      </div>
    );
  }

  // If user doesn't have a name, display a placeholder or handle it as needed
  return (
    <div className="hidden">
      {/* You can customize this part based on your requirements */}
      <span>User has no name</span>
    </div>
  );
}
