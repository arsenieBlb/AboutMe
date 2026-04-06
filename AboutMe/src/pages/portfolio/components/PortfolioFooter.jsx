export function PortfolioFooter() {
  return (
    <footer className="portfolio-footer" id="footer">
      <div className="portfolio-footer-top">
        <div>
          <span className="portfolio-footer-eyebrow">Let&apos;s work together</span>
          <div className="portfolio-footer-name">Arsenie Bilba</div>
        </div>

        <a href="mailto:bilba.arsenie@gmail.com" className="portfolio-btn-pill">
          <span className="portfolio-pill-label">Get in touch</span>
          <span className="portfolio-pill-arrow">&rarr;</span>
        </a>
      </div>

      <div className="portfolio-footer-contacts">
        <div className="portfolio-footer-contact-block">
          <h4>Email</h4>
          <a href="mailto:bilba.arsenie@gmail.com">bilba.arsenie@gmail.com</a>
        </div>
        <div className="portfolio-footer-contact-block">
          <h4>Phone</h4>
          <a href="tel:+4550299777">+45 50 29 97 77</a>
        </div>
        <div className="portfolio-footer-contact-block">
          <h4>Location</h4>
          <p>Denmark</p>
        </div>
      </div>
    </footer>
  );
}
