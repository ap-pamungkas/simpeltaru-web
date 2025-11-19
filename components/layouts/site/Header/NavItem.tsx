"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  url: string;
  label: string;
  className?: string;
  target?:string
}

export default function NavItem({ url, label, className, target}: NavItemProps) {
  const pathname = usePathname();

  const isActive = pathname === url;

  return (
    <li>
      <Link
        href={url}
        target={target}
        className={`nav-item transition-opacity duration-300 relative group 
                    ${isActive ? "font-bold " : "opacity-75 hover:opacity-100"} ${className}`}
      >
        {label}
      </Link>
    </li>
  );
}
