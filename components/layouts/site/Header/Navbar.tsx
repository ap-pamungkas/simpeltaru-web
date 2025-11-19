import { useState } from "react";
import NavItem from "./NavItem";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <nav className="hidden md:flex md:items-center md:mr-10">
      <ul className="flex items-center space-x-10 text-md font-medium">
        <NavItem label="Beranda" url="/" />
        <NavItem label="Peta" url="/peta" />

        {/* DROPDOWN KPPR */}
        <li className="relative">
          <button
            onClick={() => setOpenDropdown(!openDropdown)}
            className="opacity-75 hover:opacity-100 group  cursor-pointer"
          >
            KPPR 
          </button>

          {openDropdown && (
            <ul className="absolute left-0 mt-2  bg-neutral-700 gap-2.5 py-2 px-2 shadow-lg w-56 overflow-hidden">
              <NavItem label="KPPR Kegiatan Non" url="https://sicantik.go.id/sign-in" />
                <hr className="mt-2 mb-2" />
              <NavItem label="KPPR Kegiatan Berusaha" url="https://oss.go.id/id" />
            </ul>
          )}
        </li>

        <NavItem label="Dokumen" url="/dokumen" />
        <NavItem label="Pengaduan" url="/pengaduan" />
      </ul>
    </nav>
  );
}

export default Navbar;
