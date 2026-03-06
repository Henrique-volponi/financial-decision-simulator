# Financial Decision Simulator

Monorepo do simulador de decisões financeiras. Backend com health check e placeholder de simulação; engine com módulos de cálculo financeiros reutilizáveis.

## Structure

- [frontend](frontend) — Next.js + TypeScript app shell
- [backend](backend) — NestJS API com health check e placeholder de simulação
- [simulation-engine](simulation-engine) — módulos de cálculo financeiro (juros compostos, investimento mensal, empréstimo, inflação)
- [docs](docs) — project documentation

## Getting Started

Instale dependências na raiz e use os scripts por workspace.

```
npm install
```

## Rodando

- Backend: `npm run start:dev --workspace backend` (ou `cd backend && npm run start:dev`)
- Simulation engine: `cd simulation-engine && npm run build`
- Frontend: `npm run dev --workspace frontend` (placeholder)

## Next Steps

- Adicionar CI (lint/test/build) por pacote.
- Definir contratos de API entre backend e simulation-engine e conectar endpoints reais.
- Implementar fluxos e UI no frontend.
