
export default function HeroSection() {
  const techStack = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML5/CSS3",
    "REST APIs",
    "Git & GitHub",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/40 via-white to-white px-6 pt-16 pb-20 transition-colors duration-300 dark:from-[#29332D] dark:via-[#202722] dark:to-[#202722] md:px-12 md:pt-24 md:pb-28">
      {/* Decorative gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 -z-10 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl dark:bg-[#A8BFA5]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-0 -z-10 h-72 w-72 rounded-full bg-teal-50 blur-3xl dark:bg-[#A8BFA5]/5"
      />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-8">
            {/* Availability Badge */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-200 bg-emerald-50/90 px-4 py-1.5 text-xs font-semibold text-emerald-800 shadow-xs dark:border-[#526B55] dark:bg-[#29332D] dark:text-[#BBD0B8]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 dark:bg-[#A8BFA5]" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600 dark:bg-[#A8BFA5]" />
              </span>
              <span>Available for Frontend &amp; Remote Roles</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-950 dark:text-[#E3E9E1] sm:text-5xl md:text-6xl">
              <span className="text-emerald-700 dark:text-[#A8BFA5]">
                Learning.
              </span>{" "}
              <span>Building.</span>{" "}
              <span className="text-emerald-700 dark:text-[#A8BFA5]">
                Growing.
              </span>
              <br />
              <br />
              Hi, I&apos;m{" "}
              <span className="text-emerald-700 dark:text-[#A8BFA5]">
                Sadia Sultana
              </span>
              .
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-[#B5C0B4] sm:text-lg">
              A passionate Frontend Developer with an Electrical and Electronic
              Engineering degree from the University of Chittagong. I specialize
              in building fast, accessible, and user-centric interfaces using{" "}
              <strong className="font-semibold text-gray-900 dark:text-[#E3E9E1]">
                React, Next.js, and TypeScript
              </strong>
              .
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-emerald-700/20 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-800 dark:bg-[#A8BFA5] dark:text-[#202722] dark:shadow-none dark:hover:bg-[#BBD0B8]"
              >
                <span>Explore Featured Projects</span>
                <span aria-hidden="true">↓</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-800 shadow-xs transition duration-200 hover:-translate-y-0.5 hover:border-emerald-600 hover:text-emerald-700 dark:border-[#526052] dark:bg-[#29332D] dark:text-[#D0D9CF] dark:hover:border-[#A8BFA5] dark:hover:text-[#A8BFA5]"
              >
                <span>Let&apos;s Connect</span>
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="/Sadia-Sultana-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-dashed border-emerald-400 bg-emerald-50/50 px-5 py-3.5 text-sm font-semibold text-emerald-800 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-100/70 dark:border-[#789276] dark:bg-[#29332D] dark:text-[#BBD0B8] dark:hover:bg-[#354638]"
              >
                <span>View Resume</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm font-medium text-gray-500 dark:text-[#AAB6A9]">
              <span className="text-xs uppercase tracking-wider text-gray-400 dark:text-[#89978A]">
                Profiles:
              </span>

              <a
                href="https://github.com/Sadia-IoT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-gray-700 transition hover:text-emerald-700 dark:text-[#D0D9CF] dark:hover:text-[#A8BFA5]"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub ↗
              </a>

              <span className="text-gray-300 dark:text-[#526052]">•</span>

              <a
                href="https://www.linkedin.com/in/sadia-sultana-eee/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-gray-700 transition hover:text-emerald-700 dark:text-[#D0D9CF] dark:hover:text-[#A8BFA5]"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Profile Summary Card */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-lg shadow-emerald-900/5 transition-colors duration-300 dark:border-[#414D43] dark:bg-[#29332D] dark:shadow-none">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl text-emerald-800 dark:bg-[#3A4B3D] dark:text-[#C5D9BE]">
                  ⚡
                </span>

                <div>
                  <h3 className="font-bold text-gray-900 dark:text-[#E3E9E1]">
                    Engineering to Web
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-[#AAB6A9]">
                    Problem-solving focus
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4 divide-y divide-gray-100 text-sm dark:divide-[#414D43]">
                <div className="pt-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-[#89978A]">
                    Primary Stack
                  </p>
                  <p className="mt-1 font-medium text-gray-900 dark:text-[#D0D9CF]">
                    React 19, Next.js 16 (App Router), TypeScript, Tailwind CSS
                  </p>
                </div>

                <div className="pt-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-[#89978A]">
                    Education
                  </p>
                  <p className="mt-1 font-medium text-gray-900 dark:text-[#D0D9CF]">
                    B.Sc. in EEE, University of Chittagong
                  </p>
                  <p className="text-xs font-semibold text-emerald-700 dark:text-[#A8BFA5]">
                    CGPA 3.48 / 4.00 (Graduated 2023)
                  </p>
                </div>

                <div className="pt-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-[#89978A]">
                    Work Focus
                  </p>
                  <p className="mt-1 font-medium text-gray-900 dark:text-[#D0D9CF]">
                    Responsive interfaces, clean state management, modular components
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-14 border-t border-gray-200/80 pt-8 dark:border-[#414D43]">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-[#AAB6A9]">
            Core Technologies &amp; Tools
          </p>

          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-gray-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-gray-700 shadow-2xs transition hover:border-emerald-300 hover:text-emerald-800 dark:border-[#414D43] dark:bg-[#29332D] dark:text-[#D0D9CF] dark:hover:border-[#789276] dark:hover:text-[#A8BFA5]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
