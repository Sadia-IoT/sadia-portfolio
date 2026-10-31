
export default function Education() {
  const academicHighlights = [
    {
      degree: "B.Sc. in Electrical and Electronic Engineering (EEE)",
      institution: "University of Chittagong",
      location: "Chattogram, Bangladesh",
      period: "Graduation Year: 2023",
      score: "CGPA: 3.48 / 4.00",
      description:
        "My academic background in engineering strengthened my analytical thinking, logic building, and technical problem-solving capabilities, which I now apply while architecting and building modern web applications.",
    },
    {
      degree: "Higher Secondary Certificate (HSC) — Science",
      institution: "Agrabad Women's College",
      location: "Chattogram, Bangladesh",
      period: "Passing Year: 2017",
      score: "GPA: 4.50 / 5.00",
      description:
        "Strong foundation in science and mathematics, laying the groundwork for structured reasoning and quantitative thinking.",
    },
  ];

  return (
    <section
      id="education"
      className="scroll-mt-20 border-t border-gray-100 bg-gray-50/60 px-6 py-20 transition-colors duration-300 dark:border-[#374239] dark:bg-[#202722] md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-[#A8BFA5]">
            Academic Background
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-950 dark:text-[#E3E9E1] sm:text-4xl">
            Education
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-[#B5C0B4] sm:text-lg">
            My formal engineering education from the University of Chittagong and
            academic background.
          </p>
        </div>

        {/* Education Cards */}
        <div className="mt-12 space-y-6">
          {academicHighlights.map((edu, idx) => (
            <div
              key={edu.degree}
              className={`rounded-3xl border bg-white p-7 shadow-xs transition duration-300 hover:shadow-md dark:bg-[#29332D] dark:shadow-none dark:hover:bg-[#303B34] md:p-9 ${
                idx === 0
                  ? "border-emerald-200/90 ring-1 ring-emerald-100 dark:border-[#789276] dark:ring-[#789276]/20"
                  : "border-gray-200 dark:border-[#414D43]"
              }`}
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-sm text-emerald-800 dark:bg-[#3A4B3D] dark:text-[#C5D9BE]">
                      🎓
                    </span>

                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-[#A8BFA5]">
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-gray-950 dark:text-[#E3E9E1] sm:text-2xl">
                    {edu.degree}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-gray-700 dark:text-[#D0D9CF]">
                    {edu.institution} •{" "}
                    <span className="font-normal text-gray-500 dark:text-[#AAB6A9]">
                      {edu.location}
                    </span>
                  </p>
                </div>

                <span className="inline-flex self-start rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold text-emerald-800 shadow-2xs dark:border-[#526B55] dark:bg-[#354638] dark:text-[#C5D9BE]">
                  {edu.score}
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-gray-600 dark:text-[#B5C0B4]">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
