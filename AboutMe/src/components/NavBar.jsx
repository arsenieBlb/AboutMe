import './NavBar.css';

export function NavBar({ currentPage }) {
  const links = [
    { name: 'About Me', href: '#/', key: 'about' },
    { name: 'CV', href: '#/cv', key: 'cv' },
    { name: 'Portfolio', href: '#/portfolio', key: 'portfolio' },
  ];

  return (
    <nav className="navbar">
      {links.map((link) => (
        <a
          key={link.key}
          className={currentPage === link.key ? 'active' : ''}
          href={link.href}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}
