
export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "⚛️",
      description: "Building responsive, modern, and interactive user interfaces.",
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "Next.js (App Router)", level: "Proficient" },
        { name: "TypeScript", level: "Proficient" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "HTML5 & Semantic Markup", level: "Expert" },
        { name: "CSS3 & Modern Layouts", level: "Expert" },
        { name: "React Hooks & State", level: "Advanced" },
      ],
    },
    {
      category: "Styling & Responsive UI",
      icon: "🎨",
      description: "Crafting fluid, pixel-accurate, and accessible web layouts.",
      skills: [
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Responsive Mobile-First Design", level: "Advanced" },
        { name: "Flexbox & CSS Grid", level: "Expert" },
        { name: "UI/UX Best Practices", level: "Proficient" },
        { name: "Accessibility (WCAG Basics)", level: "Proficient" },
        { name: "Design Systems & Tokens", level: "Proficient" },
      ],
    },
    {
      category: "Tools & Deployment",
      icon: "🛠️",
      description: "Managing developer workflow, versioning, and cloud deployments.",
      skills: [
        { name: "Git & Version Control", level: "Advanced" },
        { name: "GitHub Collaboration", level: "Advanced" },
        { name: "VS Code & Extensions", level: "Advanced" },
        { name: "npm & Dependency Management", level: "Proficient" },
        { name: "Vercel Deployment", level: "Proficient" },
        { name: "REST API Integration", level: "Proficient" },
        { name: "Browser DevTools & Debugging", level: "Advanced" },
      ],
    },
    {
      category: "Engineering & Core Strengths",
      icon: "🧠",
      description: "Applying engineering discipline to create robust software.",
      skills: [
        { name: "Structured Problem Solving", level: "Core Strength" },
        { name: "Component-Based Architecture", level: "Core Strength" },
        { name: "Analytical Thinking", level: "Core Strength" },
        { name: "Clean & Maintainable Code", level: "Core Strength" },
        { name: "Continuous Self-Learning", level: "Core Strength" },
        { name: "Remote Team Collaboration", level: "Core Strength" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-gray-100 bg-white px-6 py-20 transition-colors duration-300 dark:border-[#374239] dark:bg-[#202722] md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-[#A8BFA5]">
            Technical Proficiency
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-950 dark:text-[#E3E9E1] sm:text-4xl">
            Skills &amp; Technologies
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-[#B5C0B4] sm:text-lg">
            Technologies, frameworks, and developer workflows I actively use to
            engineer responsive web applications.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="group rounded-3xl border border-gray-200 bg-white p-7 transition duration-200 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-900/5 dark:border-[#414D43] dark:bg-[#29332D] dark:hover:border-[#789276] dark:hover:shadow-none"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-xl text-emerald-700 transition group-hover:bg-emerald-100 dark:bg-[#3A4B3D] dark:text-[#C5D9BE] dark:group-hover:bg-[#405443]">
                  {group.icon}
                </span>

                <div>
                  <h3 className="text-lg font-bold text-gray-950 dark:text-[#E3E9E1]">
                    {group.category}
                  </h3>

                  <p className="text-xs text-gray-500 dark:text-[#AAB6A9]">
                    {group.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50/80 px-3 py-1.5 text-xs font-medium text-gray-800 transition hover:border-emerald-300 hover:bg-emerald-50/50 hover:text-emerald-900 dark:border-[#414D43] dark:bg-[#354038] dark:text-[#D0D9CF] dark:hover:border-[#789276] dark:hover:bg-[#3A4B3D] dark:hover:text-[#C5D9BE]"
                  >
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
