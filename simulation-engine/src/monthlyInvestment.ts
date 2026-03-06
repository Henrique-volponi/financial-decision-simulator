export type MonthlyInvestmentInput = {
  initialBalance: number
  monthlyContribution: number
  annualRate: number // e.g. 0.08 for 8%
  months: number
}

export type MonthlyInvestmentResult = {
  finalBalance: number
  totalContributions: number
  totalInterest: number
  monthlyBalances: number[]
}

export function simulateMonthlyInvestment(
  input: MonthlyInvestmentInput
): MonthlyInvestmentResult {
  const monthlyRate = input.annualRate / 12
  const monthlyBalances: number[] = []
  let balance = input.initialBalance
  let totalContributions = 0
  let totalInterest = 0

  for (let month = 0; month < input.months; month += 1) {
    balance += input.monthlyContribution
    totalContributions += input.monthlyContribution

    const interest = balance * monthlyRate
    balance += interest
    totalInterest += interest

    monthlyBalances.push(Number(balance.toFixed(2)))
  }

  return {
    finalBalance: Number(balance.toFixed(2)),
    totalContributions: Number(totalContributions.toFixed(2)),
    totalInterest: Number(totalInterest.toFixed(2)),
    monthlyBalances,
  }
}
