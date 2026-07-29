import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageEndNav from "@/components/PageEndNav";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];
  if (!project) notFound();

  const previous = projects[(projectIndex - 1 + projects.length) % projects.length];
  const next = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="case-study section-shell">
      <Link className="back-link" href="/projects">← Projects</Link>

      <header className={`case-hero accent-${project.accent}`}>
        <p>{project.category} · {project.year}</p>
        <h1>{project.title}</h1>
        <p className="lead">{project.summary}</p>
        <div className="case-facts">
          <div><span>Role</span><strong>{project.role}</strong></div>
          <div><span>Duration</span><strong>{project.duration}</strong></div>
          <div><span>Tools</span><strong>{project.tools.join(", ")}</strong></div>
        </div>

        {project.externalLinks?.length ? (
          <div className="case-actions" aria-label="Project resources">
            {project.externalLinks.map((item) => (
              <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
                {item.label} ↗
              </a>
            ))}
          </div>
        ) : null}
      </header>

      {project.teamContext ? (
        <section className="case-section">
          <p className="section-index">00 / Collaboration</p>
          <div>
            <h2>Team context</h2>
            <p className="lead">{project.teamContext}</p>
          </div>
        </section>
      ) : null}

      {project.presentationImage ? (
        <section className="case-media-section">
          <div>
            <p className="section-index">Presentation</p>
            <h2>Jury presentation board</h2>
            <p>
              Preview the team’s research and design process, or open the full
              board in a new tab for closer inspection.
            </p>
          </div>
          <a
            className="case-media-preview"
            href={project.presentationImage}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open the full ${project.title} presentation board`}
          >
            <Image
              src={project.presentationImage}
              alt={`${project.title} jury presentation board preview`}
              fill
              sizes="(max-width: 820px) 100vw, 62vw"
            />
            <span>Open full presentation board ↗</span>
          </a>
        </section>
      ) : null}

      <section className="case-section"><p className="section-index">01 / Problem</p><div><h2>What needed to change?</h2><p className="lead">{project.problem}</p></div></section>
      <section className="case-section"><p className="section-index">02 / Research</p><div><h2>How assumptions were reduced</h2><ol>{project.research.map((item) => <li key={item}>{item}</li>)}</ol></div></section>
      <section className="case-section"><p className="section-index">03 / Process</p><div><h2>From evidence to direction</h2><ol>{project.process.map((item) => <li key={item}>{item}</li>)}</ol></div></section>
      <section className="case-section"><p className="section-index">04 / Outcome</p><div><h2>What the work achieved</h2><p className="lead">{project.outcome}</p></div></section>
      <section className="case-section reflection"><p className="section-index">05 / Reflection</p><div><h2>What the project revealed</h2><blockquote>{project.reflection}</blockquote></div></section>

      <nav className="project-pagination" aria-label="Other projects">
        <Link href={`/projects/${previous.slug}`}>← {previous.title}</Link>
        <Link href={`/projects/${next.slug}`}>{next.title} →</Link>
      </nav>

      <PageEndNav />
    </article>
  );
}
