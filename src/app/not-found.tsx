import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The requested page could not be found.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="inner-page section-shell compact-page">
      <header className="page-intro compact-intro">
        <p className="section-index">404</p>
        <h1 className="display-heading">
          This page has <span>moved on.</span>
        </h1>
        <p className="lead">The address may be outdated or the page may no longer exist.</p>
        <p><Link className="text-link" href="/">Return home <span>↗</span></Link></p>
      </header>
    </section>
  );
}
