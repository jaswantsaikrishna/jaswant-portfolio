"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
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

      <button
        className="menu-button"
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls="primary-navigation"
      >
        {open ? "Close" : "Menu"}
      </button>

      <nav
        id="primary-navigation"
        className={open ? "nav open" : "nav"}
        aria-label="Primary navigation"
      >
        {links.map((link) => {
          const active =
            !link.external &&
            (pathname === link.href || pathname.startsWith(`${link.href}/`));

          return (
            <Link
              key={link.href}
              href={link.href}
              className={active ? "active" : undefined}
              aria-current={active ? "page" : undefined}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="social-links" aria-label="Social profiles">
        <a href="https://www.behance.net/" target="_blank" rel="noreferrer" aria-label="Behance">Bē</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
        <a href="https://github.com/jaswantsaikrishna" target="_blank" rel="noreferrer" aria-label="GitHub">gh</a>
      </div>
    </header>
  );
}
