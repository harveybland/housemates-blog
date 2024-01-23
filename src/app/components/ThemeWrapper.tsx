"use client";
import { useGlobalContext } from "@/app/Context/store";

export default function ThemeWrapper({
  children,
  className = "",
  isGrid = true,
}: {
  children: React.ReactNode;
  className?: string;
  isGrid?: boolean;
}) {
  const { data } = useGlobalContext();

  return (
    <div
      className={`${data.darkMode && "dark-mode"}  ${
        !isGrid && "!min-h-[160px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
