"use client";

import { useEffect } from "react";
import Link from "next/link";
import ResumeDocument from "@/components/ResumeDocument";
import { profile } from "@/data/profile";

export default function PrintResumePage() {
  useEffect(() => {
    document.body.classList.add("print-preview");
    const timer = window.setTimeout(() => window.print(), 350);

    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove("print-preview");
    };
  }, []);

  return (
    <section className="print-resume section-shell">
      <div className="print-toolbar">
        <div>
          <strong>Print-ready resume</strong>
          <span>Select “Save as PDF” in the browser print dialog.</span>
        </div>
        <div>
          <button type="button" onClick={() => window.print()}>Open print dialog</button>
          <Link href="/resume">Return to resume</Link>
        </div>
      </div>

      <header className="resume-header print-resume-header">
        <div>
          <p className="section-index">Resume</p>
          <h1>{profile.name}</h1>
          <p>{profile.role} · {profile.location}</p>
        </div>
      </header>

      <ResumeDocument />
    </section>
  );
}
