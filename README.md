# Mouaz Amoud Portfolio

One-page personal portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and `lucide-react`. Every route is statically generated.

## Local Development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Checks

```bash
npx tsc --noEmit   # type check
npm run lint       # ESLint (next/core-web-vitals)
npm run build      # production build
```

## Editing Content

- `lib/site.ts`: name, site URL, headline, email, LinkedIn, GitHub, CV path. Metadata, robots, sitemap, and all contact links read from here.
- `lib/data.ts`: every section's content (experience, projects, skills, leadership, awards). Components only render this data.

Keep the content consistent with the downloadable CV.

## Assets

- Profile image: `public/profile.jpg`
- CV PDF: `public/Mouaz-Amoud-CV.pdf` (replace the file and keep the name so links stay valid)
- Icons: `app/favicon.ico`, `app/icon.png` (192px), `app/apple-icon.png` (180px)
- Social preview: `app/opengraph-image.png` and `app/twitter-image.png` (1200×630), with `.alt.txt` files for alt text
- Google Search Console verification: `public/googlefc7d8761fe5d5a9a.html`

## Design Notes

- Colour tokens live in `tailwind.config.ts`. `muted` and `violet` are the text-safe variants (WCAG AA). `purple` is reserved for borders and markers.
- The only motion is a CSS scroll-driven reveal (`.reveal` in `app/globals.css`). It runs only where `animation-timeline` is supported and the user has not requested reduced motion, so content is always visible without JavaScript.

## Deployment

Vercel deploys `main` automatically using its default Next.js settings. No environment variables are required.
