# Yuppie Commerce

A modern e-commerce platform built with the following stack:

- **[Next.js](https://nextjs.org/)** — React framework with App Router
- **TypeScript** — Type-safe development
- **[TailwindCSS](https://tailwindcss.com/)** — Utility-first CSS framework
- **[Better Auth](https://better-auth.com/)** — Authentication (email/password)
- **[Neon PostgreSQL](https://neon.tech/)** — Serverless PostgreSQL database
- **[Drizzle ORM](https://orm.drizzle.team/)** — Type-safe SQL ORM
- **[Zustand](https://zustand.docs.pmnd.rs/)** — Lightweight state management

## Getting Started

### Prerequisites

- Node.js 20+
- A [Neon](https://neon.tech/) PostgreSQL database

### Environment Setup

Copy the example environment file and fill in your values:

```bash
cp .env.example .env
```

Required variables:

| Variable | Description |
| --- | --- |
| `DATABASE_URL` | Neon PostgreSQL connection string |
| `BETTER_AUTH_SECRET` | Secret key for Better Auth (generate with `openssl rand -base64 32`) |
| `BETTER_AUTH_URL` | Base URL of the app (e.g. `http://localhost:3000`) |

### Install Dependencies

```bash
npm install
```

### Database Setup

Push the schema to your Neon database:

```bash
npm run db:push
```

Or generate and run migrations:

```bash
npm run db:generate
npm run db:migrate
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/page.tsx
│   │   └── sign-up/page.tsx
│   ├── (protected)/
│   │   └── dashboard/page.tsx
│   ├── api/auth/[...all]/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── auth-provider.tsx
├── lib/
│   ├── auth.ts          # Better Auth server config
│   ├── auth-client.ts   # Better Auth client
│   ├── db.ts            # Drizzle + Neon database
│   └── schema.ts        # Drizzle schema
├── store/
│   └── auth-store.ts    # Zustand auth store
└── middleware.ts         # Route protection
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run db:generate` | Generate Drizzle migrations |
| `npm run db:migrate` | Run Drizzle migrations |
| `npm run db:push` | Push schema to database |
| `npm run db:studio` | Open Drizzle Studio |
