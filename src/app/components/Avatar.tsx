import { AvatarProps } from "../../../types/types";

export default function Avatar({ name, width, height, fontSize }: AvatarProps) {
  return (
    <div className="relative inline-block">
      <div
        className={`${width || "w-9"} ${height || "h-9"} bg-brand-leaf text-${
          fontSize || "xl"
        } text-white rounded-full flex items-center justify-center`}
      >
        {name.slice(0, 1).toUpperCase()}
      </div>
    </div>
  );
}
