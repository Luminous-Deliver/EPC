# L&D Energy

Production website for L&D Energy — Elmhurst-accredited Domestic EPC assessor covering London.

- **Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS
- **Deployment:** Cloudflare Pages via `@cloudflare/next-on-pages`
- **Production URL:** https://epc.luminousanddeliver.co.uk

## Development

```bash
npm install
npm run dev
```

## Cloudflare Pages

```bash
npm run pages:build
npm run preview   # local edge preview
npm run deploy    # deploy to Cloudflare Pages
```

## Build Phases

Implementation follows the phased build order in the project specification.

- [x] Phase 1 — Foundation (config, tokens, layout, core UI)
- [ ] Phase 2 — Homepage
- [ ] Phase 3 — Service pages
- [ ] Phase 4 — Audience pages (Landlords, Sellers)
- [ ] Phase 5 — Borough pages
- [ ] Phase 6 — Supporting pages
- [ ] Phase 7 — SEO & schema
- [ ] Phase 8 — Polish & deploy
