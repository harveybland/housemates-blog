"use client";

import ViewToggleButton from "./buttons/ViewToggleButton";
import { OptionBarProps } from "../../../types/types";

export default function OptionBar({
  searchTerm,
  setSearchTerm,
  isGrid,
  setIsGrid,
}: OptionBarProps) {
  return (
    <div className="bg-white p-2 rounded flex justify-between gap-2 items-center mb-5 shadow-[0px_0px_20px_0px_rgba(0,0,0,.1)] sticky top-0 z-50">
      <div className="w-full">
        <input
          type="text"
          className="input-primary"
          placeholder="Search Author"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="hidden gap-2 sm:flex">
        <ViewToggleButton
          isGrid={isGrid}
          onClick={() => setIsGrid(true)}
          label="Grid"
        />
        <ViewToggleButton
          isGrid={!isGrid}
          onClick={() => setIsGrid(false)}
          label="List"
        />
      </div>
    </div>
  );
}
