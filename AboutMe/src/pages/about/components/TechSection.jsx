import { techStack } from '../aboutContent';

export function TechSection() {
  return (
    <section className="about-tech-section" id="tech">
      <div className="about-tech-inner">
        <div className="about-tech-header">
          <span className="about-eyebrow">Always Connected</span>
          <h2>My Tech Stack</h2>
          <p>
            Proficient across <strong>11 languages and frameworks</strong> - from
            low-level systems languages to modern web development. Versatile by
            design, precise in execution.
          </p>
        </div>

        <div className="about-tech-grid">
          {techStack.map((tech) => (
            <div className="about-tech-card" key={tech.name}>
              <img src={tech.src} alt={tech.name} loading="lazy" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
