# John Oliver — Portfolio

Minimal, calm, single-page personal portfolio built with React 18, TypeScript, and Vite. Deployed to GitHub Pages.

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server (with hot reload)
npm run dev

# 3. Production build (runs TypeScript check + Vite build)
npm run build

# 4. Preview the production build locally
npm run preview
```

## Project structure

```
src/
  data/content.ts         # ALL text, links, projects, skills — edit here
  types/content.ts        # TypeScript interfaces for the content
  hooks/useReveal.ts      # IntersectionObserver hook for fade-in on scroll
  components/             # One file per UI section
  styles/                 # global.css + one small stylesheet per component
  App.tsx, main.tsx
```

## Editing content

Open `src/data/content.ts`. Every piece of copy the site renders lives in the
`content` object at the top of that file:

```ts
export const content = {
  name: 'John Oliver',
  tagline: 'B.Tech CS student building practical AI and ML systems.',
  nav: [...],
  about: { heading: 'About', paragraphs: [...] },
  projects: { heading: 'Projects', items: [...] },
  skills: { heading: 'Skills', groups: [...] },
  contact: { heading: 'Contact', intro: '...', github: '...', ... },
  footer: { text: '© 2026 John Oliver' },
};
```

- **Projects**: edit the `items` array. Each project has `title`, `description`,
  `tags`, and `links` (label + href + external flag).
- **Contact**: the four URL fields (`github`, `linkedin`, `email`, `resume`)
  are the editable surface. Any value still beginning with `TODO_` is
  automatically hidden — the site never renders a dead link.
- **Skills**: plain grouped lists, no percentages or bars.

Run `npm run dev` and the page updates instantly.

## Deploying to GitHub Pages

The repository is configured to deploy on every push to `main` via the
`deploy.yml` workflow. The workflow:

1. Installs dependencies with `npm ci`
2. Runs `npm run build` (TypeScript check + Vite production build)
3. Uploads the `dist/` folder as a Pages artifact
4. Deploys to GitHub Pages

The only configuration you need is the **base path** in `vite.config.ts`:

```ts
const BASE_PATH = '/Portfolio/'; // ← change if you rename the repo
export default defineConfig({ base: BASE_PATH, ... });
```

If you serve from a custom domain or from the domain root, set `BASE_PATH = '/'`.

### First deploy

1. Push the repository to GitHub.
2. In the repository **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` (or merge a PR). The workflow runs and publishes the site.

## Design & tech notes

- **Zero accent colour** — pure neutral palette. Links and controls differ only
  by underline, weight, or a neutral border.
- **System theme only** — follows `prefers-color-scheme`; no toggle.
- **Typography**: Newsreader (headings) + Inter (body) via Google Fonts with
  `font-display: swap`.
- **Motion**: subtle fade-in + 10px upward translate on scroll via
  `IntersectionObserver`. Fully disabled under `prefers-reduced-motion: reduce`.
- **Single column**, max-width 680px, generous line height.
- **Dependencies**: only `react` and `react-dom` at runtime. No animation
  libraries, no UI kits, no Tailwind.
- **Accessibility**: semantic HTML, visible focus states, skip link, proper
  heading order, ARIA labels on icon-free links, sufficient contrast in both
  themes.

## Lighthouse targets

| Category | Target |
|----------|--------|
| Performance | ≥ 95 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 95 |
| SEO | ≥ 95 |

The build is configured to pass strict TypeScript (`noUnusedLocals`,
`noUnusedParameters`, `exactOptionalPropertyTypes`, `verbatimModuleSyntax`)
with zero errors and no console warnings.

## License

MIT — do whatever you want with it.