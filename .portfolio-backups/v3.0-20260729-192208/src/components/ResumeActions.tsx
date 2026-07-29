"use client";

export default function ResumeActions() {
  const handlePrint = () => {
    // Calling print directly from the visitor's click keeps it in the same page
    // and allows the browser to open its native Print / Save as PDF dialog.
    window.print();
  };

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
