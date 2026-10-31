
"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 text-gray-900 shadow-sm backdrop-blur-md transition-colors duration-300 dark:border-[#374239] dark:bg-[#202722]/95 dark:text-[#E3E9E1]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">

        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900 transition dark:text-[#E3E9E1]"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-700 font-mono text-base text-white shadow-sm transition group-hover:bg-emerald-800 dark:bg-[#A8BFA5] dark:text-[#202722] dark:group-hover:bg-[#BBD0B8]">
            {"<S/>"}
          </span>

          <span>
            Sadia<span className="text-emerald-700 dark:text-[#A8BFA5]">Forge.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7 text-sm font-medium text-gray-600 dark:text-[#B5C0B4]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="transition duration-150 hover:text-emerald-700 hover:underline hover:underline-offset-8 dark:hover:text-[#A8BFA5]"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 border-l border-gray-200 pl-6 dark:border-[#414D43]">
            <ThemeToggle />

            <a
              href="/Sadia-Sultana-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-700 px-4 py-2 text-xs font-semibold text-emerald-800 transition hover:bg-emerald-50 dark:border-[#789276] dark:text-[#C5D9BE] dark:hover:bg-[#29332D]"
            >
              Resume ↗
            </a>

            <a
              href="#contact"
              className="rounded-lg bg-emerald-700 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-800 dark:bg-[#A8BFA5] dark:text-[#202722] dark:hover:bg-[#BBD0B8]"
            >
              Get in Touch
            </a>
          </div>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

          <a
            href="/Sadia-Sultana-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-emerald-700 px-3 py-1.5 text-xs font-semibold text-emerald-800 dark:border-[#789276] dark:text-[#C5D9BE]"
          >
            Resume ↗
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-700 dark:text-[#D0D9CF] dark:hover:bg-[#29332D] dark:focus:ring-[#A8BFA5]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-gray-200 bg-white px-6 py-5 shadow-lg transition-colors duration-300 dark:border-[#374239] dark:bg-[#29332D] md:hidden">
          <nav className="flex flex-col gap-4 text-base font-medium text-gray-800 dark:text-[#D0D9CF]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-2 transition hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-[#354638] dark:hover:text-[#A8BFA5]"
              >
                {link.name}
              </a>
            ))}

            <div className="mt-2 flex flex-col gap-2 border-t border-gray-100 pt-4 dark:border-[#414D43]">
              <a
                href="#contact"
                onClick={closeMenu}
                className="w-full rounded-lg bg-emerald-700 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 dark:bg-[#A8BFA5] dark:text-[#202722] dark:hover:bg-[#BBD0B8]"
              >
                Get in Touch
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
