/**
 * About Component: Editorial two-column composition with foundational background,
 * academic context at Karunya University, and compact list of current technical interests.
 */

import type { TechnicalInterest } from '../types/content';
import '../styles/About.css';

export interface AboutProps {
  /** Section number index, e.g. "01" */
  readonly sectionNumber?: string | undefined;
  /** Section heading */
  readonly heading?: string | undefined;
  /** Editorial intro hook */
  readonly hook?: string | undefined;
  /** Foundation paragraphs */
  readonly paragraphs: readonly string[];
  /** Compact technical focus areas */
  readonly interests?: readonly TechnicalInterest[] | undefined;
}

export default function About({
  sectionNumber = '01',
  heading = 'About',
  hook = 'Taking ideas beyond experiments and turning them into working systems.',
  paragraphs,
  interests = [],
}: AboutProps) {
  return (
    <div className="about">
      {/* Left Column: Heading, section number, and editorial hook */}
      <div className="about__left">
        <div className="about__header">
          <span className="about__number mono">{sectionNumber} / ABOUT</span>
          <h2 className="about__heading">{heading}</h2>
          <p className="about__hook">{hook}</p>
        </div>

        <div className="about__badge">
          <div className="about__badge-item">
            <span className="about__badge-label mono">INSTITUTION</span>
            <span className="about__badge-val">Karunya University</span>
          </div>
          <div className="about__badge-item">
            <span className="about__badge-label mono">DEGREE</span>
            <span className="about__badge-val">B.Tech Computer Science (2024–2028)</span>
          </div>
          <div className="about__badge-item">
            <span className="about__badge-label mono">SPECIALIZATION</span>
            <span className="about__badge-val">Artificial Intelligence & ML</span>
          </div>
        </div>
      </div>

      {/* Right Column: Narrative paragraphs & Current technical interests */}
      <div className="about__right">
        <div className="about__prose">
          {paragraphs.map((paragraph, index) => (
            <p className="about__paragraph" key={`about-p-${index}`}>
              {paragraph}
            </p>
          ))}
        </div>

        {interests.length > 0 && (
          <div className="about__interests">
            <h3 className="about__interests-title mono">CURRENT TECHNICAL INTERESTS</h3>
            <div className="about__interests-grid">
              {interests.map((interest) => (
                <div key={interest.title} className="about__interest-card">
                  <div className="about__interest-header">
                    <span className="about__interest-dot" aria-hidden="true" />
                    <h4 className="about__interest-name">{interest.title}</h4>
                  </div>
                  <p className="about__interest-desc">{interest.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}