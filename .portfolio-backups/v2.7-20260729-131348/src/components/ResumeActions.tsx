"use client";

export default function ResumeActions() {
  return (
    <button className="pill-button resume-print" type="button" onClick={() => window.print()}>
      Print / Save as PDF
    </button>
  );
}
