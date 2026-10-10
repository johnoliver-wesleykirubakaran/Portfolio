/**
 * ContactPage: Clean editorial contact section with location, availability, and footer.
 */

import Section from '../components/Section';
import Contact from '../components/Contact';
import type { ContactLink } from '../types/content';
import '../styles/ContactPage.css';

export interface ContactPageProps {
  readonly heading?: string | undefined;
  readonly sectionNumber?: string | undefined;
  readonly intro: string;
  readonly links: readonly ContactLink[];
  readonly location?: string | undefined;
  readonly availability?: string | undefined;
  readonly footerText?: string | undefined;
  readonly colophon?: string | undefined;
}

export default function ContactPage({
  heading = "Let's build something useful.",
  sectionNumber = '04',
  intro,
  links,
  location,
  availability,
  footerText = '© 2026 John Oliver',
  colophon = 'B.Tech Computer Science · Artificial Intelligence & Machine Learning · Karunya University',
}: ContactPageProps) {
  return (
    <Section
      id="contact"
      sectionNumber={sectionNumber}
      heading={heading}
      className="contact-section"
    >
      <div className="contact-page">
        <Contact
          intro={intro}
          links={links}
          location={location}
          availability={availability}
        />

        <footer className="contact-page__footer">
          <div className="contact-page__footer-inner">
            <span className="contact-page__copyright mono">{footerText}</span>
            <span className="contact-page__colophon">{colophon}</span>
          </div>
        </footer>
      </div>
    </Section>
  );
}