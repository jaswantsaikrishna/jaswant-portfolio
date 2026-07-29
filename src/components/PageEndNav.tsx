import Link from "next/link";

export default function PageEndNav() {
  return (
    <nav className="page-end-nav" aria-label="Page shortcuts">
      <Link href="/">← Home</Link>
      <a href="#top">↑ Back to top</a>
    </nav>
  );
}
