export function PortfolioHero() {
  return (
    <section className="portfolio-hero" id="home">
      <div className="portfolio-aurora" aria-hidden="true">
        <div className="portfolio-blob a" />
        <div className="portfolio-blob b" />
        <div className="portfolio-blob c" />
      </div>

      <div className="portfolio-hero-inner">
        <span className="portfolio-hero-eyebrow">Selected Work · 2023 - 2025</span>
        <h1 className="portfolio-hero-title">
          <span>My</span>
          <br />
          Portfolio
        </h1>
        <p className="portfolio-hero-sub">
          Systems, interfaces, and tools - built with precision, shaped by curiosity.
        </p>
      </div>
    </section>
  );
}
