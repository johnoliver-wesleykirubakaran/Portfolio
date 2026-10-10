/**
 * Type definitions for every piece of text, link, project and skill the site
 * renders. The only implementation of `SiteContent` lives in
 * `src/data/content.ts`; components consume these types and nothing else.
 */

/** An entry in the header's anchor navigation. */
export interface NavItem {
  /** Visible text, e.g. "Projects". */
  readonly label: string;
  /** Target element id including the leading `#`. */
  readonly href: string;
}

/** A link attached to a project, such as a repository or a live demo. */
export interface ProjectLink {
  /** Visible text, e.g. "GitHub" or "Demo". */
  readonly label: string;
  /**
   * Fully resolved URL. Links whose href is still a `TODO_` placeholder are
   * removed from the data before rendering and never reach the DOM.
   */
  readonly href: string;
  /** When true the link opens in a new tab with `rel="noopener noreferrer"`. */
  readonly external: boolean;
}

/** Project evaluation metric key-value pair. */
export interface ProjectMetric {
  readonly label: string;
  readonly value: string;
  readonly detail?: string;
}

/** Step in a multi-stage technical workflow. */
export interface PipelineStep {
  readonly id: string;
  readonly label: string;
  readonly sublabel: string;
  readonly description: string;
}

/** A single project, rendered with editorial hierarchy and technical evidence. */
export interface Project {
  readonly id: string;
  readonly title: string;
  readonly subtitle?: string;
  /** One-line or concise summary of what the project does. */
  readonly description: string;
  /** Detailed technical context or architectural notes. */
  readonly details?: readonly string[];
  /** Short neutral chips shown beneath the description. */
  readonly tags: readonly string[];
  /** May be empty when a project has no public links yet. */
  readonly links: readonly ProjectLink[];
  /** Verified performance/benchmark metrics. */
  readonly metrics?: readonly ProjectMetric[];
  /** Optional pipeline visualization stages. */
  readonly pipelineSteps?: readonly PipelineStep[];
  /** Flag to display as hero featured project showcase. */
  readonly featured?: boolean;
}

/** Technical focus interest item. */
export interface TechnicalInterest {
  readonly title: string;
  readonly description: string;
}

/** A named group of skills, rendered as a structured technical overview. */
export interface SkillGroup {
  readonly label: string;
  readonly items: readonly string[];
}

/** Identifies which editable contact field a link was built from. */
export type ContactKey = 'github' | 'linkedin' | 'email' | 'resume';

/** A contact link, already resolved to a renderable href. */
export interface ContactLink {
  /** Stable key identifying the field this link came from. */
  readonly key: ContactKey;
  /** Visible text, e.g. "Email". */
  readonly label: string;
  /** Absolute URL, or a `mailto:` URI for the email link. */
  readonly href: string;
  /** When true the link opens in a new tab. */
  readonly external: boolean;
  /** Accessible name, made more descriptive than the short visible label. */
  readonly ariaLabel: string;
}

/** About section: editorial hook, foundational paragraphs, and technical interests. */
export interface AboutContent {
  readonly sectionNumber: string;
  readonly heading: string;
  readonly hook: string;
  readonly paragraphs: readonly string[];
  readonly interests: readonly TechnicalInterest[];
}

/** Projects section: section number, heading, and items. */
export interface ProjectsContent {
  readonly sectionNumber: string;
  readonly heading: string;
  readonly intro: string;
  readonly items: readonly Project[];
}

/** Skills section: section number, heading, and grouped skill lists. */
export interface SkillsContent {
  readonly sectionNumber: string;
  readonly heading: string;
  readonly intro: string;
  readonly groups: readonly SkillGroup[];
}

/**
 * Contact section. The four URL fields are the editable surface for the owner:
 * any value still beginning with `TODO_` is dropped before rendering, so an
 * unfinished site never shows a dead link.
 */
export interface ContactContent {
  readonly sectionNumber: string;
  readonly heading: string;
  /** Short line introducing the links. */
  readonly intro: string;
  readonly location: string;
  readonly availability: string;
  readonly github: string;
  readonly linkedin: string;
  /** Bare email address. Prefixed with `mailto:` automatically. */
  readonly email: string;
  readonly resume: string;
}

/** Hero section content definition. */
export interface HeroContent {
  readonly eyebrow: string;
  readonly name: string;
  readonly description: string;
  readonly currentFocus: string;
  readonly primaryAction: {
    readonly label: string;
    readonly href: string;
  };
  readonly secondaryAction: {
    readonly label: string;
    readonly href: string;
    readonly external: boolean;
  };
}

/** Footer section. */
export interface FooterContent {
  readonly text: string;
  readonly colophon: string;
}

/** The complete shape of `src/data/content.ts`. */
export interface SiteContent {
  readonly name: string;
  readonly tagline: string;
  readonly hero: HeroContent;
  readonly nav: readonly NavItem[];
  readonly about: AboutContent;
  readonly projects: ProjectsContent;
  readonly skills: SkillsContent;
  readonly contact: ContactContent;
  readonly footer: FooterContent;
}