export type InflationAdjustmentInput = {
  amount: number
  annualInflationRate: number // e.g. 0.04 for 4%
  years: number
}

export function adjustForInflation(input: InflationAdjustmentInput): number {
  const factor = (1 + input.annualInflationRate) ** input.years
  const realValue = input.amount / factor
  return Number(realValue.toFixed(2))
}

export function applyInflationSeries(
  values: number[],
  annualInflationRate: number
): number[] {
  return values.map((value, index) => {
    const factor = (1 + annualInflationRate) ** (index / 12)
    const adjusted = value / factor
    return Number(adjusted.toFixed(2))
  })
}
