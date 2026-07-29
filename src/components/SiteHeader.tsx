"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume.pdf", label: "Resume", external: true },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Jaswant Sai Krishna home">
        JSK<span>.</span>
      </Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
        {open ? "Close" : "Menu"}
      </button>
      <nav className={open ? "nav open" : "nav"} aria-label="Primary navigation">
        {links.map((link) => {
          const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={active ? "active" : ""}
              target={link.external ? "_blank" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <div className="social-links" aria-label="Social profiles">
        <a href="https://www.behance.net/" target="_blank" rel="noreferrer">Bē</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">in</a>
        <a href="https://github.com/jaswantsaikrishna" target="_blank" rel="noreferrer">gh</a>
      </div>
    </header>
  );
}
