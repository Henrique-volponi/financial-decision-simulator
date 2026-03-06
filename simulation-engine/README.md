# Simulation Engine

Engine de simulação financeira independente, escrita em TypeScript, com funções reutilizáveis para juros compostos, aportes mensais, empréstimos e ajuste por inflação.

## Instalação

No monorepo, instale dependências e depois rode o build deste pacote:

```sh
npm install
cd simulation-engine && npm run build
```

## Uso rápido

```ts
import {
  calculateCompoundInterest,
  simulateMonthlyInvestment,
  simulateLoan,
  adjustForInflation,
  applyInflationSeries,
} from './dist'

const ci = calculateCompoundInterest({
  principal: 10000,
  annualRate: 0.08,
  years: 5,
  contributionPerPeriod: 200,
})

const monthly = simulateMonthlyInvestment({
  initialBalance: 0,
  monthlyContribution: 500,
  annualRate: 0.09,
  months: 120,
})

const loan = simulateLoan({
  principal: 200000,
  annualRate: 0.1,
  termMonths: 360,
  extraMonthlyPayment: 200,
})

const real = adjustForInflation({ amount: 1000, annualInflationRate: 0.04, years: 3 })
const series = applyInflationSeries(monthly.monthlyBalances, 0.04)
```

## Módulos

- **Juros compostos**: `calculateCompoundInterest` calcula saldo final, contribuições totais, juros totais e saldo por período.
- **Investimento mensal**: `simulateMonthlyInvestment` retorna evolução mensal, total de aportes e juros.
- **Empréstimo**: `simulateLoan` calcula prestação teórica, juros totais e cronograma de amortização mês a mês com pagamento extra opcional.
- **Inflação**: `adjustForInflation` devolve valor real, `applyInflationSeries` ajusta uma série mensal.

## Scripts

- `npm run build`: compila TypeScript para `dist/`.
- `npm run test`: placeholder para futuros testes.
- `npm run lint`: placeholder para lint.

## Próximos passos

- Adicionar testes cobrindo cenários de limites (taxas zero, amortização antecipada, inflação alta).
- Documentar unidades (ao ano, ao mês) em um guia de convenções.
- Publicar ou empacotar para consumo direto pelo backend/frontend.
