/**
 * Contact: a short intro line and a list of external links.
 *
 * Links are pre-resolved (mailto: prefix added, placeholders removed) before
 * they reach this component.
 */

import type { ContactLink } from '../types/content';
import '../styles/Contact.css';

export interface ContactProps {
  intro: string;
  links: readonly ContactLink[];
}

export default function Contact({ intro, links }: ContactProps) {
  return (
    <div className="contact">
      <p className="contact__intro">{intro}</p>

      {links.length > 0 && (
        <nav className="contact__links" aria-label="Contact links">
          {links.map((link) => (
            <a
              key={link.key}
              className="contact__link"
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              aria-label={link.ariaLabel}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}