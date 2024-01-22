import Image from "next/image";
import housemates from "../../../public/images/hm_logo.svg";
import Link from "next/link";
import React from "react";
import DarkMode from "./DarkMode";

export default function Header() {
  return (
    <div className="flex justify-between items-center w-full px-3 sm:px-5 bg-white shadow-[0px_2px_12px_0px_rgba(0,0,0,.1)]">
      <Link href="/" className="flex items-center gap-2 h-20">
        <Image
          src={housemates}
          alt="Housemates Logo"
          width={249}
          height={49}
          className="w-auto h-12"
        />
        <span className="header-logo">
          <p>Blog</p>
        </span>
      </Link>
      <div>
        <DarkMode />
      </div>
    </div>
  );
}
