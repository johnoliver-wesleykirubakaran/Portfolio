/**
 * Contact Component: Clean, accessible editorial contact section.
 * Provides direct actions for Email, GitHub, and LinkedIn with keyboard accessibility
 * and security attributes.
 */

import { useState } from 'react';
import type { ContactLink } from '../types/content';
import { content } from '../data/content';
import '../styles/Contact.css';

export interface ContactProps {
  readonly intro: string;
  readonly links: readonly ContactLink[];
  readonly location?: string | undefined;
  readonly availability?: string | undefined;
}

export default function Contact({
  intro,
  links,
  location = 'Karunya University · Tamil Nadu, India',
  availability = 'Open to AI/ML collaborations, research discussions & engineering opportunities.',
}: ContactProps) {
  const [copied, setCopied] = useState<boolean>(false);

  const rawEmail = content.contact.email;
  const isEmailConfigured = !rawEmail.startsWith('TODO_');

  const handleCopyEmail = () => {
    if (isEmailConfigured) {
      navigator.clipboard.writeText(rawEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-card__main">
          <p className="contact-card__intro">{intro}</p>

          <div className="contact-card__channels" aria-label="Direct contact channels">
            {/* If email is configured or placeholder */}
            <div className="contact-card__channel-box">
              <span className="contact-card__channel-k mono">EMAIL</span>
              {isEmailConfigured ? (
                <div className="contact-card__email-actions">
                  <a
                    href={`mailto:${rawEmail}`}
                    className="contact-card__channel-link"
                    aria-label={`Email ${rawEmail}`}
                  >
                    {rawEmail}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="contact-card__copy-btn mono"
                    aria-label="Copy email address"
                  >
                    {copied ? 'Copied ✓' : 'Copy'}
                  </button>
                </div>
              ) : (
                <div className="contact-card__placeholder-notice">
                  <span className="mono contact-card__placeholder-tag">Configurable in src/data/content.ts</span>
                  <p className="contact-card__placeholder-sub">
                    Set `email: 'your.email@example.com'` in content.ts to enable direct mailto.
                  </p>
                </div>
              )}
            </div>

            {/* Resolved Active Links (GitHub, LinkedIn, Resume) */}
            <div className="contact-card__channel-box">
              <span className="contact-card__channel-k mono">NETWORKS & PROFILES</span>
              <div className="contact-card__links-row">
                {links.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="contact-card__network-link"
                    aria-label={link.ariaLabel}
                  >
                    <span>{link.label}</span>
                    <svg
                      className="contact-card__network-arrow"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                ))}

                {/* Always provide GitHub if not in links array */}
                {!links.some((l) => l.key === 'github') && (
                  <a
                    href="https://github.com/johnoliver-wesleykirubakaran"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card__network-link"
                    aria-label="GitHub — John Oliver, opens in a new tab"
                  >
                    <span>GitHub</span>
                    <svg
                      className="contact-card__network-arrow"
                      width="13"
                      height="13"
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
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="contact-card__meta">
          <div className="contact-card__meta-item">
            <span className="contact-card__meta-k mono">LOCATION</span>
            <span className="contact-card__meta-v">{location}</span>
          </div>
          <div className="contact-card__meta-item">
            <span className="contact-card__meta-k mono">AVAILABILITY</span>
            <span className="contact-card__meta-v">{availability}</span>
          </div>
        </div>
      </div>
    </div>
  );
}