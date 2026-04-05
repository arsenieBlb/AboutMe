import { techStack } from '../aboutContent';
import { ScrollRevealGroup } from './ScrollRevealGroup';

export function TechSection() {
  const secondRowStarts = {
    6: 2,
    7: 4,
    8: 6,
    9: 8,
    10: 10,
  };

  return (
    <section className="about-tech-section" id="tech">
      <div className="about-tech-inner">
        <div className="about-tech-header">
          <span className="about-eyebrow">Always Connected</span>
          <h2>My Tech Stack</h2>
          <p>
            An advanced understanding of a wide range of languages and frameworks -
            from low-level systems languages to modern web development. Versatile by
            design, precise in execution.
          </p>
        </div>

        <ScrollRevealGroup className="about-tech-grid">
          {techStack.map((tech, index) => (
            <div
              className="about-tech-card about-reveal-card"
              key={tech.name}
              data-reveal-item
              style={
                secondRowStarts[index]
                  ? { gridColumn: `${secondRowStarts[index]} / span 2` }
                  : undefined
              }
            >
              <img src={tech.src} alt={tech.name} loading="lazy" />
              <span>{tech.name}</span>
            </div>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
