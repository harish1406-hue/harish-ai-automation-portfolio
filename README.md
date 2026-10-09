# Harish Velayutham — AI & Automation Studio

Professional engineering portfolio focused on AI automation, workflow orchestration, RAG, and backend integrations. Based in Vilnius, Lithuania.

Live site: https://harish-ai-automation-portfolio.vercel.app/

## Design and interactions

- Photographic portrait at the center of an AI workflow canvas.
- A labeled, automatically looping client-side invoice workflow simulation with pause/resume controls. This is a demonstration of processing stages, not a live backend workflow.
- Visual-only portrait and workflow animations; no audio playback.
- Automatically animated workflow architecture previews and detailed project case studies. Animations pause outside the viewport, while the tab is hidden, or when reduced motion is requested.
- Experience, education, engineering capabilities, and downloadable résumé.
- Responsive layouts, reduced-motion support, keyboard-accessible case-study dialogs, SEO metadata, and Vercel Analytics.

## Development

Requires Node.js 20 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

```sh
npm run lint
npm run build
npm run start
```

The lint command performs TypeScript checking.

## Content and design

- `data/portfolio.ts`: project descriptions, architecture stages, and skills. Unverified provisional entries are excluded from display.
- `components/Portfolio.tsx`: experience, education, navigation, and project dialogs.
- `components/StudioHero.tsx`: portrait canvas and workflow simulation.
- `components/ProjectWorkflow.tsx`: compact project diagrams.
- `app/studio.css`: current site theme and responsive layout.
- `public/media/harish-studio-v2.png`: AI-edited photographic portrait from the supplied reference; transparent PNG.
- `public/Harish-Velayutham-Resume.pdf`: downloadable résumé.

## Deployment

This repository belongs to the existing `harish-ai-automation-portfolio` Vercel project. Publish production changes through its connected main branch or the authenticated Vercel CLI. Keep authentication files and environment files outside committed source; they are excluded by `.gitignore`.
