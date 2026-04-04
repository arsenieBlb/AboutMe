export function AboutFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="about-footer" id="footer">
      <div className="about-footer-brand">
        ARSENIE
        <br />
        BILBA
      </div>

      <div className="about-footer-contacts">
        <div className="about-footer-contact-block">
          <h4>Email</h4>
          <a href="mailto:bilba.arsenie@gmail.com">bilba.arsenie@gmail.com</a>
        </div>
        <div className="about-footer-contact-block">
          <h4>Phone</h4>
          <a href="tel:+4550299777">+45 50 29 97 77</a>
        </div>
        <div className="about-footer-contact-block">
          <h4>Location</h4>
          <p>Denmark</p>
        </div>
        <div className="about-footer-contact-block">
          <h4>LinkedIn</h4>
          <a href="https://linkedin.com/in/arsenie-bilba" target="_blank" rel="noreferrer">
            linkedin.com/in/arsenie-bilba
          </a>
        </div>
      </div>

      <div className="about-footer-bottom">
        <p>&copy; {year} Arsenie Bilba. All rights reserved.</p>
        <p>Made to Make.</p>
      </div>
    </footer>
  );
}
