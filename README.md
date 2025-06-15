# Anix7 Monorepo

This is the official monorepo for **Anix7**, powered by [Turborepo](https://turbo.build/repo) and [PNPM Workspaces](https://pnpm.io). It contains all applications and shared packages for the Anix7 ecosystem — including web apps, API servers, and shared libraries.

---

## All Projects

- [Anipic](./apps/anipic) - Next.js 15 App Router
- [www-website](./apps/www-website) - Next.js 15 App Router
- [tools](./apps/tools) - Next.js 15 App Router
- [i-used-for-short-url](./apps/i-used-for-short-url) - Next.js 15 App Router
- [api](./apps/api) - Fastify or Express API server
- [auth](./apps/auth) - Next.js 15 App Router For Auth Support in Middleware
- [shared](./shared) - Shared libraries, components, and configurations  
  - [config](./shared/config) - Shared configuration (e.g., Tailwind, ESLint)
  - [lib](./shared/lib) - Shared libraries
    - [models](./shared/lib/models) - Shared Mongoose models (with multi-DB connection support)
    - [auth](./shared/lib/auth) - Shared Auth.js configuration
    - [db](./shared/lib/db) - Shared database utilities (e.g., MongoDB connection)
  - [styles](./shared/styles) - Shared styles (e.g., base.css, Tailwind CSS)
  - [utils](./shared/utils) - Reusable utility functions (e.g., copy to clipboard, helpers)
  


---

## 📁 Project Structure

```
.
├── apps/
│   ├── anipic/               # Next.js 15 App Router
│   ├── www-website/          # Next.js 15 App Router
│   ├── tools/                # Next.js 15 App Router
│   ├── i-used-for-short-url/ # Next.js 15 App Router
│   ├── api/                  # Fastify or Express API server
│   └── auth/                 # Next.js 15 App Router For Auth Support in Middlewere
│
├── shared/
│   ├── components/  # Shared React components
│   ├── config/      # Shared configuration (e.g., Tailwind, ESLint)
│   ├── lib/         # Shared libraries
│   │   ├── models/  # Shared Mongoose models (with multi-DB connection support)
│   │   ├── auth/    # Shared Auth.js configuration
│   │   └── db/      # Shared database utilities (e.g., MongoDB connection)
│   ├── styles/      # Shared styles (e.g., base.css, Tailwind CSS)
│   └── utils/       # Reusable utility functions (e.g., copy to clipboard, helpers)
│
│
├── .env*              # Environment files for local development
├── package.json       # Monorepo root config (with workspaces)
├── turbo.json         # Turborepo build pipeline config
└── pnpm-workspace.yaml # PNPM workspaces config
```

---

## ⚙️ Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/)
- [Auth.js](https://nextjs.org/)
- [MongoDB with Mongoose](https://mongoosejs.com/)
- [Fastify](https://fastify.io/) (or [Express.js](https://expressjs.com/))
- [PNPM Workspaces](https://pnpm.io/workspaces)
- [Turborepo](https://turbo.build/repo)
- [Tailwind CSS v4](https://tailwindcss.com/) (for UI)
- [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/flat-config/) (shared)
- [PostCSS](https://postcss.org/) (for CSS processing)

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Run development servers

```bash
pnpm dev
```

Or run a specific app:

```bash
pnpm --filter web dev # Web app (Next.js 15)
pnpm --filter anipic dev # Anipic app (Next.js 15)
pnpm --filter api dev # API server (Fastify or Express)
pnpm --filter auth dev # Auth app (Next.js 15)
```

Or multiple apps at once:

```bash
pnpm dev --filter auth --filter tools --filter anipic
pnpm dev --filter www-website --filter api
```

### 3. Build all apps & packages

```bash
pnpm build
```

### 4. Run lint checks

```bash
pnpm lint
```

---

## 🌐 Environment Setup

Each app can have its own `.env` file:

```
apps/www-website/.env.local
apps/api/.env
```

Shared environment variables (if any) can be placed in the root `.env` file.

---

## 🎯 Why Monorepo?

✔️ Unified development experience across multiple apps  
✔️ Share **Mongoose models**, **NextAuth config**, **utils**, and **types**  
✔️ Turborepo caching for faster CI/CD builds  
✔️ Centralized ESLint, Tailwind, PostCSS, Prettier configs  
✔️ Easier refactoring, scaling, and maintenance across the whole **Anix7 ecosystem**

---

## 🏗️ Build Tools & Features

- **Turborepo Tasks** — caching, build optimization
- **Shared Tailwind CSS** config in `shared/config/`
- **Multi-MongoDB connection** via shared DB utils
- **Reusable Auth.js config**
- **Reusable Mongoose models** (multi-DB support)

---

## 📄 License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)** License.

> For educational and personal use only.
> **Commercial or production use is strictly prohibited without explicit permission.**

See [LICENSE](./LICENSE) for full details.

---

## 🤝 Contribution

PRs, suggestions, and improvements are welcome — for educational or learning purposes only.

---

© 2025 [CodesWithSubham](https://github.com/CodesWithSubham) — All rights reserved.
