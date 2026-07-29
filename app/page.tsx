const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Git & GitHub",
];

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A responsive personal website built with Next.js and Tailwind CSS to showcase my skills, projects, and experience.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Project Two",
    description:
      "A short description of the project, the problem it solves, and what I learned while building it.",
    technologies: ["React", "JavaScript", "API"],
    link: "#",
  },
  {
    title: "Project Three",
    description:
      "Add another academic, personal, internship, or open-source project here.",
    technologies: ["Python", "Database", "Git"],
    link: "#",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-white"
          >
            Jaswant<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-cyan-400" href="#about">
              About
            </a>

            <a className="transition hover:text-cyan-400" href="#skills">
              Skills
            </a>

            <a className="transition hover:text-cyan-400" href="#projects">
              Projects
            </a>

            <a className="transition hover:text-cyan-400" href="#contact">
              Contact
            </a>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-cyan-400/60 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Resume
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden border-b border-white/10"
      >
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Student · Developer · Problem Solver
            </p>

            <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Hi, I&apos;m Jaswant.
              <span className="block text-slate-400">
                I build thoughtful digital experiences.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I&apos;m a student and aspiring software developer interested in
              building useful products, learning new technologies, and solving
              real-world problems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View my work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
              >
                Contact me
              </a>
            </div>

            <div className="mt-10 flex gap-6 text-sm text-slate-400">
              <a
                href="https://github.com/jaswantsaikrishna"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/jaswant-sk-843047302/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Profile card */}
          <div className="mx-auto w-full max-w-sm">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur">
              <div className="flex aspect-square items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-purple-500/20">
                <div className="text-center">
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-4 border-cyan-400/30 bg-slate-900 text-4xl font-bold text-cyan-300">
                    J
                  </div>

                  <p className="mt-5 text-xl font-semibold text-white">
                    Jaswant
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    Aspiring Software Developer
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-xl font-bold text-white">3+</p>
                  <p className="mt-1 text-xs text-slate-400">Projects</p>
                </div>

                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-xl font-bold text-white">6+</p>
                  <p className="mt-1 text-xs text-slate-400">Skills</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-24 border-b border-white/10 px-6 py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              About me
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Curious by nature, driven by learning.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              I enjoy understanding how technology works and using it to create
              practical solutions. My interests include software development,
              web technologies, artificial intelligence, and product design.
            </p>

            <p>
              I&apos;m currently strengthening my programming fundamentals,
              building personal projects, and preparing for future academic and
              professional opportunities.
            </p>

            <p>
              Outside technology, I enjoy exploring new ideas, working with
              people, and continuously improving my skills.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="scroll-mt-24 border-b border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Skills
          </p>

          <div className="mt-3 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className="max-w-xl text-3xl font-bold text-white sm:text-4xl">
              Technologies I&apos;m learning and working with
            </h2>

            <p className="max-w-md text-slate-400">
              This section can be updated as Jaswant develops new technical and
              professional skills.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.06]"
              >
                <span className="text-sm font-semibold text-cyan-400">
                  0{index + 1}
                </span>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {skill}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-24 border-b border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Featured work
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Projects
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="flex min-h-80 flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-cyan-400">
                    Project 0{index + 1}
                  </span>

                  <a
                    href={project.link}
                    aria-label={`Open ${project.title}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-lg text-white transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    ↗
                  </a>
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-blue-500/10 p-8 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Get in touch
            </p>

            <div className="mt-5 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <h2 className="max-w-2xl text-3xl font-bold text-white sm:text-5xl">
                  Let&apos;s build something meaningful.
                </h2>

                <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                  I&apos;m open to learning opportunities, collaborations,
                  internships, and conversations about technology.
                </p>
              </div>

              <a
                href="mailto:jaswant.saikrishna@gmail.com"
                className="inline-flex w-fit rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Send an email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Jaswant. All rights reserved.</p>

          <p>Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}