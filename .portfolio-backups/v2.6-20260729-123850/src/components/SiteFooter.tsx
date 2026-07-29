import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="eyebrow">Let’s make something useful.</p>
        <h2>Have a project, internship, or idea in mind?</h2>
      </div>
      <Link className="round-arrow" href="/contact" aria-label="Go to contact page">↗</Link>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Jaswant Sai Krishna</span>
        <span>Designed with curiosity. Built with care.</span>
      </div>
    </footer>
  );
}
