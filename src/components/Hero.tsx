/**
 * Hero: the owner's name and a single line of context.
 *
 * Opens the page and carries the document's only `<h1>`. Also owns the `#top`
 * anchor that the header wordmark links back to.
 */

import { useReveal } from '../hooks/useReveal';
import '../styles/Hero.css';

export interface HeroProps {
  /** Owner's name, rendered as the `<h1>` in the warm serif face. */
  name: string;
  /** One-line intro shown directly beneath the name. */
  tagline: string;
}

export default function Hero({ name, tagline }: HeroProps) {
  const revealRef = useReveal<HTMLElement>();

  return (
    <section id="top" className="hero" ref={revealRef}>
      <div className="container">
        <h1 className="hero__name">{name}</h1>
        <p className="hero__tagline">{tagline}</p>
      </div>
    </section>
  );
}