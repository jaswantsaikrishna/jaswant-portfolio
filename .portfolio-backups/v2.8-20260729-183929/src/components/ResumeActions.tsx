"use client";

export default function ResumeActions() {
  function handlePrint() {
    window.focus();
    window.print();
  }

  return (
    <button
      className="pill-button resume-print"
      type="button"
      onClick={handlePrint}
      aria-label="Print or save Jaswant's resume as a PDF"
    >
      Print / Save as PDF
    </button>
  );
}
