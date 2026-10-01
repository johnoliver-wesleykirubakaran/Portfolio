/**
 * Site header: the owner's name and the anchor navigation.
 *
 * Purely presentational — it receives its name and navigation items as props
 * and contains no copy or navigation logic of its own.
 */

import type { NavItem } from '../types/content';
import '../styles/Header.css';

export interface HeaderProps {
  /** Owner's name, rendered as the wordmark linking back to the top. */
  name: string;
  /** Anchor navigation entries, in display order. */
  items: readonly NavItem[];
}

export default function Header({ name, items }: HeaderProps) {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__name" href="#top">
          {name}
        </a>

        <nav className="header__nav" aria-label="Section navigation">
          <ul className="header__list" role="list">
            {items.map((item) => (
              <li key={item.href}>
                <a className="header__link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}