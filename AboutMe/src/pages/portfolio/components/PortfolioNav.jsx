export function PortfolioNav() {
  return (
    <nav className="portfolio-nav" aria-label="Portfolio navigation">
      <span className="portfolio-nav-name">Arsenie Bilba</span>

      <ul className="portfolio-nav-links">
        <li>
          <a href="#/">About Me</a>
        </li>
        <li>
          <a href="#/portfolio" className="active">
            Portfolio
          </a>
        </li>
      </ul>

      <div aria-hidden="true" />
    </nav>
  );
}
