import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.filter((project) => project.featured);
  return (
    <>
      <section className="hero section-shell">
        <div className="portrait-wrap">
          <Image src="/jaswant-profile.png" alt="Jaswant Sai Krishna" fill priority sizes="(max-width: 700px) 72vw, 420px" />
        </div>
        <p className="handwritten">Jaswant Sai Krishna</p>
        <div className="role-sticker">UX Designer<br />& Researcher</div>
        <p className="hero-intro">I investigate real-world experiences, uncover overlooked gaps, and turn those insights into simple, inclusive digital products.</p>
        <Link className="scroll-cue" href="#about"><span>Scroll to explore</span><i>↓</i></Link>
      </section>

      <section id="about" className="about-grid section-shell ruled-section">
        <p className="section-index">01 / About</p>
        <div>
          <h1 className="display-heading"><span>Curious</span> about people.<br />Serious about useful design.</h1>
          <p className="lead">I’m a researcher and designer who enjoys understanding how people interact with systems. I’m drawn to accessible and inclusive experiences that feel intuitive, calm, and genuinely useful.</p>
          <Link className="text-link" href="/about">More about me <span>↗</span></Link>
        </div>
      </section>

      <section className="capabilities section-shell ruled-section">
        <p className="section-index">02 / What I do</p>
        <div className="capability-grid">
          {[
            ["01", "UX Research", "Interviews, observation, synthesis, usability testing"],
            ["02", "Interaction Design", "User flows, information architecture, prototypes"],
            ["03", "Inclusive Design", "Accessibility, multilingual and low-friction experiences"],
            ["04", "Visual Storytelling", "Clear narratives that explain decisions and impact"],
          ].map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="skills-band">
        <div className="skills-track" aria-label="Skills">
          {['Figma','FigJam','UX Research','Prototyping','Canva','Illustrator','Photoshop','DaVinci Resolve','Premiere Pro','Accessibility'].map(skill => <span key={skill}>{skill}</span>)}
        </div>
      </section>

      <section className="projects-section section-shell ruled-section">
        <div className="section-heading-row">
          <div><p className="section-index">03 / Selected work</p><h2 className="display-heading">Featured <span>projects</span></h2></div>
          <Link className="pill-button" href="/projects">View all projects ↗</Link>
        </div>
        <div className="project-list">
          {featured.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
        </div>
      </section>

      <section className="experience-grid section-shell ruled-section">
        <p className="section-index">04 / Journey</p>
        <div>
          <h2 className="display-heading">Learning in public.<br /><span>Building with intent.</span></h2>
          <div className="timeline">
            <article><time>2025 — 2029</time><div><h3>B.Des in User Experience Design</h3><p>Coursework, research-led projects, collaborative studios, and independent explorations.</p></div></article>
            <article><time>Next</time><div><h3>Internships & real-world product work</h3><p>This section will grow into a record of internships, freelance work, volunteering, and research collaborations.</p></div></article>
            <article><time>Along the way</time><div><h3>Awards & recognition</h3><p>Competition entries, design jams, publications, presentations, and recognitions will appear here when earned.</p></div></article>
          </div>
        </div>
      </section>
    </>
  );
}
