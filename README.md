# Deepika Kanojia — Portfolio

Personal portfolio website for Deepika Kanojia — R&D Engineer, Instructional Designer, and Learning Technologist (M.Tech, Educational Technology, IIT Bombay).

Live site: https://deepikakanojia.github.io/Profile/

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/) (`HashRouter`) for multi-page navigation — hash-based routing needs no server config on GitHub Pages
- [Vite](https://vite.dev/) for build tooling
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [Framer Motion](https://motion.dev/) for animation and page transitions
- Deployed to [GitHub Pages](https://pages.github.com/) via GitHub Actions

## Development

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Site structure

Each nav item is its own route, rendered from [`src/pages/`](src/pages):

| Route | Page | Nav location |
|---|---|---|
| `/` | Home (hero + about) | Top-level |
| `/portfolio-and-work-experience` | Work experience timeline | Top-level |
| `/workshop-and-conferences` | Workshops & conferences | Top-level |
| `/hobbies` | Hobbies & interests | Top-level |
| `/contact-me` | Contact | Top-level |
| `/projects` | Projects | Under **Profile** dropdown |
| `/research` | Research & publications | Under **Profile** dropdown |
| `/position-of-responsibility` | Leadership roles | Under **Profile** dropdown |
| `/queries-about-m-tech-programme` | FAQ for prospective students | Under **Profile** dropdown |

Shared layout pieces live in [`src/components/`](src/components) — [`Navbar.tsx`](src/components/Navbar.tsx) (nav + the Profile dropdown), [`PageHero.tsx`](src/components/PageHero.tsx) (per-page banner), [`PageTransition.tsx`](src/components/PageTransition.tsx) (route-change animation), [`Background.tsx`](src/components/Background.tsx), and [`Footer.tsx`](src/components/Footer.tsx). Routes are wired up in [`src/App.tsx`](src/App.tsx).

To add or reorder nav items (including what's nested under Profile), edit the `nav` array in [`src/data/content.ts`](src/data/content.ts#L218).

## Editing content

All page content (bio, experience, research, projects, skills, contact info, etc.) lives in one place: [`src/data/content.ts`](src/data/content.ts). Edit that file to update the site — no need to touch the components.

## Deployment

Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes `dist/` to GitHub Pages.

**One-time setup (if not already done):** in the repo's Settings → Pages, set **Source** to "GitHub Actions".

> **Don't use the "GitHub Pages Jekyll" or "Static HTML" template cards** on that settings screen — they commit a second, competing workflow file straight to the repo. This project already has its own workflow ([`deploy.yml`](.github/workflows/deploy.yml)) built for a Vite/React app; only that one should run.
