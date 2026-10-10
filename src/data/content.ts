/**
 * Every piece of text, link, project and skill rendered by this site.
 *
 * This module is the single source of truth for content. Components never
 * contain inline copy and never derive copy of their own — they render what is
 * exported from here.
 *
 * TO EDIT THE SITE: change the values in the `content` object below.
 * Any URL that still starts with `TODO_` is treated as a placeholder and
 * handled gracefully so the site always builds cleanly.
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

  hero: {
    eyebrow: 'COMPUTER SCIENCE · AI / ML',
    name: 'John Oliver.',
    description:
      'I build practical AI systems, from computer vision models to intelligent retrieval pipelines.',
    currentFocus:
      'Currently exploring: Computer Vision, RAG, and Generative AI.',
    primaryAction: {
      label: 'Explore My Work',
      href: '#projects',
    },
    secondaryAction: {
      label: 'GitHub',
      href: 'https://github.com/johnoliver-wesleykirubakaran',
      external: true,
    },
  },

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ],

  about: {
    sectionNumber: '01',
    heading: 'About',
    hook: 'Taking machine learning ideas beyond experimental notebooks into verifiable, real-world systems.',
    paragraphs: [
      "I'm a Computer Science student at Karunya University, graduating in 2028, with a growing focus on Artificial Intelligence and Machine Learning.",
      'I enjoy taking ideas beyond experiments and turning them into working systems. My projects have involved computer vision, retrieval-augmented generation, model evaluation, and the tooling required to bring these components together.',
      "I'm particularly interested in understanding how these systems work, measuring their performance, and making them useful in practice.",
    ],
    interests: [
      {
        title: 'Computer Vision',
        description:
          'Deep convolutional backbones, fine-grained multi-class classification, and Grad-CAM interpretability.',
      },
      {
        title: 'Retrieval Systems',
        description:
          'Dense vector retrieval, sparse indexing, hybrid query expansion (HyDE), and cross-encoder rerankers.',
      },
      {
        title: 'Generative AI',
        description:
          'Context packing, prompt pipeline optimization, and rigorous evaluation benchmarks for language models.',
      },
      {
        title: 'Machine Learning Engineering',
        description:
          'End-to-end pipelines spanning dataset curation, reproducibility, metric logging, and low-latency inference.',
      },
    ],
  },

  projects: {
    sectionNumber: '02',
    heading: 'Projects',
    intro:
      'Architected and implemented systems focusing on model explainability, retrieval quality, and quantitative evaluation.',
    items: [
      {
        id: 'precision-pest-management',
        title: 'Precision Pest Management',
        subtitle: 'Fine-Grained Classification & Explainable AI',
        description:
          'An insect classification system using the IP102 dataset and EfficientNet-B4, with training, evaluation, inference, and Grad-CAM explainability.',
        details: [
          'Evaluated across 102 pest classes from the challenging IP102 benchmark under high visual similarity.',
          'Integrated Grad-CAM gradient-weighted activation maps to visually inspect and verify feature attribution.',
          'Implemented end-to-end PyTorch pipelines encompassing data augmentation, checkpointing, and inference.',
        ],
        tags: ['PyTorch', 'EfficientNet-B4', 'Deep Learning', 'Grad-CAM', 'torchvision'],
        featured: true,
        metrics: [
          { label: 'Pest Classes', value: '102', detail: 'IP102 benchmark taxonomy' },
          { label: 'Test Accuracy', value: '71.20%', detail: 'Evaluated on held-out test split' },
          { label: 'Test Precision', value: '71.42%', detail: 'Macro-averaged precision' },
          { label: 'Test Recall', value: '71.20%', detail: 'Macro-averaged recall' },
          { label: 'Test F1 Score', value: '70.94%', detail: 'Harmonic mean of precision & recall' },
        ],
        links: [
          {
            label: 'GitHub',
            href: 'https://github.com/johnoliver-wesleykirubakaran',
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
        id: 'rag-configurator',
        title: 'RAG Configurator',
        subtitle: 'Retrieval-Augmented Generation Evaluation Framework',
        description:
          'An evaluation tool for comparing RAG pipeline configurations, including chunking strategies, hybrid search, HyDE, reranking, and repacking.',
        details: [
          "Systematically benchmarks pipeline variations to identify optimal retrieval setups for specific domain corpora.",
          'Applies principles from empirical research (e.g. "Searching for Best Practices in RAG") to evaluate trade-offs.',
          'Quantifies retrieval performance with Hit-Rate, MRR, latency, and context density metrics.',
        ],
        tags: ['Python', 'RAG', 'Retrieval Evaluation', 'LLMs', 'FastAPI'],
        featured: false,
        pipelineSteps: [
          {
            id: 'doc',
            label: '01. Ingestion',
            sublabel: 'Documents',
            description: 'Multi-format document parsing with structural hierarchy and metadata extraction.',
          },
          {
            id: 'chunk',
            label: '02. Chunking',
            sublabel: 'Token Partition',
            description: 'Comparison of fixed-window, sentence-boundary, and recursive semantic splitting.',
          },
          {
            id: 'retrieve',
            label: '03. Retrieval',
            sublabel: 'Hybrid Search',
            description: 'Dense vector embeddings coupled with BM25 sparse keyword matching and HyDE queries.',
          },
          {
            id: 'rerank',
            label: '04. Reranking',
            sublabel: 'Cross-Encoder',
            description: 'Deep relevance scoring and contextual repacking to eliminate noise before LLM context.',
          },
          {
            id: 'eval',
            label: '05. Evaluation',
            sublabel: 'Quantitative Metrics',
            description: 'Systematic benchmarking across Hit-Rate@K, Mean Reciprocal Rank, and retrieval latency.',
          },
        ],
        links: [
          {
            label: 'GitHub',
            href: 'https://github.com/johnoliver-wesleykirubakaran',
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
    sectionNumber: '03',
    heading: 'Skills',
    intro:
      'A structured technical foundation developed through hands-on coursework, research projects, and systems engineering.',
    groups: [
      {
        label: 'PROGRAMMING LANGUAGES',
        items: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'SQL'],
      },
      {
        label: 'MACHINE LEARNING',
        items: ['PyTorch', 'torchvision', 'EfficientNet', 'Grad-CAM'],
      },
      {
        label: 'AI SYSTEMS',
        items: ['RAG', 'Retrieval Systems', 'Generative AI', 'LLMs'],
      },
      {
        label: 'WEB DEVELOPMENT',
        items: [
          'HTML',
          'CSS',
          'JavaScript',
          'React',
          'Next.js',
          'TypeScript',
          'Tailwind CSS',
        ],
      },
      {
        label: 'BACKEND AND DATABASES',
        items: ['FastAPI', 'MySQL', 'SQLite'],
      },
      {
        label: 'TOOLS AND ENVIRONMENTS',
        items: ['Git', 'GitHub', 'Docker', 'Linux'],
      },
    ],
  },

  contact: {
    sectionNumber: '04',
    heading: "Let's build something useful.",
    intro:
      "I'm interested in AI/ML projects, technical collaborations, and opportunities to learn by building.",
    location: 'Karunya University · Tamil Nadu, India',
    availability: 'Open to AI/ML discussions, collaborations & research opportunities',
    github: 'https://github.com/johnoliver-wesleykirubakaran',
    linkedin: 'TODO_LINKEDIN_URL',
    email: 'TODO_EMAIL',
    resume: 'TODO_RESUME_URL',
  },

  footer: {
    text: '© 2026 John Oliver',
    colophon: 'B.Tech Computer Science · Artificial Intelligence & Machine Learning',
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
 * whether the raw value needs a `mailto:` prefix.
 */
const CONTACT_LINK_SPECS: readonly {
  key: ContactKey;
  label: string;
  external: boolean;
  mailto: boolean;
}[] = [
  { key: 'email', label: 'Email', external: false, mailto: true },
  { key: 'github', label: 'GitHub', external: true, mailto: false },
  { key: 'linkedin', label: 'LinkedIn', external: true, mailto: false },
  { key: 'resume', label: 'Resume', external: true, mailto: false },
];

/**
 * Contact links, resolved and filtered.
 *
 * Fields still holding a `TODO_` placeholder are omitted from direct external click
 * or clearly marked as configurable.
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