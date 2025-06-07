# Anix7 Monorepo

This is the monorepo for Anix7, powered by [Turborepo](https://turbo.build/repo).

## Structure

```

apps/
web/ → Next.js 15 app
api/ → Express or Fastify API server
packages/
shared/ → Shared models, utils, NextAuth config

```

## Tech Stack

- [Next.js 15 App Router](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Fastify](https://fastify.io/) or Express.js
- [MongoDB](https://www.mongodb.com/)
- [PNPM Workspaces](https://pnpm.io/workspaces)
- [Turborepo](https://turbo.build/repo)

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Run apps

```bash
pnpm dev
```

or:

```bash
pnpm --filter web dev
pnpm --filter api dev
```

### Build all apps

```bash
pnpm build
```

### Run lint

```bash
pnpm lint
```

## Why Monorepo?

- Unified dev experience across apps
- Shared models and logic
- Faster CI/CD with Turborepo caching
- Easier maintenance of the whole Anix7 ecosystem
