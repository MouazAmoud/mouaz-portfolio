# Mouaz Amoud Portfolio

One-page personal portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and `lucide-react`.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Production Build

Run the production build locally with:

```bash
npm run build
```

## Asset Placement

- Profile image: `public/profile.jpg`
- CV PDF: `public/Mouaz-Amoud-CV.pdf`

The UI includes a fallback avatar if `public/profile.jpg` is missing.

## Deploy to Vercel

1. Push the project to a Git repository.
2. Import the repository into Vercel.
3. Keep the default framework detection as `Next.js`.
4. Run the deployment. Vercel will use the `npm run build` command automatically.

No extra environment variables are required for this portfolio.
