# MT-Sub Full Stack

Mobile-first PWA-style data and airtime app for Musatech Solutions Ltd.

## Features
- User registration and login
- Cookie-based auth
- MongoDB persistence
- Wallet balance and funding records
- Data purchase flow
- Airtime purchase flow
- Transaction history
- Mobile-first responsive UI
- PWA manifest and install prompt
- VTU provider adapter with **mock mode** enabled by default

## Quick start

1. Copy `.env.example` to `.env.local`
2. Fill in your MongoDB URI and secret
3. Install dependencies
4. Run the dev server

```bash
npm install
cp .env.example .env.local
npm run dev
```

Then visit:
- `/register`
- `/login`
- `/app`

## Demo mode

The project runs with:

```env
VTU_PROVIDER=mock
```

That means airtime and data purchases are processed by an internal mock provider so you can test the full flow immediately.

## Go live later

To connect a real VTU vendor:
- keep the UI and backend as-is
- swap the logic inside `lib/vtu/provider.js`
- add your vendor keys in `.env.local`

## Deploy to Vercel
- Push this repo to GitHub
- Import it into Vercel
- Add the environment variables from `.env.example`
- Deploy

## Important
This build is ready to work end-to-end in **mock purchase mode**. For real production vending, connect your preferred VTU vendor in `lib/vtu/provider.js`.
