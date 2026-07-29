export default function AboutPage() {
  return (
    <section className="inner-page section-shell about-page">
      <div className="page-intro"><p className="section-index">About</p><h1 className="display-heading">I notice the things<br /><span>people work around.</span></h1></div>
      <div className="editorial-grid">
        <div className="big-quote">“Good design should make the next step feel obvious—without making the person feel managed.”</div>
        <div className="story-copy">
          <p>I’m Jaswant, a UX design student and researcher based in Bengaluru. I enjoy studying real behavior: the shortcuts people invent, the moments they hesitate, and the gaps they have learned to tolerate.</p>
          <p>My approach combines curiosity, structure, and visual storytelling. I care about accessibility and inclusive design, particularly experiences that must work across languages, confidence levels, and different kinds of ability.</p>
          <p>Outside design, I enjoy exploring technology, film, visual culture, and the small systems hidden inside everyday life.</p>
        </div>
      </div>
      <div className="values-grid">
        <article><span>01</span><h3>Observe before solving</h3><p>Start with behavior and context, not a preferred interface.</p></article>
        <article><span>02</span><h3>Make reasoning visible</h3><p>Show how evidence changed the design—not only the polished result.</p></article>
        <article><span>03</span><h3>Design for more people</h3><p>Treat accessibility and inclusion as product quality.</p></article>
      </div>
    </section>
  );
}
