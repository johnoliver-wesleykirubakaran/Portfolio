/**
 * Site header: the owner's name, active-section indication,
 * anchor-based navigation, external GitHub link, and responsive mobile navigation.
 */

import { useState, useEffect } from 'react';
import type { NavItem } from '../types/content';
import '../styles/Header.css';

export interface HeaderProps {
  /** Owner's name, rendered as the wordmark linking back to top. */
  readonly name: string;
  /** Navigation entries, in display order. */
  readonly items: readonly NavItem[];
  /** Optional GitHub URL */
  readonly githubUrl?: string;
}

export default function Header({
  name,
  items,
  githubUrl = 'https://github.com/johnoliver-wesleykirubakaran',
}: HeaderProps) {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Monitor scroll for subtle elevation change and active section tracking
  useEffect(() => {
    const sectionIds = ['hero', ...items.map((item) => item.href.replace(/^#/, ''))];

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const scrollPos = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        if (!id) continue;
        const elem = document.getElementById(id);
        if (elem && elem.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // Update hash cleanly without jump
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a
          className="header__name"
          href="#hero"
          onClick={(e) => scrollToSection(e, 'hero')}
          aria-label={`${name} — Back to top`}
        >
          <span className="header__name-text">{name}</span>
          <span className="header__name-dot" aria-hidden="true" />
        </a>

        {/* Desktop Navigation */}
        <nav className="header__nav" aria-label="Primary navigation">
          <ul className="header__list" role="list">
            {items.map((item) => {
              const sectionId = item.href.replace(/^#/, '');
              const isActive = activeSection === sectionId;
              return (
                <li key={item.href} className="header__item">
                  <a
                    className={`header__link ${isActive ? 'header__link--active' : ''}`}
                    href={`#${sectionId}`}
                    onClick={(e) => scrollToSection(e, sectionId)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="header__link-index mono" aria-hidden="true">
                      0{items.findIndex((i) => i.href === item.href) + 1}
                    </span>
                    <span className="header__link-label">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Header Actions (GitHub + Mobile Toggle) */}
        <div className="header__actions">
          {githubUrl && (
            <a
              className="header__github-link"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile (opens in new tab)"
            >
              <svg
                className="header__github-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              <span className="header__github-text">GitHub</span>
              <svg
                className="header__external-icon"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          )}

          <button
            type="button"
            className="header__toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            <span className={`header__toggle-bar ${mobileMenuOpen ? 'open' : ''}`} />
            <span className={`header__toggle-bar ${mobileMenuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-nav"
        className={`header__mobile-drawer ${mobileMenuOpen ? 'header__mobile-drawer--open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="container header__mobile-inner">
          <nav aria-label="Mobile navigation">
            <ul className="header__mobile-list" role="list">
              {items.map((item, idx) => {
                const sectionId = item.href.replace(/^#/, '');
                const isActive = activeSection === sectionId;
                return (
                  <li key={item.href} className="header__mobile-item">
                    <a
                      className={`header__mobile-link ${
                        isActive ? 'header__mobile-link--active' : ''
                      }`}
                      href={`#${sectionId}`}
                      onClick={(e) => scrollToSection(e, sectionId)}
                    >
                      <span className="header__mobile-index mono">0{idx + 1}</span>
                      <span className="header__mobile-label">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="header__mobile-footer">
            <a
              className="header__mobile-github"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub Profile</span>
              <span>↗</span>
            </a>
            <p className="header__mobile-tagline">
              Computer Science · Artificial Intelligence & Machine Learning
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}