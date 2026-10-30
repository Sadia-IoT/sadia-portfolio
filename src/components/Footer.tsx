import Link from "next/link";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-gray-900 bg-gray-950 px-6 py-12 text-gray-400 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-white transition hover:text-emerald-400"
          >
            Sadia<span className="text-emerald-400">.dev</span>
          </Link>
          <p className="mt-1 text-xs text-gray-500">
            Frontend Developer • React &amp; Next.js
          </p>
        </div>

        {/* Navigation Quick Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-gray-400">
          <a href="#about" className="transition hover:text-emerald-400">
            About
          </a>
          <a href="#education" className="transition hover:text-emerald-400">
            Education
          </a>
          <a href="#skills" className="transition hover:text-emerald-400">
            Skills
          </a>
          <a href="#projects" className="transition hover:text-emerald-400">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-emerald-400">
            Contact
          </a>
        </nav>

        {/* Back to top + Social Links */}
        <div className="flex items-center gap-5 text-xs">
          <a
            href="https://github.com/Sadia-IoT"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-emerald-400"
            aria-label="GitHub"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/sadia-sultana-eee/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-emerald-400"
            aria-label="LinkedIn"
          >
            LinkedIn ↗
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-emerald-400 transition hover:text-emerald-300 font-semibold"
          >
            <span>Back to top</span>
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-gray-900 pt-6 text-center text-xs text-gray-600">
        <p>© {currentYear} Sadia Sultana. All rights reserved.</p>
      </div>
    </footer>
  );
}
