export function AboutNav() {
  return (
    <nav className="about-nav" aria-label="Primary navigation">
      <span className="about-nav-name">Arsenie Bilba</span>

      <ul className="about-nav-links">
        <li>
          <a href="#home" className="active">
            About Me
          </a>
        </li>
        <li>
          <a href="#/portfolio">Portfolio</a>
        </li>
      </ul>

      <div className="about-nav-spacer" aria-hidden="true" />
    </nav>
  );
}
