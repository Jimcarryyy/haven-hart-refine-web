# Haven & Hart — Luxury Real Estate Advisory

A flagship frontend portfolio project showcasing a complete, production-ready luxury real estate advisory website. Built as a single-page application with rich content, responsive design, and deploy-ready configuration.

## Overview

Haven & Hart is a fictional luxury real estate brokerage presented as a polished marketing site. The project demonstrates modern frontend engineering practices: typed data architecture, accessible UI, form validation, scroll-aware navigation, and Vercel deployment readiness.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [React 18](https://react.dev/) | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com/) | Accessible component primitives |
| [Framer Motion](https://www.framer.com/motion/) | Scroll animations |
| [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) | Form validation |
| [React Router](https://reactrouter.com/) | Client-side routing |

## Features

- **14 content sections** — Hero, Trust Bar, About, Stats, Portfolio (with filters), Services, Process, Markets, Team, Testimonials, FAQ, Insights, Contact, Footer
- **Responsive mobile navigation** — Sheet-based hamburger menu with active section highlighting
- **Typed data layer** — Content separated from presentation in `src/data/` and `src/types/`
- **Portfolio modals** — Filterable property grid with detailed specs, amenities, and advisor notes
- **Contact form** — Zod validation with optional Formspree integration
- **Legal pages** — Privacy Policy and Terms of Service at `/privacy` and `/terms`
- **SEO ready** — Meta tags, Open Graph, Twitter Cards, JSON-LD, sitemap, robots.txt
- **Accessibility** — Skip-to-content link, ARIA labels, reduced-motion support

## Architecture

```
src/
├── components/     # UI sections and shared components
├── data/           # Content modules (properties, team, services, etc.)
├── hooks/          # useActiveSection, use-mobile
├── lib/            # contact, icons, scroll utilities
├── pages/          # Index, Privacy, Terms, NotFound
└── types/          # TypeScript content interfaces
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080).

### Build

```bash
npm run build
npm run preview
```

### Contact Form (Optional)

1. Create a form at [Formspree](https://formspree.io)
2. Copy `.env.example` to `.env.local`
3. Set `VITE_FORMSPREE_ENDPOINT` to your form URL

Without configuration, the form runs in demo mode with client-side validation and a success toast.

## Deploy to Vercel

1. Push the repository to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Use default settings:
   - **Framework:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. (Optional) Add `VITE_FORMSPREE_ENDPOINT` in Environment Variables
5. Deploy

`vercel.json` includes SPA rewrites for client-side routing.

## Future Enhancements

- CMS integration (Sanity, Contentful)
- Internationalization (i18n)
- Analytics (Plausible, Vercel Analytics)
- Self-hosted image assets
- Blog with full article pages

## License

Private portfolio project. All rights reserved.

---

*Designed & built by [Jimcarry Omambak](https://github.com/Jimcarryyy)*
