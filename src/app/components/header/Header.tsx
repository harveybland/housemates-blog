"use client";

import Image from "next/image";
import housemates from "../../../../public/images/hm_logo.svg";
import Link from "next/link";
import React from "react";
import { useGlobalContext } from "../../context/store";
import ThemeWrapper from "../ThemeWrapper";
import ToggleDarkMode from "../buttons/ToggleDarkMode";

export default function Header() {
  const { data } = useGlobalContext();

  return (
    <ThemeWrapper className="flex justify-between items-center w-full px-3 sm:px-5 bg-white shadow-[0px_2px_12px_0px_rgba(0,0,0,.1)]">
      <Link href="/" className="flex items-center gap-2 h-20">
        <Image
          src={housemates}
          alt="Housemates Logo"
          width={249}
          height={49}
          className="w-auto h-12"
          style={{
            filter: data?.darkMode ? "invert(100%)" : undefined,
          }}
        />
        <span className="header-logo">
          <p>Blog</p>
        </span>
      </Link>
      <div>
        <ToggleDarkMode />
      </div>
    </ThemeWrapper>
  );
}
