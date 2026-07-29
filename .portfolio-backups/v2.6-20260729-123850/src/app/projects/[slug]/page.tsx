import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();
  return (
    <article className="case-study section-shell">
      <Link className="back-link" href="/projects">← All projects</Link>
      <header className={`case-hero accent-${project.accent}`}>
        <p>{project.category} · {project.year}</p>
        <h1>{project.title}</h1>
        <p className="lead">{project.summary}</p>
        <div className="case-facts">
          <div><span>Role</span><strong>{project.role}</strong></div>
          <div><span>Duration</span><strong>{project.duration}</strong></div>
          <div><span>Tools</span><strong>{project.tools.join(", ")}</strong></div>
        </div>
      </header>
      <section className="case-section"><p className="section-index">01 / Problem</p><div><h2>What needed to change?</h2><p className="lead">{project.problem}</p></div></section>
      <section className="case-section"><p className="section-index">02 / Research</p><div><h2>How I reduced assumptions</h2><ol>{project.research.map(item => <li key={item}>{item}</li>)}</ol></div></section>
      <section className="case-section"><p className="section-index">03 / Process</p><div><h2>From evidence to direction</h2><ol>{project.process.map(item => <li key={item}>{item}</li>)}</ol></div></section>
      <section className="case-section"><p className="section-index">04 / Outcome</p><div><h2>What the work achieved</h2><p className="lead">{project.outcome}</p></div></section>
      <section className="case-section reflection"><p className="section-index">05 / Reflection</p><div><h2>What I learned</h2><blockquote>{project.reflection}</blockquote></div></section>
      <div className="next-project"><span>Continue exploring</span><Link href="/projects">View all projects ↗</Link></div>
    </article>
  );
}
