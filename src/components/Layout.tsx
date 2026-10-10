/**
 * Root layout: persistent Header overlaid on top of natural fluid editorial sections.
 */

import type { PropsWithChildren } from 'react';
import Header from './Header';
import { navItems, content } from '../data/content';
import '../styles/Layout.css';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="layout">
      <a className="skip-link" href="#hero">
        Skip to content
      </a>

      <Header name={content.name} items={navItems} />

      <main id="main" className="layout__main">
        {children}
      </main>
    </div>
  );
}