import { useEffect, useRef } from 'react';

export function ScrollRevealGroup({ as: Tag = 'div', className = '', children }) {
  const groupRef = useRef(null);

  useEffect(() => {
    const root = groupRef.current;

    if (!root) {
      return undefined;
    }

    const items = Array.from(root.querySelectorAll('[data-reveal-item]'));

    if (!items.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          items.forEach((item, index) => {
            item.style.setProperty('--reveal-delay', `${index * 140}ms`);
            item.classList.add('is-visible');
          });

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    observer.observe(root);

    return () => observer.disconnect();
  }, []);

  return Tag === 'div' ? (
    <div ref={groupRef} className={className}>
      {children}
    </div>
  ) : (
    <Tag ref={groupRef} className={className}>
      {children}
    </Tag>
  );
}
