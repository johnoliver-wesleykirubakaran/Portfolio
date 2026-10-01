/**
 * Shared section wrapper.
 *
 * Provides the consistent structure every section needs: a semantic
 * `<section>` with a stable anchor id, the centred container, the `<h2>`
 * heading, and the fade-in-on-scroll behaviour driven by `useReveal`.
 *
 * The wrapper owns presentation and reveal only. It performs no logic and
 * renders no copy of its own.
 */

import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';
import '../styles/Section.css';

export interface SectionProps {
  /** Element id, which is also the target of the header's anchor link. */
  id: string;
  /** Visible heading text, rendered as the section's `<h2>`. */
  heading: string;
  /** Section body, supplied by the calling component. */
  children: ReactNode;
}

export default function Section({ id, heading, children }: SectionProps) {
  const revealRef = useReveal<HTMLElement>();

  return (
    <section id={id} className="section" ref={revealRef}>
      <div className="container">
        <h2 className="section__heading">{heading}</h2>
        {children}
      </div>
    </section>
  );
}