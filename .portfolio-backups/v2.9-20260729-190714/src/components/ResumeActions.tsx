import Link from "next/link";

export default function ResumeActions() {
  return (
    <Link
      className="pill-button resume-print"
      href="/resume/print"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open a print-ready version of Jaswant's resume"
    >
      Print / Save as PDF
    </Link>
  );
}
