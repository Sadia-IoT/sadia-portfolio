
export default function Projects() {
  const projects = [
    {
      title: "Bazar Dor — বাজার দর",
      subtitle: "Bengali Market Price Tracker",
      category: "Market Tracker",
      description:
        "A market price discovery application tailored for Bengali consumers to easily track essential household products, browse categories, and monitor daily pricing trends.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://bazar-dor-mee-ca9c.vercel.app/",
      githubUrl: "https://github.com/Sadia-IoT/bazar-dor",
      accent: "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-[#354638] dark:text-[#C5D9BE] dark:border-[#526B55]",
      featured: true,
      highlights: [
        "Localized Bengali consumer interface",
        "Fast client-side category and product filtering",
        "Clean, mobile-first responsive design",
      ],
    },
    {
      title: "Fit Log",
      subtitle: "Workout & Routine Management",
      category: "Fitness & Productivity",
      description:
        "A responsive fitness tracking application that helps users plan workouts, structure exercise routines, and maintain consistent training habits.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://fit-log-eight-brown.vercel.app/",
      githubUrl: "https://github.com/Sadia-IoT/fit-log",
      accent: "bg-teal-50 text-teal-800 border-teal-200 dark:bg-[#354638] dark:text-[#C5D9BE] dark:border-[#526B55]",
      featured: true,
      highlights: [
        "Interactive exercise routine organizer",
        "Structured state management with React hooks",
        "Polished mobile & desktop workout views",
      ],
    },
    {
      title: "DevStack Builder",
      subtitle: "Developer Tech Stack Platform",
      category: "Developer Tools",
      description:
        "A platform for developers to explore modern programming technologies, compare framework stacks, and inspect curated development tools in a structured UI.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      liveUrl: null,
      githubUrl: "https://github.com/Sadia-IoT/DevStack",
      accent: "bg-blue-50 text-blue-800 border-blue-200 dark:bg-[#354638] dark:text-[#C5D9BE] dark:border-[#526B55]",
      featured: false,
      highlights: [
        "Comprehensive directory of developer tooling",
        "Modular React component hierarchy",
        "Modern card-based browsing interface",
      ],
    },
    {
      title: "SadiaForge — Developer Portfolio",
      subtitle: "Modern Recruiter-Ready Portfolio",
      category: "Personal Brand",
      description:
        "Modern, modular personal portfolio designed to highlight real engineering background, verified academic credentials, and interactive frontend projects.",
      technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"],
      liveUrl: "https://sadia-portfolio-murex.vercel.app/",
      githubUrl: "https://github.com/Sadia-IoT/sadia-portfolio",
      accent: "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-[#354638] dark:text-[#C5D9BE] dark:border-[#526B55]",
      featured: false,
      highlights: [
        "Componentized App Router structure",
        "Responsive glassmorphism navbar and mobile drawer",
        "Functional Gmail and mailto email communication",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-gray-100 bg-gray-50/60 px-6 py-20 transition-colors duration-300 dark:border-[#374239] dark:bg-[#202722] md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-[#A8BFA5]">
              Proof of Work
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-950 dark:text-[#E3E9E1] sm:text-4xl">
              Featured Projects
            </h2>

            <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-[#B5C0B4] sm:text-lg">
              Real-world web applications built with React, Next.js, and TypeScript,
              demonstrating responsive layouts, state handling, and clean code.
            </p>
          </div>

          <a
            href="https://github.com/Sadia-IoT?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-emerald-800 transition hover:text-emerald-600 dark:text-[#A8BFA5] dark:hover:text-[#C5D9BE] md:self-end"
          >
            <span>View all on GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col justify-between rounded-3xl border border-gray-200/90 bg-white p-7 shadow-xs transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-900/5 dark:border-[#414D43] dark:bg-[#29332D] dark:hover:border-[#789276] dark:hover:shadow-none md:p-8"
            >
              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${project.accent}`}
                  >
                    {project.category}
                  </span>

                  {project.liveUrl && (
                    <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 dark:text-[#A8BFA5]">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-600 dark:bg-[#A8BFA5]" />
                      Live Demo Ready
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="mt-5 text-2xl font-bold text-gray-950 transition group-hover:text-emerald-800 dark:text-[#E3E9E1] dark:group-hover:text-[#A8BFA5]">
                  {project.title}
                </h3>

                <p className="text-xs font-medium text-gray-500 dark:text-[#AAB6A9]">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-[#B5C0B4]">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mt-5 space-y-1.5 border-t border-gray-100 pt-4 dark:border-[#414D43]">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2 text-xs text-gray-600 dark:text-[#B5C0B4]"
                    >
                      <span className="font-bold text-emerald-700 dark:text-[#A8BFA5]">
                        ✓
                      </span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-[#354038] dark:text-[#D0D9CF]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-5 dark:border-[#414D43]">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition hover:bg-emerald-800 dark:bg-[#A8BFA5] dark:text-[#202722] dark:hover:bg-[#BBD0B8]"
                  >
                    <span>Live Demo</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-xs font-semibold text-gray-800 transition hover:border-emerald-600 hover:text-emerald-800 dark:border-[#526052] dark:bg-[#354038] dark:text-[#D0D9CF] dark:hover:border-[#A8BFA5] dark:hover:text-[#A8BFA5]"
                >
                  <svg
                    className="h-4 w-4"
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

                  <span>GitHub Repository</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
