# Date Invite 💖

A sweet, customizable date proposal mini-app — inspired by those viral “I made a website for you” invites.

**Live demo:** deploy your own copy and share the link.

## Personalize in 30 seconds

Edit **`src/config/site.ts`**:

| Field | What to change |
|-------|----------------|
| `recipient.name` | Her name (e.g. `Nourhan`) |
| `recipient.photoUrl` | Optional photo (`/photos/her.jpg` in `public/`) |
| `sender.name` / `sender.nameArabic` | Your name — default: **SNSN** / **سنسن** |
| `success.message` | Final romantic line |
| `food.options` | Cuisine choices |

Everything else updates automatically.

## Flow

1. **Will you go on a date?** — Yes / runaway No button 😄
2. **Are you sure?** — Confirmation
3. **Pick date & time**
4. **Choose food**
5. **Success screen** — personalized summary + confetti

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hassangomaa/date-invite)

Or:

```bash
npx vercel --prod
```

## Stack

- Next.js 16 · React · Tailwind CSS
- Zero backend — pure frontend magic

---

*Built with love by SNSN سنسن*
