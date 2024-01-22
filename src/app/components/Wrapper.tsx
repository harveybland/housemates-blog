"use client";

import { useGlobalContext } from "../Context/store";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const { data } = useGlobalContext();
  return (
    <div className={`${data.darkMode ? "dark-bg" : "light-bg"}`}>
      {children}
    </div>
  );
}
