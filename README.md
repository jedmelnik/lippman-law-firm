# Steve's Auto Care

Modern Next.js rebuild for **Steve's Auto Care** — Honda and Acura specialists in Novato, CA.

Original site: [stevesautocarenovato.com](http://stevesautocarenovato.com/)

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- shadcn/ui

## Local development

```bash
cd /path/to/steves-auto-care
npm install
npm run dev
```

Open the URL printed by Next.js (default port 3000, or set `-p` / `PORT`).

```bash
npm run build
npm start
```

## Pages

- `/` — homepage
- `/contact` — phone, email, hours, address, and map
- `/steve-speaks` — YouTube videos from the shop channel (newest first). Pulled from YouTube’s public channel RSS feed and refreshed about every hour via ISR — no API key required. YouTube’s feed returns the most recent uploads (typically up to ~15).

## Business details (source of truth for copy)

- **Phone:** (415) 899-1115
- **Address:** 879 Sweetser Ave, Novato, CA 94945
- **Hours:** Monday–Friday, 8:00am–5:00pm
- **Email:** stevesautocare@comcast.net
- **YouTube:** https://www.youtube.com/@stevesautocarenovato6588
