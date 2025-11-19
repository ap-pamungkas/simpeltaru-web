"use client";

import { useState } from "react";
import NavItem from "./NavItem";

interface HeaderProps {
  open: boolean;
  
}

function MobileNav({ open }: HeaderProps) {
  const [openDropdown, setOpenDropdown] = useState(false);

  if (!open) return null;

  return (
    <div className="md:hidden absolute top-full left-0 w-full bg-black px-4 pb-4">
      <nav>
        <ul className="flex flex-col space-y-3 mt-3">

          <NavItem label="Beranda" url="/" />
          <NavItem label="Peta" url="/peta" />

          {/* DROPDOWN KPPR */}
          <li className="flex flex-col">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="text-left w-full transition-opacity duration-300 relative group  cursor-pointer py-2  "
            >
              KPPR {openDropdown ? "▲" : "▼"}
            </button>

            {/* MENU DROPDOWN */}
            {openDropdown && (
              <ul className="ml-4 mt-2 space-y-2">
                 <NavItem label="KPPR Kegiatan Non" url="/kppr/non" />
                                <hr className="mt-2 mb-2 w-1/2" />
                              <NavItem label="KPPR Kegiatan Berusaha" url="/kppr/berusaha" />
              </ul>
            )}
          </li>

          <NavItem label="Dokumen" url="/dokumen" />
          <NavItem label="Pengaduan" url="/pengaduan" />
        </ul>
      </nav>
    </div>
  );
}

export default MobileNav;
