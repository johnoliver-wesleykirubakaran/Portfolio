/**
 * Reveals a single element with a one-time fade-in and a slight upward
 * translate when it first enters the viewport.
 *
 * The hook marks the element with `data-reveal` as soon as it mounts, and sets
 * `data-revealed="true"` once the element becomes visible. The actual motion
 * lives in CSS (`src/styles/global.css`) so that it can be disabled wholesale
 * under `prefers-reduced-motion: reduce`.
 *
 * The observer disconnects after the first reveal: sections fade in once and
 * then stay put, which keeps scrolling calm and avoids unnecessary work.
 */

import { useEffect, useRef, type RefObject } from 'react';

/** Attribute flipped to `'true'` once the element has been revealed. */
const REVEALED_ATTRIBUTE = 'data-revealed';

/** Attribute marking an element as participating in the reveal behaviour. */
export const REVEAL_ATTRIBUTE = 'data-reveal';

export interface UseRevealOptions {
  /**
   * Fraction of the element that must be inside the viewport before it is
   * revealed. Defaults to `0.15`, so a tall section reveals as soon as it is
   * meaningfully on screen rather than at the very first pixel.
   */
  readonly threshold?: number;
  /**
   * Margin applied to the root viewport before intersection is calculated. The
   * default pulls the trigger line slightly above the bottom edge so an element
   * has entered the screen before it starts to move.
   */
  readonly rootMargin?: string;
}

/**
 * Returns a ref to attach to the element that should be revealed on scroll.
 *
 * When the user prefers reduced motion — or when `IntersectionObserver` is not
 * available, as in very old browsers — the element is marked revealed
 * immediately and no animation is applied.
 *
 * @param options Optional threshold and root margin overrides.
 * @returns A ref to spread onto the target element.
 */
export function useReveal<T extends Element = HTMLElement>(
  options: UseRevealOptions = {},
): RefObject<T> {
  const { threshold = 0.15, rootMargin = '0px 0px -10% 0px' } = options;
  const ref = useRef<T>(null!);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    element.setAttribute(REVEAL_ATTRIBUTE, '');

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      element.setAttribute(REVEALED_ATTRIBUTE, 'true');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          entry.target.setAttribute(REVEALED_ATTRIBUTE, 'true');
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return ref;
}