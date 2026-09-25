# Mohd Suhel — Portfolio

Personal portfolio website of **Mohd Suhel**, a Full Stack Developer from Lucknow, India.

**Live:** [https://mohdsuhel.suhel-f75.workers.dev/](https://mohdsuhel.suhel-f75.workers.dev/)

## About

Software developer working across the stack — React.js, Next.js, and React Native on the front end; Node.js, Express, and MongoDB behind it. Currently an Associate Software Engineer at Jamtech Technologies Pvt Ltd, with growing expertise in AI-integrated development.

- 📧 [mohdsuhel.dev@gmail.com](mailto:mohdsuhel.dev@gmail.com)
- 💻 [github.com/suheldevs](https://github.com/suheldevs)
- 🔗 [linkedin.com/in/mohdsuhel](https://www.linkedin.com/in/mohdsuhel)

## Features

- **100vh app-style layout** — sidebar profile card + tabbed content panel with internal scrolling on desktop, natural flow on mobile
- **Light/dark theme** with a toggle (persisted via `next-themes`), dark-orange primary on Vercel/Linear-style neutrals
- **Interactive dot-grid background** — canvas dots that displace around the cursor and spring back
- **Live project previews** — cards show real screenshots of deployed sites via the mShots screenshot service
- **Spotlight cards** — cursor-tracking border glow on project, resume, and skill cards
- **Working contact form** — Web3Forms delivery with react-hook-form + zod validation
- **SEO** — canonical URL, JSON-LD Person schema, sitemap, per-section titles
- **Accessible** — ARIA tabs with arrow-key navigation, `prefers-reduced-motion` support

## Tech Stack

- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS + shadcn/ui (Radix primitives)
- **Forms:** react-hook-form + zod
- **Fonts:** Inter (body) + Caveat (accents)
- **Analytics:** Google Analytics 4
- **Deployment:** Netlify

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview the build
```

## Configuration

Two placeholders need real values before deploying:

1. **Contact form:** replace `WEB3FORMS_ACCESS_KEY` in `src/components/sections/Contact.tsx` with your key from [web3forms.com](https://web3forms.com)
2. **Analytics:** replace `G-XXXXXXXXXX` (both occurrences) in `index.html` with your GA4 Measurement ID
