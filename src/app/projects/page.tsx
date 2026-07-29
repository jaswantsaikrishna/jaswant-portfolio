"use client";
import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects, type ProjectCategory } from "@/data/projects";

const filters: Array<"All" | ProjectCategory> = ["All", "College", "Personal", "Research", "Competition"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = useMemo(() => filter === "All" ? projects : projects.filter(p => p.category === filter), [filter]);
  return (
    <section className="inner-page section-shell">
      <div className="page-intro">
        <p className="section-index">Projects / Case studies</p>
        <h1 className="display-heading">Work shaped by <span>questions</span>,<br />not just screens.</h1>
        <p className="lead">Each project documents the problem, evidence, decisions, iterations, outcome, and what I would improve next.</p>
      </div>
      <div className="filter-row" aria-label="Filter projects">
        {filters.map(item => <button className={filter === item ? "active" : ""} onClick={() => setFilter(item)} key={item}>{item}</button>)}
      </div>
      <div className="project-list">{visible.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
    </section>
  );
}
