import Link from "next/link";
import PageEndNav from "@/components/PageEndNav";

export const metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <section className="inner-page section-shell compact-page">
      <header className="page-intro compact-intro">
        <p className="section-index">Experience</p>
        <h1 className="display-heading">
          Learning through <span>real work.</span>
        </h1>
        <p className="lead">
          A growing record of internships, collaborations, and applied design work.
        </p>
      </header>

      <div className="experience-list">
        <article>
          <time>2026 — Present</time>
          <div>
            <p className="experience-type">Independent projects</p>
            <h2>Research-led product explorations</h2>
            <p>
              Developing concepts such as Sahaja AI and DocPilot through problem
              framing, user flows, prototypes, and case-study documentation.
            </p>
            <Link href="/projects#personal">View related projects ↗</Link>
          </div>
        </article>

        <article>
          <time>2025 — Present</time>
          <div>
            <p className="experience-type">Academic work</p>
            <h2>B.Des studio and college projects</h2>
            <p>
              Building research, interaction-design, collaboration, and visual
              communication skills through coursework and team projects.
            </p>
            <Link href="/projects#college">View college projects ↗</Link>
          </div>
        </article>

        <article className="future-entry">
          <time>Next</time>
          <div>
            <p className="experience-type">Internship work</p>
            <h2>Internship case studies will appear here</h2>
            <p>
              Future entries will clearly state the organization, role, duration,
              Jaswant’s contribution, outcomes, and any confidentiality limits.
            </p>
          </div>
        </article>
      </div>

      <PageEndNav />
    </section>
  );
}
