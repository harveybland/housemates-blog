import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Avatar from "../Avatar";

interface author {
  name: string;
}

export default function AuthorName({
  author,
  id,
}: {
  author: author;
  id: number;
}) {
  // If author has a name, display the author information with Tooltip
  if (author?.name) {
    return (
      <div
        data-tooltip-id={`my-tooltip-${id}`}
        className="flex gap-2 items-center group"
      >
        <Avatar name={author.name} />
        <span className="group-hover:underline">{author.name}</span>
        <ReactTooltip
          id={`my-tooltip-${id}`}
          place="top"
          className="z-50"
          content={`Hello ${author.name}! I'm a Tooltip`}
        />
      </div>
    );
  }

  // If author doesn't have a name, display a placeholder or handle it as needed
  return (
    <div className="hidden">
      {/* You can customize this part based on your requirements */}
      <span>author has no name</span>
    </div>
  );
}
