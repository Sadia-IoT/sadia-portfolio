export default function AboutMe() {
  const highlights = [
    {
      icon: "📐",
      title: "Engineering Mindset",
      description:
        "My Electrical & Electronic Engineering foundation instills systematic problem-solving, attention to detail, and disciplined logic in writing maintainable code.",
    },
    {
      icon: "📱",
      title: "Responsive & Modern UI",
      description:
        "Passionate about creating fluid, mobile-first designs with Tailwind CSS and modern CSS layouts that feel natural on any device screen size.",
    },
    {
      icon: "🚀",
      title: "Modern React & Next.js",
      description:
        "Building component-based applications with React hooks, Next.js App Router, TypeScript type safety, and clean API integrations.",
    },
    {
      icon: "🤝",
      title: "Remote Collaboration",
      description:
        "Committed to transparent communication, clean Git workflows, automated deployments, and continuous technical growth in team settings.",
    },
  ];

  return (
    <section id="about" className="scroll-mt-20 border-t border-gray-100 bg-white px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Background &amp; Philosophy
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            Engineering graduate turned Frontend Developer, bringing analytical
            precision to modern web interfaces.
          </p>
        </div>

        {/* Two-column layout: Story + Highlights */}
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Detailed Narrative */}
          <div className="space-y-5 text-base leading-relaxed text-gray-700 lg:col-span-7">
            <p>
              Hello! I&apos;m{" "}
              <strong className="font-semibold text-gray-950">
                Sadia Sultana
              </strong>
              , a Frontend Developer based in Chattogram, Bangladesh. I graduated
              with a Bachelor of Science in Electrical and Electronic Engineering
              (EEE) from the{" "}
              <strong className="font-semibold text-gray-950">
                University of Chittagong
              </strong>
              .
            </p>

            <p>
              During my engineering studies, I developed a strong appreciation
              for systems architecture, circuit logic, and analytical problem
              solving. As I transitioned into software development, I found that
              designing component trees, handling reactive state, and mapping data
              flows in React shared the exact same principles of precision and
              reliability.
            </p>

            <p>
              Today, I specialize in building user-friendly, responsive web
              applications using{" "}
              <span className="font-semibold text-emerald-800">
                Next.js, React, TypeScript, and Tailwind CSS
              </span>
              . I am excited by opportunities to work on real-world projects,
              collaborate with experienced engineering teams, and contribute to
              thoughtful, high-impact web products.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition hover:bg-emerald-800"
              >
                <span>Get In Touch</span>
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="/Sadia-Sultana-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-emerald-600 hover:text-emerald-700"
              >
                <span>Download Resume (PDF)</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          {/* Value Pillars Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200/80 bg-gray-50/70 p-5 transition duration-200 hover:border-emerald-200 hover:bg-emerald-50/30 hover:shadow-xs"
              >
                <span className="text-2xl" role="img" aria-label={item.title}>
                  {item.icon}
                </span>
                <h3 className="mt-3 text-base font-bold text-gray-950">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
