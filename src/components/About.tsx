/**
 * About: a short prose block of two or three sentences.
 *
 * Receives ready-to-render paragraphs and does nothing beyond laying them out.
 */

import '../styles/About.css';

export interface AboutProps {
  /** Two or three short paragraphs. */
  paragraphs: readonly string[];
}

export default function About({ paragraphs }: AboutProps) {
  return (
    <div className="about">
      {paragraphs.map((paragraph, index) => (
        <p className="about__paragraph" key={`about-${index}`}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}