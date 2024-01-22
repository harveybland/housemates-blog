"use client";

import { useGlobalContext } from "../../Context/store";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

export default function ToggleDarkMode() {
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
            <MdDarkMode color="#fff" size={25} />
          ) : (
            <MdOutlineDarkMode color="#fff" size={25} />
          )}
        </div>
      </button>
    </div>
  );
}
