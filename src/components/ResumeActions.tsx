"use client";

import { useState } from "react";

const PRINT_STYLES = `
  @page { size: A4; margin: 14mm; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; background: #fff; color: #111; }
  body { font-family: Arial, Helvetica, sans-serif; font-size: 10.5pt; line-height: 1.45; }
  a { color: #111; text-decoration: none; }
  .print-only { display: block !important; }
  .resume-print-heading { padding: 0 0 7mm; border-bottom: 1px solid #111; }
  .resume-print-heading .section-index { margin: 0; color: #666; font-size: 8pt; text-transform: uppercase; letter-spacing: .12em; }
  .resume-print-heading h1 { margin: 3mm 0 1.5mm; font-size: 30pt; line-height: 1; letter-spacing: -.04em; }
  .resume-print-heading p:last-child { margin: 0; color: #555; }
  .resume-grid { display: grid; grid-template-columns: 1fr 1fr; column-gap: 12mm; }
  .resume-grid > section { padding: 8mm 0; border-bottom: 1px solid #d8d8d8; break-inside: avoid; }
  .resume-grid h2 { margin: 0 0 4mm; color: #666; font-size: 8pt; text-transform: uppercase; letter-spacing: .12em; }
  .resume-grid p { margin: 0; color: #333; }
  .resume-entry { margin-bottom: 5mm; break-inside: avoid; }
  .resume-entry:last-child { margin-bottom: 0; }
  .resume-entry > div { display: flex; justify-content: space-between; gap: 5mm; }
  .resume-entry span { color: #666; white-space: nowrap; }
  .resume-entry p { margin-top: 1.5mm; }
  .resume-skills { display: flex; flex-wrap: wrap; gap: 2mm; }
  .resume-skills span { border: 1px solid #bbb; border-radius: 999px; padding: 1.8mm 2.6mm; font-size: 8.5pt; }
  .resume-links { display: flex; flex-direction: column; align-items: flex-start; gap: 2.5mm; }
  .needs-edit { color: #777; }
  @media (max-width: 700px) { .resume-grid { grid-template-columns: 1fr; } }
`;

export default function ResumeActions() {
  const [message, setMessage] = useState("");

  const handlePrint = () => {
    const source = document.getElementById("resume-print-content");

    if (!source) {
      window.focus();
      window.print();
      return;
    }

    setMessage("Opening the print dialog…");

    const iframe = document.createElement("iframe");
    iframe.setAttribute("title", "Printable resume");
    iframe.setAttribute("aria-hidden", "true");
    iframe.style.position = "fixed";
    iframe.style.left = "-10000px";
    iframe.style.top = "0";
    iframe.style.width = "210mm";
    iframe.style.height = "297mm";
    iframe.style.border = "0";
    iframe.style.opacity = "0";
    iframe.style.pointerEvents = "none";

    const cleanup = () => {
      window.setTimeout(() => {
        iframe.remove();
        setMessage("");
      }, 300);
    };

    iframe.onload = () => {
      const printWindow = iframe.contentWindow;
      if (!printWindow) {
        cleanup();
        window.focus();
        window.print();
        return;
      }

      printWindow.addEventListener("afterprint", cleanup, { once: true });
      printWindow.focus();
      printWindow.print();

      // Safety cleanup in case a browser does not fire afterprint.
      window.setTimeout(cleanup, 60000);
    };

    document.body.appendChild(iframe);

    iframe.srcdoc = `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Jaswant Sai Krishna — Resume</title>
          <style>${PRINT_STYLES}</style>
        </head>
        <body>${source.innerHTML}</body>
      </html>`;
  };

  return (
    <div className="resume-action-wrap">
      <button
        className="pill-button resume-print"
        type="button"
        onClick={handlePrint}
        aria-label="Print or save Jaswant's resume as a PDF"
      >
        Print / Save as PDF
      </button>
      <span className="resume-print-status" aria-live="polite">
        {message}
      </span>
    </div>
  );
}
