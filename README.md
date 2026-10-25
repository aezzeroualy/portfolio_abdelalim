# Portfolio — Abdelalim

Personal portfolio built with **Astro**, **Tailwind CSS 4**, **GSAP (ScrollTrigger)** and **Lenis** smooth scroll.

## Commands

| Command           | Action                                  |
| ----------------- | --------------------------------------- |
| `npm install`     | Install dependencies                    |
| `npm run dev`     | Dev server at `http://localhost:4321`   |
| `npm run build`   | Production build to `./dist/`           |
| `npm run preview` | Preview the production build            |

## Customise

- **All content** (name, bio, skills, projects, experience, links): `src/data/portfolio.ts`
- **Colours & fonts**: `src/styles/global.css` (`@theme` and `:root` / `.dark`)
- **Animations**: `src/scripts/animations.ts`
- **CV**: add `public/cv.pdf`
- **Domain**: set `site` in `astro.config.mjs`

### Animation hooks (data attributes)

| Attribute            | Effect                                       |
| -------------------- | -------------------------------------------- |
| `data-split`         | Heading words slide up from a mask           |
| `data-reveal`        | Fade + rise when scrolled into view          |
| `data-counter="30"`  | Number counts up from 0                      |
| `data-parallax="0.2"`| Parallax on scroll                           |
| `data-magnetic`      | Element is pulled toward the cursor          |
| `data-tilt`          | 3D tilt + spotlight on hover                 |

All motion is disabled automatically when the visitor has `prefers-reduced-motion` enabled.

## Deploy

Push to GitHub, then import the repo on **Vercel**, **Netlify** or **Cloudflare Pages** (build: `npm run build`, output: `dist`).
