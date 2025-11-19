"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import MobileNav from "./MobileNav";
import Navbar from "@/components/layouts/site/Header/Navbar";
import logoSimpeltaru from "@/public/images/logosimpeltaruputih.svg";
function Header() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  return (
    <header className="sticky top-0 bg-[#111827] text-white px-8 py-3 z-999999">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-widest">
          <Link href="/">
            <Image
              src={logoSimpeltaru}
              alt="Logo Simpeltaru"
              width={100}
              height={50}
            />
          </Link>
        </h1>

        <Navbar />
        <button
          onClick={handleToggle}
          className="text-white text-2xl focus:outline-none md:hidden"
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} />
        </button>
      </div>

      <MobileNav open={open} />
    </header>
  );
}

export default Header;
