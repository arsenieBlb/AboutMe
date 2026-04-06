import { useEffect, useMemo, useRef, useState } from 'react';
import {
  portfolioAccentMap,
  portfolioIllustrations,
  portfolioProjects,
  portfolioTagBorderMap,
} from '../portfolioContent';

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export function ProjectWheelSection() {
  const canvasRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [canvasSize, setCanvasSize] = useState({ width: 700, height: 700 });

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const updateSize = () => {
      const nextSize = {
        width: canvas.offsetWidth || 700,
        height: canvas.offsetHeight || 700,
      };

      setCanvasSize((currentSize) =>
        currentSize.width === nextSize.width && currentSize.height === nextSize.height
          ? currentSize
          : nextSize,
      );
    };

    updateSize();

    const observer =
      typeof ResizeObserver !== 'undefined' ? new ResizeObserver(updateSize) : null;

    observer?.observe(canvas);
    window.addEventListener('resize', updateSize);

    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  const wheel = useMemo(() => {
    const { width, height } = canvasSize;
    const compact = width < 440;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = compact ? 140 : 252;
    const nodeSize = compact ? 84 : 144;
    const infoWidth = 264;
    const infoHeight = 210;
    const gap = 10;

    const nodes = portfolioProjects.map((project, index) => {
      const angle = (index / portfolioProjects.length) * 2 * Math.PI - Math.PI / 2;
      const nodeX = centerX + radius * Math.cos(angle);
      const nodeY = centerY + radius * Math.sin(angle);

      let cardLeft;
      if (nodeX > centerX + 30) {
        cardLeft = nodeX + nodeSize / 2 + gap;
      } else if (nodeX < centerX - 30) {
        cardLeft = nodeX - nodeSize / 2 - gap - infoWidth;
      } else {
        cardLeft = nodeX - infoWidth / 2;
      }

      let cardTop;
      if (nodeY < centerY - 30) {
        cardTop = nodeY - nodeSize / 2;
      } else if (nodeY > centerY + 30) {
        cardTop = nodeY + nodeSize / 2 - infoHeight;
      } else {
        cardTop = nodeY - infoHeight / 2;
      }

      return {
        project,
        index,
        angleDegrees: (index / portfolioProjects.length) * 360 - 90,
        nodeLeft: nodeX - nodeSize / 2,
        nodeTop: nodeY - nodeSize / 2,
        nodeSize,
        infoLeft: clamp(cardLeft, 4, width - infoWidth - 4),
        infoTop: clamp(cardTop, 4, height - infoHeight - 4),
      };
    });

    return { compact, radius, nodes };
  }, [canvasSize]);

  return (
    <section className="portfolio-wheel-section" id="projects">
      <div className="portfolio-wheel-glow" aria-hidden="true" />
      <p className="portfolio-section-eyebrow">Engineering Work</p>
      <h2 className="portfolio-section-title">
        Featured <em>Projects</em>
      </h2>

      <div className="portfolio-wheel-canvas" id="wheelCanvas" ref={canvasRef}>
        <div className="portfolio-deco-ring outer" aria-hidden="true" />
        <div className="portfolio-deco-ring mid" aria-hidden="true" />
        <div className="portfolio-deco-ring inner" aria-hidden="true" />

        {wheel.nodes.map((node) => (
          <div
            className="portfolio-spoke"
            key={`spoke-${node.project.num}`}
            style={{
              height: `${wheel.radius}px`,
              transform: `rotate(${node.angleDegrees}deg) translateX(-0.5px)`,
            }}
          />
        ))}

        <div className={activeIndex !== null ? 'portfolio-hub lit' : 'portfolio-hub'}>
          <span className="portfolio-hub-label">Hover</span>
          <span className="portfolio-hub-num">
            {activeIndex !== null ? portfolioProjects[activeIndex].num : '—'}
          </span>
        </div>

        {wheel.nodes.map((node) => (
          <div key={node.project.num}>
            <button
              className="portfolio-proj-node"
              data-color={node.project.color}
              type="button"
              style={{
                left: `${node.nodeLeft}px`,
                top: `${node.nodeTop}px`,
                width: `${node.nodeSize}px`,
                height: `${node.nodeSize}px`,
              }}
              onMouseEnter={() => setActiveIndex(node.index)}
              onMouseLeave={() => setActiveIndex((current) => (current === node.index ? null : current))}
              onFocus={() => setActiveIndex(node.index)}
              onBlur={() => setActiveIndex((current) => (current === node.index ? null : current))}
              aria-label={node.project.title}
            >
              <div className="portfolio-node-bg">
                <div
                  className="portfolio-node-illustration"
                  dangerouslySetInnerHTML={{ __html: portfolioIllustrations[node.project.color] }}
                />
                <span className="portfolio-node-label">{node.project.abbr}</span>
              </div>
            </button>

            <div
              className={activeIndex === node.index ? 'portfolio-info-card visible' : 'portfolio-info-card'}
              style={{ left: `${node.infoLeft}px`, top: `${node.infoTop}px` }}
            >
              <div className="portfolio-card-header">
                <span className="portfolio-card-num">
                  {node.project.num} / 0{portfolioProjects.length}
                </span>
                <span className="portfolio-card-year">{node.project.year}</span>
              </div>
              <div
                className="portfolio-card-accent"
                style={{ background: portfolioAccentMap[node.project.color] }}
              />
              <div className="portfolio-card-title">{node.project.title}</div>
              <div className="portfolio-card-desc">{node.project.description}</div>
              <div className="portfolio-card-tags">
                {node.project.tags.map((tag) => (
                  <span
                    className="portfolio-card-tag"
                    key={`${node.project.num}-${tag}`}
                    style={{
                      borderColor: portfolioTagBorderMap[node.project.color],
                      color: portfolioAccentMap[node.project.color],
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
