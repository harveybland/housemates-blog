"use client";

import { useGlobalContext } from "../Context/store";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

export default function DarkMode() {
  const { data, setDarkMode } = useGlobalContext();

  return (
    <div>
      <button
        type="button"
        onClick={() =>
          setDarkMode({
            ...data,
            darkMode: !data.darkMode,
          })
        }
      >
        <div className="bg-brand-leaf p-2 rounded-full">
          {data.darkMode ? (
            <MdDarkMode size={25} />
          ) : (
            <MdOutlineDarkMode size={25} />
          )}
        </div>
      </button>
    </div>
  );
}
