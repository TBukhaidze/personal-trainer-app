"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GK from "../../public/logo/gk-logo.png";

interface IconProps {
  className?: string;
}

const CloseIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const MenuIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "მთავარი გვერდი", href: "#home" },
  { label: "ჩემს შესახებ", href: "#about" },
  { label: "პორტფოლიო", href: "#portfolio" },
  { label: "ფასები", href: "#price" },
  { label: "კონტაქტი", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="shrink-0 flex items-center">
            <Link href="/" aria-label="GK logo">
              <Image src={GK} alt="gk logo" width={60} height={60} priority />
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-100 focus:outline-none z-50 relative"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          <nav
            className={`
              fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 
              transition-all duration-300 ease-in-out
              md:static md:flex-row md:bg-transparent md:gap-8 md:h-auto md:w-auto md:shadow-none md:visible md:opacity-100 md:translate-y-0
              ${
                open
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-5"
              }
            `}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-medium text-gray-900 hover:text-blue-600 transition-colors md:text-base"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
