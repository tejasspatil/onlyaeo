# OnlyAEO Website

Next.js 14 site for [onlyaeo.com](https://onlyaeo.com) — deployed on Cloudflare Workers via `@opennextjs/cloudflare`.

---

## Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

Create `.env.local` (never commit this):
```
NEXT_PUBLIC_FORMSPREE_ID=xqeylwan
```

---

## Deploy to Cloudflare Workers

```bash
# One command — builds Next.js + deploys to Cloudflare
npm run deploy
```

Live worker URL: **https://onlyaeo.tejas-a6d.workers.dev**
Production domain: **https://onlyaeo.com**

### First-time setup
```bash
npx wrangler login   # authenticate with Cloudflare
npm run deploy       # build + deploy
```

---

## Environment Variables

Set these in the Cloudflare dashboard (never in code):
**Workers & Pages → onlyaeo → Settings → Variables and Secrets**

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | `xqeylwan` |

---

## Custom Domain (onlyaeo.com)

1. Add site to Cloudflare: dash.cloudflare.com → Add Site → `onlyaeo.com`
2. Cloudflare gives you two nameservers — paste into GoDaddy DNS settings
3. In Cloudflare Workers: onlyaeo → Settings → Domains → Add Custom Domain → `onlyaeo.com`
4. DNS propagates within 10–30 minutes

---

## Stack

- **Framework**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion, GSAP + ScrollTrigger
- **Deployment**: Cloudflare Workers via `@opennextjs/cloudflare`
- **Forms**: Formspree (`xqeylwan`)
- **Bookings**: Calendly — https://calendly.com/tejas-gai/30min
- **Email**: tejas@gai.ventures
