/**
 * Shared section wrapper with editorial header, section indexing, and scroll reveal.
 */

import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';
import '../styles/Section.css';

export interface SectionProps {
  /** Element id, target of anchor navigation. */
  readonly id: string;
  /** Section number index, e.g. "01". */
  readonly sectionNumber?: string | undefined;
  /** Visible heading text, rendered as the section's `<h2>`. */
  readonly heading: string;
  /** Optional editorial subheading / hook. */
  readonly subheading?: string | undefined;
  /** Section body. */
  readonly children: ReactNode;
  /** Optional custom class name. */
  readonly className?: string | undefined;
}

export default function Section({
  id,
  sectionNumber,
  heading,
  subheading,
  children,
  className = '',
}: SectionProps) {
  const revealRef = useReveal<HTMLElement>();

  return (
    <section id={id} className={`section ${className}`} ref={revealRef}>
      <div className="container">
        {(sectionNumber || heading) && (
          <header className="section__header">
            {sectionNumber && (
              <span className="section__number mono">
                {sectionNumber} /
              </span>
            )}
            <h2 className="section__heading">{heading}</h2>
            {subheading && <p className="section__subheading">{subheading}</p>}
          </header>
        )}
        <div className="section__body">{children}</div>
      </div>
    </section>
  );
}