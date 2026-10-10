/**
 * Hero component wrapper for backward compatibility.
 */

import HeroPage from '../pages/HeroPage';
import { content } from '../data/content';

export interface HeroProps {
  name?: string;
  tagline?: string;
}

export default function Hero(_props: HeroProps) {
  return <HeroPage hero={content.hero} />;
}