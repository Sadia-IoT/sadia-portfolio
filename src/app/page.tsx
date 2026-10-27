
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="flex items-center justify-between border-b px-6 py-5 md:px-16">
        <Link href="/" className="text-2xl font-bold text-green-700">
          Sadia<span className="text-gray-900">.dev</span>
        </Link>

        <div className="flex gap-5 text-sm font-medium">
          <a href="#about" className="hover:text-green-700">
            About
          </a>
          <a href="#projects" className="hover:text-green-700">
            Projects
          </a>
          <a href="#contact" className="hover:text-green-700">
            Contact
          </a>
        </div>
      </nav>


      <section className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center overflow-hidden px-6 py-24 md:px-12">
        <div className="pointer-events-none absolute right-10 top-20 -z-0 h-56 w-56 rounded-full bg-green-100 blur-3xl opacity-70" />

        <div className="relative z-10 max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-800">
            <span className="h-2 w-2 rounded-full bg-green-600" />
            Aspiring Frontend Developer
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-950 sm:text-5xl md:text-7xl">
            Hi, I&apos;m Sadia.
            <br />
            I build{" "}
            <span className="text-green-700">
              for the web.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            An Electrical and Electronic Engineering graduate from the
            University of Chittagong, learning to create clean, responsive,
            and user-friendly web experiences with React and Next.js.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-green-700 px-7 py-3.5 font-semibold text-white shadow-lg shadow-green-700/20 transition duration-200 hover:-translate-y-1 hover:bg-green-800"
            >
              Explore My Work ↗
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3.5 font-semibold text-gray-800 transition duration-200 hover:-translate-y-1 hover:border-green-700 hover:text-green-700"
            >
              Let&apos;s Connect
            </a>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Technologies I&apos;m learning
            </p>
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section id="about" className="bg-white px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-green-700">
              Get to Know Me
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
              About Me
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Hello! I&apos;m Sadia Sultana, an Electrical and Electronic
              Engineering graduate from the University of Chittagong.
              My engineering background has helped me develop logical
              thinking, analytical skills, and a problem-solving mindset.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              I&apos;m now focusing on frontend web development, learning
              to build responsive and user-friendly websites with React,
              Next.js, JavaScript, and Tailwind CSS.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              My goal is to keep improving my skills, build meaningful
              projects, and grow into a professional frontend developer.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              Let&apos;s Connect ↗
            </a>
          </div>

          <div className="rounded-3xl border border-green-100 bg-green-50 p-7 md:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-700 text-2xl text-white">
              🎓
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-widest text-green-700">
              My Education
            </p>

            <h3 className="mt-3 text-xl font-bold text-gray-950">
              Bachelor&apos;s Degree in Electrical and Electronic Engineering
            </h3>

            <p className="mt-3 font-medium text-gray-700">
              University of Chittagong
            </p>

            <div className="mt-6 border-t border-green-200 pt-5">
              <p className="text-sm leading-7 text-gray-600">
                My academic background strengthened my analytical thinking
                and technical problem-solving abilities, which I now apply
                while learning and building web applications.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-green-800">
                Analytical Thinking
              </span>
              <span className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-green-800">
                Problem Solving
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          {/* Education Details */}
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-green-600">
              Education
            </p>

            <h3 className="text-lg font-bold leading-7 text-gray-900">
              B.Sc. in Electrical and Electronic Engineering (EEE)
            </h3>

            <p className="mt-2 font-medium text-gray-700">
              University of Chittagong
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Chattogram, Bangladesh
            </p>

            <p className="mt-3 text-sm text-gray-600">
              Graduation Year: 2023
            </p>
          </div>

          {/* Status Badge - Top Right */}
          <span className="shrink-0 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
            CGPA: 3.48/4.00
          </span>
        </div>


      </div>




      <section id="skills" className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-green-700">
            What I Work With
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
            My Technical Skills
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-600">
            Technologies and tools I am learning and using to build
            responsive, user-friendly web applications.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6 transition hover:border-green-300 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl">
                🌐
              </div>
              <h3 className="mt-5 text-xl font-bold">Frontend</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Building responsive interfaces and interactive web pages.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "React", "Next.js"].map((skill) => (
                  <span key={skill} className="rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 transition hover:border-green-300 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                🛠️
              </div>
              <h3 className="mt-5 text-xl font-bold">Tools & Styling</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Styling layouts and managing the development workflow.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Tailwind CSS", "Git", "GitHub", "VS Code"].map((skill) => (
                  <span key={skill} className="rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 transition hover:border-green-300 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
                🧩
              </div>
              <h3 className="mt-5 text-xl font-bold">Core Skills</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Applying logical thinking and structured problem-solving
                while developing software.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Problem Solving", "Responsive Design", "Debugging"].map((skill) => (
                  <span key={skill} className="rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-gray-50 px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-green-700">
                My Portfolio
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
                Featured Projects
              </h2>
              <p className="mt-3 max-w-xl leading-7 text-gray-600">
                A selection of projects I have built while learning and growing
                as a developer.
              </p>
            </div>

            <span className="text-sm font-medium text-gray-500">
              03 Projects
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-green-300 hover:shadow-xl hover:shadow-green-900/5">
              <div className="flex h-44 items-center justify-center bg-green-100">
                <div className="text-center">
                  <span className="text-5xl">💻</span>
                  <p className="mt-3 text-sm font-bold tracking-widest text-green-800">
                    DEVSTACK BUILDER
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
                  Developer Tools
                </p>
                <h3 className="mt-2 text-xl font-bold text-gray-950">
                  DevStack Builder
                </h3>
                <p className="mt-3 min-h-20 text-sm leading-6 text-gray-600">
                  A developer-focused platform for exploring technologies,
                  discovering tools, and browsing featured projects.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["React", "JavaScript", "Tailwind CSS"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/Sadia-IoT/DevStack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-green-800 transition hover:text-green-600"
                >
                  View on GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>

            {/* Project 2 */}
            <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-green-300 hover:shadow-xl hover:shadow-green-900/5">
              <div className="flex h-44 items-center justify-center bg-lime-100">
                <div className="text-center">
                  <span className="text-5xl">🏋️</span>
                  <p className="mt-3 text-sm font-bold tracking-widest text-lime-900">
                    FIT LOG
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
                  Fitness & Wellness
                </p>
                <h3 className="mt-2 text-xl font-bold text-gray-950">
                  Fit Log
                </h3>
                <p className="mt-3 min-h-20 text-sm leading-6 text-gray-600">
                  A workout tracking app designed to organize exercise plans
                  and help users manage their fitness routines.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["React", "JavaScript", "Tailwind CSS"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                  <a
                    href="https://github.com/Sadia-IoT/fit-log"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-green-800 transition hover:text-green-600"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://fit-log-eight-brown.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-green-800 transition hover:text-green-600"
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>
            </article>

            {/* Project 3 */}
            <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-green-300 hover:shadow-xl hover:shadow-green-900/5">
              <div className="flex h-44 items-center justify-center bg-amber-100">
                <div className="text-center">
                  <span className="text-5xl">🛒</span>
                  <p className="mt-3 text-sm font-bold tracking-widest text-amber-900">
                    BAZAR DOR
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
                  Market Price Tracker
                </p>
                <h3 className="mt-2 text-xl font-bold text-gray-950">
                  Bazar Dor
                </h3>
                <p className="mt-3 min-h-20 text-sm leading-6 text-gray-600">
                  A Bengali market price tracker for checking essential
                  products, categories, and daily price changes.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                  <a
                    href="https://github.com/Sadia-IoT/bazar-dor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-green-800 transition hover:text-green-600"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://bazar-dor-mee-ca9c.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-green-800 transition hover:text-green-600"
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>



      <section id="contact" className="bg-gray-950 px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-5xl">
          {/* Heading */}
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
              Get In Touch
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Let&apos;s Work Together
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
              I&apos;m currently learning and growing as a frontend developer.
              If you have an opportunity, a project idea, or just want to connect,
              feel free to reach out!
            </p>
          </div>

          {/* Contact Card */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Email */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900 p-7">
              <div className="mb-4 text-3xl">✉️</div>

              <h3 className="text-xl font-semibold">Email Me</h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Have a question or job opportunity? I&apos;d love to hear from you.
              </p>

              <a
                href="https://mail.google.com/mail/?view=cm&to=sadiasultana42243%40gmail.com"
                className="mt-5 inline-block font-medium text-green-400 transition hover:text-green-300"
              >
                Send me an email →
              </a>
            </div>

            {/* Social Links */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900 p-7">
              <div className="mb-4 text-3xl">🌐</div>

              <h3 className="text-xl font-semibold">Connect With Me</h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Let&apos;s connect and share ideas about web development.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://github.com/Sadia-IoT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium transition hover:border-green-400 hover:text-green-400"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/sadia-sultana-eee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium transition hover:border-green-400 hover:text-green-400"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          {/* Closing Message */}
          <div className="mt-12 text-center">
            <p className="text-gray-400">
              Thank you for visiting my portfolio!
            </p>
          </div>
        </div>

        {/* Resume Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/Sadia-Sultana-Resume.pdf"
            download="Sadia-Sultana-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600"
          >
            Download Resume ↓
          </a>

          <a
            href="/Sadia-Sultana-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-green-500 px-6 py-3 font-semibold text-green-400 transition hover:bg-green-500 hover:text-white"
          >
            View Resume ↗
          </a>
        </div>

      </section>


      <footer className="border-t border-gray-800 bg-gray-950 px-6 py-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
          {/* Logo / Name */}
          <a
            href="#home"
            className="text-xl font-bold tracking-tight"
          >
            Sadia<span className="text-green-400">.</span>
          </a>

          {/* Copyright */}
          <p className="text-center text-sm text-gray-400">
            © 2026 Sadia Sultana. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-5 text-sm">
            <a
              href="https://github.com/Sadia-IoT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-green-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-green-400"
            >
              LinkedIn ↗
            </a>

            <a
              href="#home"
              className="text-gray-400 transition hover:text-green-400"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
