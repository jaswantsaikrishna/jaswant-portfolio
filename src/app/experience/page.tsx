import type { Metadata } from "next";
import Link from "next/link";
import PageEndNav from "@/components/PageEndNav";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Experience",
  description:
    "Jaswant Sai Krishna's growing UX design experience through academic projects, research, collaboration and applied design work.",
  path: "/experience",
});

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
          <time>2025 — Present</time>
          <div>
            <p className="experience-type">Academic work</p>
            <h2>B.Des studio and academic projects</h2>
            <p>
              Building research, interaction-design, collaboration, and visual
              communication skills through coursework and team projects.
            </p>
            <Link href="/projects#academic">View academic projects ↗</Link>
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
