# Backend (NestJS API)

API do Financial Decision Simulator com health check e placeholder de simulação.

## Como rodar em desenvolvimento

Opção 1 (do root):

```sh
npm run start:dev --workspace backend
```

Opção 2 (dentro de backend/):

```sh
cd backend
npm run start:dev
```

## Endpoints atuais

- `GET /health` — status e timestamp.
- `GET /simulation` — placeholder do módulo de simulação (deve ser substituído quando integrar com o engine real).

## Próximos passos

- Definir contratos de API e DTOs.
- Integrar com o `simulation-engine` e expor simulações reais.
- Adicionar validação, autenticação/autorização e observabilidade.
