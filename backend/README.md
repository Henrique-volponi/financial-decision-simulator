# Backend (NestJS API)

API do Financial Decision Simulator com health check e endpoints de simulação usando o `simulation-engine`.

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
- `POST /simulate/investment` — simula investimento de longo prazo (`initialAmount`, `monthlyContribution`, `yearlyReturnRate`, `investmentYears`).
- `POST /simulate/loan` — simula financiamento (`loanAmount`, `interestRate`, `loanYears`).

## Pré-requisito

O pacote `simulation-engine` deve estar instalado/buildado no monorepo (`npm install` na raiz e `npm run build` em `simulation-engine`) para execução em desenvolvimento.

> Nota: devido a um erro do npm com `workspace:*` nesta máquina, o link está configurado como `file:../simulation-engine`. Quando o npm for atualizado/suportar corretamente workspaces, podemos voltar para `workspace:*`.

## Próximos passos

- Adicionar DTOs com validação (class-validator) e documentação (OpenAPI/Swagger).
- Autenticação/autorização e observabilidade.
