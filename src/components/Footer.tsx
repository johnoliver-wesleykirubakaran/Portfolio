/**
 * Footer: a small copyright line.
 */

import '../styles/Footer.css';

export interface FooterProps {
  text: string;
}

export default function Footer({ text }: FooterProps) {
  return (
    <footer className="footer">
      <p className="footer__text">{text}</p>
    </footer>
  );
}