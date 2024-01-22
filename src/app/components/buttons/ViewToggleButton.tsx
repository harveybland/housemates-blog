import { ViewToggleButtonProps } from "../../../../types/types";

export default function ViewToggleButton({
  isGrid,
  onClick,
  icon,
}: ViewToggleButtonProps) {
  return (
    <button
      type="button"
      className={`button-primary ${isGrid && "!bg-brand-leaf"}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
