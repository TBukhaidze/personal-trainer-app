"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import GK from "../../public/logo/gk-logo.png";
import close from "../../public/icons/close.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [animating, setAnimating] = useState(false);

  const navItems = [
    { label: "მთავარი გვერდი", href: "#home" },
    { label: "ჩემს შესახებ", href: "#about" },
    { label: "პორტფოლიო", href: "#portfolio" },
    { label: "ფასები", href: "#price" },
    { label: "კონტაქტი", href: "#contact" },
  ];

  const toggleMenu = () => {
    if (open) {
      setAnimating(true);
      setTimeout(() => {
        setOpen(false);
        setAnimating(false);
      }, 300);
    } else {
      setOpen(true);
    }
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white relative">
      <div className="flex items-center">
        <div aria-label="GK logo" className="flex items-center">
          <Image src={GK} alt="gk logo" width={60} height={60} />
        </div>
      </div>

      <div className="flex items-center">
        <button
          onClick={toggleMenu}
          aria-expanded={open}
          aria-controls="site-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center w-8 h-8 mr-3 bg-transparent border-0 p-0 cursor-pointer md:hidden"
        >
          {open ? (
            <div className="flex-col items-center z-50">
              <Image src={close} alt="Закрыть меню" width={14} height={14} />
            </div>
          ) : (
            <div className="flex-col items-center">
              <span className="block h-0.5 w-5 bg-black rounded" />
              <span className="block h-0.5 w-5 bg-black rounded my-1" />
              <span className="block h-0.5 w-5 bg-black rounded" />
            </div>
          )}
        </button>

        {(open || animating) && (
          <nav
            id="site-navigation"
            className={`fixed inset-0 flex flex-col items-center justify-center bg-white p-6 z-40 
              ${open && !animating ? "menu-open" : ""} 
              ${animating ? "menu-close" : ""} 
              gap-6 md:static md:flex md:flex-row md:bg-transparent md:shadow-none md:p-0 md:gap-2`}
            onClick={toggleMenu}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-black no-underline px-2 py-1 block text-2xl md:text-base md:inline-block md:px-0 md:py-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
