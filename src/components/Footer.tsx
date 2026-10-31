
import Link from "next/link";

export default function Footer() {
  

  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-12 text-gray-600 transition-colors duration-300 dark:border-[#374239] dark:bg-[#202722] dark:text-[#B5C0B4] md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-gray-900 transition hover:text-emerald-700 dark:text-[#E3E9E1] dark:hover:text-[#A8BFA5]"
          >
            Sadia<span className="text-emerald-700 dark:text-[#A8BFA5]">Forge.</span>
          </Link>

          <p className="mt-1 text-xs text-gray-500 dark:text-[#89978A]">
            Frontend Developer • React &amp; Next.js
          </p>
        </div>

        {/* Navigation Quick Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-gray-600 dark:text-[#AAB6A9]">
          <a
            href="#about"
            className="transition hover:text-emerald-700 dark:hover:text-[#A8BFA5]"
          >
            About
          </a>

          <a
            href="#education"
            className="transition hover:text-emerald-700 dark:hover:text-[#A8BFA5]"
          >
            Education
          </a>

          <a
            href="#skills"
            className="transition hover:text-emerald-700 dark:hover:text-[#A8BFA5]"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="transition hover:text-emerald-700 dark:hover:text-[#A8BFA5]"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="transition hover:text-emerald-700 dark:hover:text-[#A8BFA5]"
          >
            Contact
          </a>
        </nav>

        {/* Social Links & Back to Top */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs">
          <a
            href="https://github.com/Sadia-IoT"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-emerald-700 dark:hover:text-[#A8BFA5]"
            aria-label="GitHub"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/sadia-sultana-eee/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-emerald-700 dark:hover:text-[#A8BFA5]"
            aria-label="LinkedIn"
          >
            LinkedIn ↗
          </a>

          <a
            href="#"
            className="inline-flex items-center gap-1 font-semibold text-emerald-700 transition hover:text-emerald-600 dark:text-[#A8BFA5] dark:hover:text-[#BBD0B8]"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-8 max-w-6xl border-t border-gray-200 pt-6 text-center text-xs text-gray-500 dark:border-[#374239] dark:text-[#89978A]">
        <p>©  Sadia Sultana. All rights reserved.</p>
        <p className="mt-2">
          Built with <span className="text-emerald-700 dark:text-[#A8BFA5]">♥</span> and Next.js
        </p>
      </div>
    </footer>
  );
}
