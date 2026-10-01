/**
 * Every piece of text, link, project and skill rendered by this site.
 *
 * This module is the single source of truth for content. Components never
 * contain inline copy and never derive copy of their own — they render what is
 * exported from here.
 *
 * TO EDIT THE SITE: change the values in the `content` object below. Nothing
 * else needs to be touched. Any URL that still starts with `TODO_` is treated as
 * unfinished and is hidden automatically (see `isPlaceholder`), so the site
 * always builds and never renders a dead link.
 */

import type {
  ContactKey,
  ContactLink,
  NavItem,
  Project,
  SiteContent,
} from '../types/content';

/** Prefix that marks a value the site owner has not filled in yet. */
export const PLACEHOLDER_PREFIX = 'TODO_';

export const content: SiteContent = {
  name: 'John Oliver',

  tagline: 'B.Tech CS student building practical AI and ML systems.',

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ],

  about: {
    heading: 'About',
    paragraphs: [
      "I'm a B.Tech Computer Science student at Karunya University, graduating in 2028.",
      'I am most interested in AI and ML, and in building practical technical projects rather than stopping at theory.',
      'Most of my work runs end to end — training and evaluation pipelines, retrieval systems, and the tooling around them.',
    ],
  },

  projects: {
    heading: 'Projects',
    items: [
      {
        title: 'Precision Pest Management',
        description:
          'Insect classification on the IP102 dataset using EfficientNet-B4, with training, evaluation, and inference pipelines and Grad-CAM explainability.',
        tags: ['PyTorch', 'EfficientNet-B4', 'Deep Learning', 'Grad-CAM'],
        links: [
          {
            label: 'GitHub',
            href: 'TODO_GITHUB_URL',
            external: true,
          },
          {
            label: 'Demo',
            href: 'TODO_DEMO_URL',
            external: true,
          },
        ],
      },
      {
        title: 'RAG Configurator',
        description:
          "Auto-tuner for RAG pipelines: upload documents and a small Q&A set, and it benchmarks combinations of chunking, hybrid search / HyDE, reranking, and repacking, then recommends the best recipe. Based on 'Searching for Best Practices in RAG'.",
        tags: ['RAG', 'Python', 'Evaluation', 'LLMs'],
        links: [
          {
            label: 'GitHub',
            href: 'TODO_GITHUB_URL',
            external: true,
          },
          {
            label: 'Demo',
            href: 'TODO_DEMO_URL',
            external: true,
          },
        ],
      },
    ],
  },

  skills: {
    heading: 'Skills',
    groups: [
      { label: 'Languages', items: ['Python', 'Java'] },
      { label: 'AI / ML', items: ['RAG', 'Generative AI'] },
    ],
  },

  contact: {
    heading: 'Contact',
    intro: 'The fastest way to reach me is email. Everything else is below.',
    github: 'TODO_GITHUB_URL',
    linkedin: 'TODO_LINKEDIN_URL',
    email: 'TODO_EMAIL',
    resume: 'TODO_RESUME_URL',
  },

  footer: {
    text: '© 2026 John Oliver',
  },
};

/**
 * True when `value` is still an unfilled `TODO_` placeholder.
 *
 * Unfinished values are dropped from the exported data rather than rendered,
 * so a half-filled site stays valid and never links nowhere.
 */
export function isPlaceholder(value: string): boolean {
  return value.trimStart().startsWith(PLACEHOLDER_PREFIX);
}

/** Header navigation, ready to render. */
export const navItems: readonly NavItem[] = content.nav;

/**
 * Projects with placeholder links removed.
 *
 * Projects themselves are never removed — only their unfilled links are — so
 * the projects section still describes the work while links are being filled in.
 */
export const projects: readonly Project[] = content.projects.items.map((project) => ({
  ...project,
  links: project.links.filter((link) => !isPlaceholder(link.href)),
}));

/**
 * Presentation rules for each contact field: whether it opens in a new tab and
 * whether the raw value needs a `mailto:` prefix. Kept here so that the Contact
 * component stays purely presentational.
 */
const CONTACT_LINK_SPECS: readonly {
  key: ContactKey;
  label: string;
  external: boolean;
  mailto: boolean;
}[] = [
  { key: 'github', label: 'GitHub', external: true, mailto: false },
  { key: 'linkedin', label: 'LinkedIn', external: true, mailto: false },
  { key: 'email', label: 'Email', external: false, mailto: true },
  { key: 'resume', label: 'Resume', external: true, mailto: false },
];

/**
 * Contact links, resolved and filtered.
 *
 * Fields still holding a `TODO_` placeholder are omitted entirely, which is why
 * this list can legitimately be empty on a freshly cloned site.
 */
export const contactLinks: readonly ContactLink[] = CONTACT_LINK_SPECS.flatMap((spec) => {
  const value = content.contact[spec.key];

  if (isPlaceholder(value)) {
    return [];
  }

  return [
    {
      key: spec.key,
      label: spec.label,
      href: spec.mailto ? `mailto:${value}` : value,
      external: spec.external,
      ariaLabel: spec.mailto
        ? `Email ${value}`
        : `${spec.label} — ${content.name}, opens in a new tab`,
    },
  ];
});