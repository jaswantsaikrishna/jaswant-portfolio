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

function BehanceIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M2.8 5.8h6.5c2.9 0 4.6 1.35 4.6 3.55 0 1.22-.59 2.18-1.72 2.75 1.55.52 2.36 1.68 2.36 3.35 0 2.5-1.9 4.15-5 4.15H2.8V5.8Zm3.05 2.65v2.55h2.92c1.12 0 1.75-.45 1.75-1.27 0-.84-.63-1.28-1.75-1.28H5.85Zm0 5.18v3.28h3.32c1.37 0 2.08-.55 2.08-1.64 0-1.08-.71-1.64-2.08-1.64H5.85Z"
      />
      <path fill="currentColor" d="M15.4 6.25h5.45v1.62H15.4z" />
      <path
        fill="currentColor"
        d="M21.55 15.2h-4.62c.16 1.18.82 1.8 1.9 1.8.76 0 1.31-.28 1.66-.84h2.55c-.63 2.08-2.14 3.22-4.3 3.22-2.77 0-4.58-2.01-4.58-4.97 0-2.94 1.83-5 4.48-5 2.74 0 4.41 2.05 4.41 5.43 0 .14 0 .24-.01.36h-1.49Zm-4.57-1.87h3.05c-.19-1.03-.69-1.56-1.49-1.56-.81 0-1.34.53-1.56 1.56Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0h.01Z"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.76.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .31.21.69.83.57A12 12 0 0 0 12 .3Z"
      />
    </svg>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);
  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label={`${profile.name} home`}>
        <span className="wordmark-j">J</span>
        <span className="wordmark-s">S</span>
        <span className="wordmark-k">K</span>
        <span className="wordmark-dot">.</span>
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
          className={`nav-tab nav-about ${active("/about") ? "active" : ""}`}
          onClick={closeMenu}
        >
          About
        </Link>

        <div className="nav-dropdown">
          <Link
            href="/projects"
            className={`nav-tab nav-projects ${active("/projects") ? "active" : ""}`}
            onClick={closeMenu}
            aria-haspopup="true"
          >
            Projects <span className="dropdown-arrow" aria-hidden="true">⌄</span>
          </Link>
          <div className="dropdown-menu" aria-label="Project categories">
            {projectCategories.map((item) => (
              <Link className="project-sub-link" key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <Link
          href="/experience"
          className={`nav-tab nav-experience ${active("/experience") ? "active" : ""}`}
          onClick={closeMenu}
        >
          Experience
        </Link>

        <Link
          href="/resume"
          className={`nav-tab nav-resume ${active("/resume") ? "active" : ""}`}
          onClick={closeMenu}
        >
          Resume
        </Link>
      </nav>

      <div className="social-links" aria-label="Social profiles">
        <a
          className="social-behance"
          href={profile.behance}
          target="_blank"
          rel="noreferrer"
          aria-label="View Jaswant on Behance"
          title="Behance"
        >
          <BehanceIcon />
        </a>
        <a
          className="social-linkedin"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="View Jaswant on LinkedIn"
          title="LinkedIn"
        >
          <LinkedInIcon />
        </a>
        <a
          className="social-github"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="View Jaswant on GitHub"
          title="GitHub"
        >
          <GitHubIcon />
        </a>
      </div>
    </header>
  );
}
