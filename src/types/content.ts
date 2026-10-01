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

/** A single project, rendered as one row of the stacked projects list. */
export interface Project {
  readonly title: string;
  /** One-line summary of what the project does. */
  readonly description: string;
  /** Short neutral chips shown beneath the description. */
  readonly tags: readonly string[];
  /** May be empty when a project has no public links yet. */
  readonly links: readonly ProjectLink[];
}

/** A named group of skills, rendered as a plain list. Never a bar or percentage. */
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

/** About section: a heading and two to three short paragraphs. */
export interface AboutContent {
  readonly heading: string;
  readonly paragraphs: readonly string[];
}

/** Projects section: a heading and the stacked list of projects. */
export interface ProjectsContent {
  readonly heading: string;
  readonly items: readonly Project[];
}

/** Skills section: a heading and the grouped skill lists. */
export interface SkillsContent {
  readonly heading: string;
  readonly groups: readonly SkillGroup[];
}

/**
 * Contact section. The four URL fields are the editable surface for the owner:
 * any value still beginning with `TODO_` is dropped before rendering, so an
 * unfinished site never shows a dead link.
 */
export interface ContactContent {
  readonly heading: string;
  /** Short line introducing the links. */
  readonly intro: string;
  readonly github: string;
  readonly linkedin: string;
  /** Bare email address. Prefixed with `mailto:` automatically. */
  readonly email: string;
  readonly resume: string;
}

/** Footer section. */
export interface FooterContent {
  readonly text: string;
}

/** The complete shape of `src/data/content.ts`. */
export interface SiteContent {
  readonly name: string;
  /** One-line intro shown directly under the name. */
  readonly tagline: string;
  readonly nav: readonly NavItem[];
  readonly about: AboutContent;
  readonly projects: ProjectsContent;
  readonly skills: SkillsContent;
  readonly contact: ContactContent;
  readonly footer: FooterContent;
}