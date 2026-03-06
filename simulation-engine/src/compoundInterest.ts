export type CompoundInterestInput = {
  principal: number
  annualRate: number // e.g. 0.07 for 7%
  timesCompoundedPerYear?: number 
  years: number
  contributionPerPeriod?: number 
}

export type CompoundInterestResult = {
  finalBalance: number
  totalContributions: number
  totalInterest: number
  balanceByPeriod: number[]
}

export function calculateCompoundInterest(
  input: CompoundInterestInput
): CompoundInterestResult {
  const times = input.timesCompoundedPerYear ?? 12
  const contribution = input.contributionPerPeriod ?? 0
  const ratePerPeriod = input.annualRate / times
  const totalPeriods = Math.floor(input.years * times)

  const balanceByPeriod: number[] = []
  let balance = input.principal
  let totalContributions = 0
  let totalInterest = 0

  for (let i = 0; i < totalPeriods; i += 1) {
    balance += contribution
    totalContributions += contribution

    const interest = balance * ratePerPeriod
    balance += interest
    totalInterest += interest

    balanceByPeriod.push(Number(balance.toFixed(2)))
  }

  return {
    finalBalance: Number(balance.toFixed(2)),
    totalContributions: Number(totalContributions.toFixed(2)),
    totalInterest: Number(totalInterest.toFixed(2)),
    balanceByPeriod,
  }
}
