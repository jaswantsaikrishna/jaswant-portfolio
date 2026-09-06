import type { Metadata } from "next";
import PageEndNav from "@/components/PageEndNav";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Meet Jaswant Sai Krishna, a Bengaluru-based B.Des UX student focused on research, accessibility, multilingual experiences and interaction design.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="inner-page section-shell compact-page">
      <header className="page-intro compact-intro">
        <p className="section-index">About</p>
        <h1 className="display-heading">
          Curious about people.<br /><span>Careful about details.</span>
        </h1>
      </header>

      <div className="about-summary">
        <div className="story-copy">
          <p>
            I’m Jaswant, a B.Des UX student in Bengaluru. I study how people
            navigate systems, where they hesitate, and the workarounds they
            create—then translate those observations into clear interactions.
          </p>
          <p>
            My interests include UX research, accessibility, multilingual
            experiences, and interaction design. I prefer evidence-led
            decisions and make the reasoning behind each design visible.
          </p>
        </div>

        <aside className="about-facts" aria-label="About Jaswant at a glance">
          <div><span>Education</span><strong>B.Des, User Experience Design</strong><small>2025–2029</small></div>
          <div><span>Based in</span><strong>Bengaluru, India</strong></div>
          <div><span>Focus</span><strong>Research · Accessibility · Interaction</strong></div>
        </aside>
      </div>

      <section className="compact-section" aria-labelledby="recognition-title">
        <p className="section-index">Recognition</p>
        <div>
          <h2 id="recognition-title">Recognition &amp; competitions</h2>
          <p>
            Competition results, design-jam selections, publications, and
            other recognition will be added here as they are earned.
          </p>
        </div>
      </section>

      <PageEndNav />
    </section>
  );
}
