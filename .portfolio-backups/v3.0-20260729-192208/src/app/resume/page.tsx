import ResumeActions from "@/components/ResumeActions";
import ResumeDocument from "@/components/ResumeDocument";
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

      <ResumeDocument />
      <PageEndNav />
    </section>
  );
}
