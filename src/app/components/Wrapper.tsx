"use client";

import { useGlobalContext } from "../context/store";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const { data } = useGlobalContext();

  return (
    <div
      className={`h-full min-h-screen ${
        data.darkMode ? "dark-bg" : "light-bg"
      }`}
    >
      {children}
    </div>
  );
}
