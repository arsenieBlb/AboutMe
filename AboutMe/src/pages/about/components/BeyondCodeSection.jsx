import { passionItems } from '../aboutContent';
import { ScrollRevealGroup } from './ScrollRevealGroup';
import chessPhoto from '../../../assets/chess.webp';

export function BeyondCodeSection() {
  return (
    <section className="about-why-section" id="why">
      <div className="about-why-inner">
        <div className="about-why-top">
          <div className="about-why-left">
            <span className="about-eyebrow">Beyond the Code</span>
            <h2>
              Logic meets
              <br />
              creativity
            </h2>
            <p>
              The two passions that have shaped the way I think are competitive chess
              and photography. Chess sharpens strategic thinking and foresight;
              photography trains composition and an eye for detail. Together they
              make me a more complete engineer - someone who builds things that work
              beautifully.
            </p>
          </div>

          <div className="about-chess-photo">
            <img src={chessPhoto} alt="Chess" loading="lazy" />
          </div>
        </div>

        <ScrollRevealGroup className="about-why-passions">
          {passionItems.map((item) => (
            <div className="about-passion-item about-reveal-card" key={item.number} data-reveal-item>
              <p className="about-passion-num">{item.number}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
