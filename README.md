# Zoth Assignment

A responsive token-sale landing page recreated from supplied design references.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- TanStack Query

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run lint
npm run build
```

## Implementation Decisions

- The page is split into reusable Header, Hero, Partner Carousel, Content, Countdown, and Footer components.
- Responsive Tailwind breakpoints support desktop, tablet, and mobile layouts.
- Partner logos use a continuous CSS marquee animation with reduced-motion support.
- Header dropdowns close when clicking outside or scrolling the page.
- Shared API data structures are defined with TypeScript.
- Sale data is provided through a Next.js App Router API route.

## Project Structure

- `app/` — routes, global styling, and API endpoint
- `components/` — reusable interface sections
- `hooks/` — data-fetching logic
- `providers/` — application providers
- `public/` — images and brand assets
- `types/` — shared TypeScript definitions

## Deployment

The live Vercel URL will be added after deployment.
