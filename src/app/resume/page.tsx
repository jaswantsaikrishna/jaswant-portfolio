import type { Metadata } from "next";
import ResumeActions from "@/components/ResumeActions";
import ResumeDocument from "@/components/ResumeDocument";
import PageEndNav from "@/components/PageEndNav";
import { profile } from "@/data/profile";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Resume",
  description:
    "View Jaswant Sai Krishna's UX design resume, education, research skills, projects and professional profiles.",
  path: "/resume",
});

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

      <div id="resume-print-content" className="resume-print-content">
        <div className="print-only resume-print-heading" aria-hidden="true">
          <p className="section-index">Resume</p>
          <h1>{profile.name}</h1>
          <p>{profile.role} · {profile.location}</p>
        </div>
        <ResumeDocument />
      </div>

      <PageEndNav />
    </section>
  );
}
