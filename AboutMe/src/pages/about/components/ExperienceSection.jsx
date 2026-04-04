import { experienceCards } from '../aboutContent';

export function ExperienceSection() {
  return (
    <section className="about-experience-section" id="experience">
      <div className="about-exp-inner">
        <div className="about-exp-left">
          <span className="about-eyebrow">IT Background</span>
          <h2>Experience</h2>
          <p>
            A track record of reliability, technical support, and project coordination
            - built across professional internships, academic environments, and
            personal initiative.
          </p>
        </div>

        <div className="about-exp-cards">
          {experienceCards.map((card) => {
            const className = [
              'about-exp-card',
              card.tone,
              card.isCurrent ? 'about-card-current' : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <article className={className} key={card.number}>
                <span className="about-exp-num">{card.number}</span>
                <p className="about-exp-company">{card.company}</p>
                {card.badge ? <span className="about-card-badge">{card.badge}</span> : null}
                <h3>{card.title}</h3>

                {card.points ? (
                  <ul>
                    {card.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="about-exp-desc">{card.description}</p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
