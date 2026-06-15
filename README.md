# Mizanur Rahman — Developer Portfolio

A premium, dark-themed developer portfolio for a full-stack & Shopify specialist —
built to communicate trust and convert agency/brand visitors into inbound leads
via a contact form and WhatsApp.

🔗 **Live:** _add your Vercel URL here_

---

## ✨ Features

- **Single-page site** with Hero, About, Services, Why-Me (process), Case Studies,
  Social Proof (testimonials carousel), flagship SaaS CTA, FAQ and Contact sections
- **Sub-pages:** expanded `/about` and dynamic `/services/[slug]` detail pages
- **Working contact form** — `react-hook-form` validation + email delivery via Resend
- **Dark, teal-accented design system** with glow effects and scroll-reveal animations
- **Fully responsive**, accessible, and SEO-ready (OpenGraph metadata)
- **Single source of truth** for personal details in [`src/lib/site.ts`](src/lib/site.ts)

## 🧱 Tech Stack

| Layer       | Choice                          |
| ----------- | ------------------------------- |
| Framework   | Next.js 16 (App Router)         |
| Language    | TypeScript                      |
| Styling     | Tailwind CSS v4                 |
| Components  | shadcn/ui (Base UI)             |
| Email       | Resend                          |
| Forms       | react-hook-form                 |
| Carousel    | Embla Carousel                  |
| Icons       | Lucide React                    |
| Deployment  | Vercel                          |

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3005](http://localhost:3005) (this project runs on port **3005**).

### Environment variables

Copy [`.env.example`](.env.example) to `.env.local` and fill in:

```bash
RESEND_API_KEY=re_your_key_here      # https://resend.com (free: 3,000 emails/month)
CONTACT_EMAIL=you@example.com         # where contact-form submissions are delivered
```

## 🛠️ Customizing

- **Personal details** (name, contact, socials, stats): [`src/lib/site.ts`](src/lib/site.ts)
- **Services**: [`src/lib/services.ts`](src/lib/services.ts) and detail pages [`src/lib/service-details.ts`](src/lib/service-details.ts)
- **Case studies**: [`src/lib/projects.ts`](src/lib/projects.ts) (drop screenshots in `public/`)
- **Reviews**: [`src/lib/reviews.ts`](src/lib/reviews.ts)
- **Profile photo**: `public/Mizan-ph.jpg` (path set via `site.profileImage`)

## 📦 Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start dev server (port 3005)         |
| `npm run build` | Production build                     |
| `npm start`     | Run the production build (port 3005) |
| `npm run lint`  | Run ESLint                           |

## ☁️ Deploy on Vercel

1. Import this repo at [vercel.com/new](https://vercel.com/new)
2. Add the `RESEND_API_KEY` and `CONTACT_EMAIL` environment variables
3. Deploy — every push to `main` auto-deploys

> **Note:** The contact API uses Resend's sandbox sender (`onboarding@resend.dev`) by
> default, which reliably delivers only to your own Resend account email. For
> production, verify a domain in Resend and update the `from:` address in
> [`src/app/api/contact/route.ts`](src/app/api/contact/route.ts).
