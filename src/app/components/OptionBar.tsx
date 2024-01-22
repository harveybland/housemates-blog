"use client";

import React from "react";
import ViewToggleButton from "./buttons/ViewToggleButton";
import { OptionBarProps } from "../../../types/types";
import { IoGridOutline } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

export default function OptionBar({
  searchTerm,
  setSearchTerm,
  isGrid,
  setIsGrid,
}: OptionBarProps) {
  return (
    <div className="bg-white p-2 rounded flex justify-between gap-2 items-center mb-5 shadow-[0px_0px_20px_0px_rgba(0,0,0,.1)] sticky top-0 z-50">
      <label className="search-bar">
        <IoSearch size={20} />
        <input
          type="text"
          placeholder="Search Author"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
      <div className="hidden gap-2 sm:flex">
        <ViewToggleButton
          isGrid={isGrid}
          onClick={() => setIsGrid(true)}
          icon={<IoGridOutline size={21} />}
        />
        <ViewToggleButton
          isGrid={!isGrid}
          onClick={() => setIsGrid(false)}
          icon={<BsList size={23} />}
        />
      </div>
    </div>
  );
}
