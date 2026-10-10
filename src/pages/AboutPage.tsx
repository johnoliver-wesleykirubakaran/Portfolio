/**
 * AboutPage: Wrapper for the editorial About section.
 */

import { useReveal } from '../hooks/useReveal';
import About from '../components/About';
import type { AboutContent } from '../types/content';
import '../styles/AboutPage.css';

export interface AboutPageProps {
  readonly about: AboutContent;
}

export default function AboutPage({ about }: AboutPageProps) {
  const revealRef = useReveal<HTMLElement>();

  return (
    <section id="about" className="about-page" ref={revealRef}>
      <div className="container">
        <About
          sectionNumber={about.sectionNumber}
          heading={about.heading}
          hook={about.hook}
          paragraphs={about.paragraphs}
          interests={about.interests}
        />
      </div>
    </section>
  );
}