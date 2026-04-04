import './PortfolioPage.css';

const projects = [
  {
    title: 'Universities',
    description:
      'The most sought-after professions worldwide are Law, Software Engineering, and Medicine. Harvard leads in Law, Carnegie Mellon in Software Engineering, and Johns Hopkins in Medicine, each offering top programs, renowned faculty, and excellent career opportunities for graduates.',
    href: '/ProiectHTML/index.html',
  },
  {
    title: 'FlexBox Froggy',
    description:
      'Flexbox Froggy is an educational game that teaches CSS Flexbox through interactive challenges. By guiding frogs to their lily pads with CSS properties, players learn key concepts like alignment, justification, and ordering in a simple and fun way.',
    href: 'https://flexboxfroggy.com/',
  },
  {
    title: 'Grid Garden',
    description:
      'Grid Garden is an interactive game that teaches CSS Grid layout. Players water carrots and avoid weeds by writing correct CSS grid code, learning concepts like columns, rows, and alignment in a fun and practical way.',
    href: 'https://cssgridgarden.com/',
  },
  {
    title: 'CSS Diner',
    description:
      'CSS Diner is a fun, interactive game for learning CSS selectors. Players practice targeting different table elements like plates, cups, and apples using the right selectors, making it an engaging way to understand and master CSS basics.',
    href: 'https://flukeout.github.io/',
  },
  {
    title: 'Flexbox Defense',
    description:
      'Flexbox Defense is an interactive game that teaches CSS Flexbox by combining learning with a tower defense challenge. Players position towers correctly using flexbox properties, practicing alignment, order, and layout concepts while defending against waves of enemies.',
    href: 'http://www.flexboxdefense.com/',
  },
];

export function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <section className="portfolio-intro">
        <p>
          Hi
          <br />
          I&apos;m Arsenie
          <br />
          {'< Web Developer >'}
        </p>
      </section>

      <section className="portfolio-projects-title">
        <p>My projects:</p>
      </section>

      <section className="portfolio-grid">
        {projects.map((project) => (
          <article className="portfolio-card" key={project.title}>
            <a href={project.href} target={project.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
