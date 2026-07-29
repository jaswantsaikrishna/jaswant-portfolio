import Image from "next/image";

export default function Home() {
  return (
    <section className="home-only section-shell" aria-labelledby="home-title">
      <h1 id="home-title" className="sr-only">
        Jaswant Sai Krishna — UX Designer &amp; Researcher
      </h1>

      <div className="hero-composite-wrap">
        <Image
          className="hero-composite-image"
          src="/jaswant-hero-composite.png"
          alt="Jaswant Sai Krishna, UX Designer and Researcher"
          width={1163}
          height={922}
          priority
          sizes="(max-width: 700px) 96vw, 900px"
        />
      </div>

      <p className="home-intro">
        I study real-world experiences and turn overlooked gaps into simple,
        inclusive digital products.
      </p>
    </section>
  );
}
