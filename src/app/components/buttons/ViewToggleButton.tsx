import { ViewToggleButtonProps } from "../../../../types/types";

export default function ViewToggleButton({
  isGrid,
  onClick,
  label,
}: ViewToggleButtonProps) {
  return (
    <button
      type="button"
      className={`button-primary ${isGrid && "!bg-brand-leaf"}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
