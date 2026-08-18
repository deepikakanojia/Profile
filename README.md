# Deepika Kanojia — Portfolio

Personal portfolio website for Deepika Kanojia — R&D Engineer, Instructional Designer, and Learning Technologist (M.Tech, Educational Technology, IIT Bombay).

Live site: https://deepikakanojia.github.io/Profile/

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for build tooling
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [Framer Motion](https://motion.dev/) for animation
- Deployed to [GitHub Pages](https://pages.github.com/) via GitHub Actions

## Development

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Editing content

All page content (bio, experience, research, projects, skills, contact info, etc.) lives in one place: [`src/data/content.ts`](src/data/content.ts). Edit that file to update the site — no need to touch the components.

## Deployment

Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes `dist/` to GitHub Pages.

**One-time setup (if not already done):** in the repo's Settings → Pages, set **Source** to "GitHub Actions".
