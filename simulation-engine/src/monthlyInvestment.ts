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

export type LongTermInvestmentInput = {
  initialAmount: number
  monthlyContribution: number
  yearlyReturnRate: number // e.g. 0.08 for 8% a.a.
  investmentYears: number
}

export type YearlyBreakdownEntry = {
  year: number
  endBalance: number
  contributions: number
  interestEarned: number
}

export type LongTermInvestmentResult = {
  yearly: YearlyBreakdownEntry[]
  totalInvested: number
  interestEarned: number
  finalValue: number
}

export function simulateLongTermInvestment(
  input: LongTermInvestmentInput
): LongTermInvestmentResult {
  const monthlyRate = input.yearlyReturnRate / 12
  const totalMonths = Math.floor(input.investmentYears * 12)

  const yearly: YearlyBreakdownEntry[] = []
  let balance = input.initialAmount
  let totalInvested = input.initialAmount
  let totalInterest = 0
  let yearContrib = 0
  let yearInterest = 0

  for (let month = 1; month <= totalMonths; month += 1) {
    balance += input.monthlyContribution
    totalInvested += input.monthlyContribution
    yearContrib += input.monthlyContribution

    const interest = balance * monthlyRate
    balance += interest
    totalInterest += interest
    yearInterest += interest

    if (month % 12 === 0) {
      const year = month / 12
      yearly.push({
        year,
        endBalance: Number(balance.toFixed(2)),
        contributions: Number(yearContrib.toFixed(2)),
        interestEarned: Number(yearInterest.toFixed(2)),
      })
      yearContrib = 0
      yearInterest = 0
    }
  }

  return {
    yearly,
    totalInvested: Number(totalInvested.toFixed(2)),
    interestEarned: Number(totalInterest.toFixed(2)),
    finalValue: Number(balance.toFixed(2)),
  }
}
