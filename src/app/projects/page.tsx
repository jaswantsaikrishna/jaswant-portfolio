import ProjectCard from "@/components/ProjectCard";
import PageEndNav from "@/components/PageEndNav";
import { projects, type ProjectCategory } from "@/data/projects";

export const metadata = { title: "Projects" };

const categories: Array<{ id: string; label: string; category: ProjectCategory }> = [
  { id: "academic", label: "Academic", category: "Academic" },
  { id: "research", label: "Flagship / Research", category: "Research" },
  { id: "competition", label: "Competition Projects", category: "Competition" },
];

export default function ProjectsPage() {
  return (
    <section className="inner-page section-shell projects-page">
      <header className="page-intro compact-intro">
        <p className="section-index">Projects</p>
        <h1 className="display-heading">
          Work shaped by <span>questions</span>,<br />not only screens.
        </h1>
        <p className="lead">
          Case studies showing the problem, evidence, decisions, iterations,
          outcome, and reflection.
        </p>
      </header>

      <nav className="category-jump" aria-label="Project categories">
        {categories.map((item) => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}
      </nav>

      {categories.map((item) => {
        const categoryProjects = projects.filter((project) => project.category === item.category);
        return (
          <section className="project-category" id={item.id} key={item.id}>
            <div className="category-heading">
              <p className="section-index">{item.label}</p>
              <span>{categoryProjects.length} {categoryProjects.length === 1 ? "project" : "projects"}</span>
            </div>
            {item.category === "Competition" && categoryProjects.length === 0 ? (
              <div className="project-coming-soon">
                <p>Competition project coming soon.</p>
              </div>
            ) : (
              <div className="project-list">
                {categoryProjects.map((project, index) => (
                  <ProjectCard key={project.slug} project={project} index={index} />
                ))}
              </div>
            )}
          </section>
        );
      })}

      <PageEndNav />
    </section>
  );
}
