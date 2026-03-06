# Financial Decision Simulator

Monorepo scaffold for a financial decision simulator. No features are implemented yet; this is just the project structure and base setup.

## Structure

- [frontend](frontend) — Next.js + TypeScript app shell
- [backend](backend) — NestJS API scaffold
- [simulation-engine](simulation-engine) — reusable financial calculation modules
- [docs](docs) — project documentation

## Getting Started

Install dependencies once the package managers are set up (npm/yarn/pnpm). Each package is isolated; use workspace-aware installs.

```
npm install
```

## Next Steps

- Add CI (lint/test/build) per package.
- Define API contracts between backend and simulation engine.
- Implement core financial models and UI flows.
