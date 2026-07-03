"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RESUME_URL } from "@/lib/constants";
import { BRAND, NAV_LINKS, getActivePage } from "@/lib/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const activePage = getActivePage(pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-brutal-cream border-b-4 border-brutal-black">
      <nav className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <Link
          href="/"
          className="font-display text-lg md:text-xl font-bold uppercase tracking-tighter border-4 border-brutal-black bg-brutal-white px-3 py-1 shadow-brutal-sm hover:bg-brutal-yellow transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          {BRAND}
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {NAV_LINKS.map(({ href, label, page }) => (
            <Link
              key={page}
              href={href}
              className={`font-label-md text-label-md uppercase px-4 py-2 transition-all ${
                activePage === page
                  ? "brutal-nav-active"
                  : "hover:bg-brutal-cyan border-4 border-transparent hover:border-brutal-black"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex brutal-btn px-5 py-2 text-[12px]"
          >
            Resume
          </Link>

          <button
            type="button"
            className="md:hidden brutal-btn px-3 py-2 text-[12px]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "[ X ]" : "[ ≡ ]"}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t-4 border-brutal-black bg-brutal-white">
          <div className="flex flex-col px-margin-mobile py-4 gap-2 max-w-container-max mx-auto">
            {NAV_LINKS.map(({ href, label, page }) => (
              <Link
                key={page}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`font-label-md text-label-md uppercase py-3 px-4 border-4 border-brutal-black ${
                  activePage === page ? "bg-brutal-yellow shadow-brutal-sm" : "bg-brutal-white"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="brutal-btn py-3 text-center text-[12px]"
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
