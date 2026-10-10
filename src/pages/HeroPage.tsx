/**
 * HeroPage: Editorial opening viewport for John Oliver.
 * Features typography hierarchy, restrained generative coordinate canvas,
 * verified eyebrow, supporting description, understated interactive links,
 * and current focus indicator.
 */

import { useReveal } from '../hooks/useReveal';
import TechnicalCanvas from '../components/TechnicalCanvas';
import type { HeroContent } from '../types/content';
import '../styles/HeroPage.css';

export interface HeroPageProps {
  readonly hero: HeroContent;
}

export default function HeroPage({ hero }: HeroPageProps) {
  const revealRef = useReveal<HTMLElement>();

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById('projects');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#projects');
    }
  };

  return (
    <section id="hero" className="hero-page" ref={revealRef}>
      {/* Background technical generative lattice */}
      <TechnicalCanvas />

      <div className="container hero-page__container">
        <div className="hero-page__content">
          {/* Eyebrow */}
          <div className="hero-page__eyebrow-wrapper">
            <span className="hero-page__eyebrow mono">{hero.eyebrow}</span>
            <span className="hero-page__eyebrow-line" aria-hidden="true" />
          </div>

          {/* Main Heading */}
          <h1 className="hero-page__name">
            {hero.name}
          </h1>

          {/* Supporting Description */}
          <p className="hero-page__description">
            {hero.description}
          </p>

          {/* Understated Interactive Action Links */}
          <div className="hero-page__actions">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="hero-page__action-primary"
            >
              <span>{hero.primaryAction.label}</span>
              <svg
                className="hero-page__action-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href={hero.secondaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-page__action-secondary"
              aria-label={`${hero.secondaryAction.label} profile (opens in new tab)`}
            >
              <span>{hero.secondaryAction.label}</span>
              <svg
                className="hero-page__action-icon"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>

          {/* Current Focus Line with pulsing status dot */}
          <div className="hero-page__focus">
            <span className="hero-page__focus-indicator" aria-hidden="true">
              <span className="hero-page__focus-dot" />
              <span className="hero-page__focus-pulse" />
            </span>
            <span className="hero-page__focus-text">
              {hero.currentFocus}
            </span>
          </div>
        </div>

        {/* Editorial side metadata / status block */}
        <div className="hero-page__sidebar" aria-hidden="true">
          <div className="hero-page__meta-item">
            <span className="hero-page__meta-label mono">AFFILIATION</span>
            <span className="hero-page__meta-value">Karunya University</span>
          </div>
          <div className="hero-page__meta-item">
            <span className="hero-page__meta-label mono">GRADUATION</span>
            <span className="hero-page__meta-value">Class of 2028</span>
          </div>
          <div className="hero-page__meta-item">
            <span className="hero-page__meta-label mono">SPECIALIZATION</span>
            <span className="hero-page__meta-value">AI / Machine Learning</span>
          </div>
        </div>
      </div>

      {/* Understated scroll cue */}
      <div className="hero-page__footer container">
        <a
          href="#about"
          className="hero-page__scroll-link mono"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Scroll to About section"
        >
          <span className="hero-page__scroll-arrow">↓</span>
          <span>EXPLORE INDEX</span>
        </a>
      </div>
    </section>
  );
}