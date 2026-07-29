import ResumeActions from "@/components/ResumeActions";
import PageEndNav from "@/components/PageEndNav";
import { profile } from "@/data/profile";

export const metadata = { title: "Resume" };

export default function ResumePage() {
  return (
    <section className="inner-page section-shell resume-page">
      <header className="resume-header">
        <div>
          <p className="section-index">Resume</p>
          <h1>{profile.name}</h1>
          <p>{profile.role} · {profile.location}</p>
        </div>
        <ResumeActions />
      </header>

      <div className="resume-grid">
        <section>
          <h2>Profile</h2>
          <p>
            UX design student focused on research, accessibility, interaction
            design, and clear digital experiences.
          </p>
        </section>

        <section>
          <h2>Education</h2>
          <article className="resume-entry">
            <div><strong>B.Des in User Experience Design</strong><span>2025–2029</span></div>
            <p>Bengaluru, India</p>
          </article>
        </section>

        <section>
          <h2>Experience</h2>
          <article className="resume-entry">
            <div><strong>Independent UX projects</strong><span>2026–Present</span></div>
            <p>Research, interaction design, prototyping, testing, and documentation.</p>
          </article>
          <article className="resume-entry">
            <div><strong>Academic design projects</strong><span>2025–Present</span></div>
            <p>Studio projects, collaborative assignments, and research-led coursework.</p>
          </article>
        </section>

        <section>
          <h2>Skills</h2>
          <div className="resume-skills">
            {["UX Research", "Interaction Design", "Information Architecture", "Prototyping", "Usability Testing", "Accessibility", "Figma", "FigJam", "Visual Storytelling"].map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </section>

        <section>
          <h2>Links &amp; contact</h2>
          <div className="resume-links">
            {profile.email ? <a href={`mailto:${profile.email}`}>{profile.email}</a> : <span className="needs-edit">Add Jaswant’s email in src/data/profile.ts before publishing.</span>}
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={profile.behance} target="_blank" rel="noreferrer">Behance ↗</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </section>
      </div>

      <PageEndNav />
    </section>
  );
}
