import Image from "next/image";
import housemates from "../../../public/images/hm_logo.svg";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="w-full bg-white shadow-[0px_2px_12px_0px_rgba(0,0,0,.1)]">
      <Link href="/" className="flex items-center gap-2 h-20 px-5">
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
    </div>
  );
}
