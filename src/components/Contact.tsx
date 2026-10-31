
"use client";

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const emailAddress = "sadiasultana42243@gmail.com";

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    emailAddress
  )}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-gray-200 bg-white px-6 py-20 text-gray-900 transition-colors duration-300 dark:border-[#374239] dark:bg-[#202722] dark:text-[#E3E9E1] md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-[#A8BFA5]">
            Get In Touch
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s Build Together
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-[#B5C0B4] sm:text-lg">
            I am actively seeking Frontend Developer roles and remote
            opportunities. Whether you have an open position, an exciting
            project, or want to discuss frontend architecture, my inbox is open!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Email Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-xl transition-colors duration-300 dark:border-[#414D43] dark:bg-[#29332D]">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl text-emerald-700 dark:bg-[#3A4B3D] dark:text-[#C5D9BE]">
                ✉️
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Email Directly
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-[#B5C0B4]">
                Send me an inquiry directly via your preferred email platform or
                copy the address to your clipboard.
              </p>

              {/* Email Copy */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 dark:border-[#414D43] dark:bg-[#202722]">
                <span className="select-all font-mono text-xs text-gray-700 dark:text-[#D0D9CF] sm:text-sm">
                  {emailAddress}
                </span>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="rounded-lg border border-gray-300 bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700 transition hover:border-emerald-600 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-[#414D43] dark:bg-[#354038] dark:text-[#D0D9CF] dark:hover:border-[#A8BFA5] dark:hover:text-[#A8BFA5] dark:focus:ring-[#A8BFA5]"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <span className="inline-flex items-center gap-1 text-emerald-700 dark:text-[#A8BFA5]">
                      <span>✓</span> Copied!
                    </span>
                  ) : (
                    "Copy"
                  )}
                </button>
              </div>
            </div>

            {/* Email Actions */}
            <div className="mt-8 flex flex-col gap-3 border-t border-gray-200 pt-6 dark:border-[#414D43]">
              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-600 dark:bg-[#789276] dark:text-[#202722] dark:hover:bg-[#A8BFA5]"
              >
                <span>Send me an email (Gmail)</span>
                <span aria-hidden="true">→</span>
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center justify-center gap-1 text-xs text-gray-500 transition hover:text-emerald-700 dark:text-[#AAB6A9] dark:hover:text-[#A8BFA5]"
              >
                <span>Or open in default mail app (mailto)</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Social Profiles Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-xl transition-colors duration-300 dark:border-[#414D43] dark:bg-[#29332D]">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl text-emerald-700 dark:bg-[#3A4B3D] dark:text-[#C5D9BE]">
                🌐
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Professional Networks
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-[#B5C0B4]">
                Connect with me on LinkedIn to follow my career journey, or view
                my code repositories and daily commits on GitHub.
              </p>

              <div className="mt-6 space-y-3">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/sadia-sultana-eee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-emerald-600 hover:text-emerald-700 dark:border-[#414D43] dark:bg-[#202722] dark:text-[#D0D9CF] dark:hover:border-[#A8BFA5] dark:hover:text-[#A8BFA5]"
                >
                  <span className="flex items-center gap-2.5">
                    <svg
                      className="h-5 w-5 text-emerald-700 dark:text-[#A8BFA5]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span>LinkedIn Profile</span>
                  </span>

                  <span className="text-xs text-gray-500 dark:text-[#89978A]">
                    Connect ↗
                  </span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Sadia-IoT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-emerald-600 hover:text-emerald-700 dark:border-[#414D43] dark:bg-[#202722] dark:text-[#D0D9CF] dark:hover:border-[#A8BFA5] dark:hover:text-[#A8BFA5]"
                >
                  <span className="flex items-center gap-2.5">
                    <svg
                      className="h-5 w-5 text-emerald-700 dark:text-[#A8BFA5]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                    <span>GitHub Repositories</span>
                  </span>

                  <span className="text-xs text-gray-500 dark:text-[#89978A]">
                    Follow ↗
                  </span>
                </a>
              </div>
            </div>

            {/* Resume Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-gray-200 pt-6 dark:border-[#414D43]">
              <a
                href="/Sadia-Sultana-Resume.pdf"
                download="Sadia-Sultana-Resume.pdf"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-200 px-4 py-3 text-xs font-semibold text-gray-800 transition hover:bg-gray-300 dark:bg-[#354038] dark:text-[#E3E9E1] dark:hover:bg-[#3A4B3D]"
              >
                <span>Download Resume</span>
                <span aria-hidden="true">↓</span>
              </a>

              <a
                href="/Sadia-Sultana-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 text-xs font-semibold text-emerald-700 transition hover:border-emerald-600 hover:text-emerald-800 dark:border-[#789276] dark:bg-[#202722] dark:text-[#A8BFA5] dark:hover:border-[#A8BFA5] dark:hover:text-[#E3E9E1]"
              >
                <span>View Resume</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Location & Availability */}
        <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center text-xs text-gray-600 dark:border-[#414D43] dark:bg-[#29332D]/60 dark:text-[#AAB6A9]">
          <p>
            📍 Based in Chattogram, Bangladesh • Available for worldwide remote
            frontend roles and local opportunities • Responds within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
