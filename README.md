# owais.io

Personal website of Owais Abbasi. Built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and TypeScript. Deployed on Vercel.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Editing content

All site content lives in `lib/data.ts`: profile, certifications, projects, skills, experience and education.
Static assets (photo, CV, certification badges) are in `public/`.

## Deploying

Import the repo on Vercel; it detects Next.js automatically. Then add `owais.io` under Project → Settings → Domains.
