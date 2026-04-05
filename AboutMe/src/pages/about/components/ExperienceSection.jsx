import { useEffect, useRef } from 'react';
import { experienceCards } from '../aboutContent';

export function ExperienceSection() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper) return undefined;

    const cards = Array.from(wrapper.querySelectorAll('.about-exp-card'));
    const dots = Array.from(wrapper.querySelectorAll('.about-exp-dot'));
    let current = 0;
    let exitTimeoutId = null;

    const showCard = (index) => {
      if (index === current) {
        return;
      }

      const previous = current;
      current = index;

      cards[previous].classList.remove('visible');
      cards[previous].classList.add('exit-up');

      if (exitTimeoutId !== null) {
        window.clearTimeout(exitTimeoutId);
      }

      exitTimeoutId = window.setTimeout(() => {
        cards[previous].classList.remove('exit-up');
        exitTimeoutId = null;
      }, 560);

      cards[current].classList.remove('exit-up');
      cards[current].classList.add('visible');
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle('active', dotIndex === current);
      });
    };

    const onScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const scrolledIn = -rect.top;
      const totalScrollable = wrapper.offsetHeight - window.innerHeight;

      if (scrolledIn <= 0 || scrolledIn >= totalScrollable) return;

      const progress = scrolledIn / totalScrollable;
      const targetIndex = Math.min(
        experienceCards.length - 1,
        Math.floor(progress * experienceCards.length),
      );
      showCard(targetIndex);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (exitTimeoutId !== null) {
        window.clearTimeout(exitTimeoutId);
      }
    };
  }, []);

  return (
    <section className="about-experience-section" id="experience">
      <div className="about-exp-scroll-wrapper" id="expScrollWrapper" ref={wrapperRef}>
        <div className="about-exp-sticky" id="expSticky">
          <div className="about-exp-left">
            <span className="about-eyebrow">IT Background</span>
            <h2>Experience</h2>
            <p>
              A track record of reliability, technical support, and project coordination
              - built across professional internships, academic environments, and
              personal initiative.
            </p>

            <div className="about-exp-dots" id="expDots">
              {experienceCards.map((card, index) => (
                <div
                  className={index === 0 ? 'about-exp-dot active' : 'about-exp-dot'}
                  key={card.number}
                />
              ))}
            </div>
          </div>

          <div className="about-exp-cards-viewport" id="expCards">
            {experienceCards.map((card, index) => (
              <article
                className={[
                  'about-exp-card',
                  card.tone,
                  index === 0 ? 'visible' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                data-index={index}
                key={card.number}
              >
                <div className="about-exp-card-top">
                  <span className="about-exp-num">{card.number}</span>
                </div>

                <div className="about-exp-card-bottom">
                  <p className="about-exp-company">{card.company}</p>
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
