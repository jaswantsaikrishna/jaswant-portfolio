"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/data/profile";

const projectCategories = [
  { label: "Personal", href: "/projects#personal" },
  { label: "College", href: "/projects#college" },
  { label: "Research", href: "/projects#research" },
  { label: "Competition Projects", href: "/projects#competition" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);
  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label={`${profile.name} home`}>
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
        <Link
          href="/about"
          className={active("/about") ? "active" : ""}
          onClick={closeMenu}
        >
          About
        </Link>

        <div className="nav-dropdown">
          <Link
            href="/projects"
            className={active("/projects") ? "active" : ""}
            onClick={closeMenu}
            aria-haspopup="true"
          >
            Projects <span className="dropdown-arrow" aria-hidden="true">⌄</span>
          </Link>
          <div className="dropdown-menu" aria-label="Project categories">
            {projectCategories.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <Link
          href="/experience"
          className={active("/experience") ? "active" : ""}
          onClick={closeMenu}
        >
          Experience
        </Link>

        <Link
          href="/resume"
          className={active("/resume") ? "active" : ""}
          onClick={closeMenu}
        >
          Resume
        </Link>
      </nav>

      <div className="social-links" aria-label="Social profiles">
        <a href={profile.behance} target="_blank" rel="noreferrer" aria-label="Behance">Bē</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">gh</a>
      </div>
    </header>
  );
}
