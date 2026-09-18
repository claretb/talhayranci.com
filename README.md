# talhayranci.com

Personal website for Talha Enes Ayranci, built with Astro, TypeScript and Tailwind CSS.

## Local development

Use Node.js 24 (an `.nvmrc` is included), then run:

```sh
npm ci
npm run dev
```

Useful checks:

```sh
npm run check
npm run build
npm run format:check
```

## Content

Blog posts live in `src/content/blog` and projects in `src/content/projects`. Each entry is validated by the schema in `src/content.config.ts`.

Personal details, experience, education and links are managed in `src/data/site.ts`.

## Deployment

Pushes to `master` are built and deployed to GitHub Pages through `.github/workflows/deploy.yml`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions** and keep `talhayranci.com` as the custom domain.
