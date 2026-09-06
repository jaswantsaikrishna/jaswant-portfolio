import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <Link href={`/projects/${project.slug}`}>
        <div className={`project-visual ${project.coverImage ? "has-cover" : ""}`}>
          <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
          {project.coverImage ? (
            <>
              <Image
                className="project-cover-image"
                src={project.coverImage}
                alt={`${project.title} project cover`}
                fill
                sizes="(max-width: 820px) 100vw, 55vw"
              />
              <span className="project-cover-overlay" aria-hidden="true" />
              <span className="project-cover-badge">Academic team project</span>
            </>
          ) : (
            <div className="mini-window" aria-hidden="true">
              <div className="mini-window-bar"><i /><i /><i /></div>
              <div className="mini-window-content"><span /><span /><span /></div>
            </div>
          )}
        </div>
        <div className="project-copy">
          <div className="project-meta">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <div className="tag-row">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </Link>
    </article>
  );
}
