export type ScenarioInput = {
  startingBalance: number;
  annualContribution: number;
  annualRate: number;
  years: number;
};

export type ScenarioResult = {
  finalBalance: number;
  annualBalances: number[];
};

/**
 * Placeholder compound growth simulation. Replace with richer logic later.
 */
export function runSimpleScenario(input: ScenarioInput): ScenarioResult {
  const annualBalances: number[] = [];
  let balance = input.startingBalance;

  for (let year = 0; year < input.years; year += 1) {
    balance += input.annualContribution;
    balance *= 1 + input.annualRate;
    annualBalances.push(Number(balance.toFixed(2)));
  }

  return { finalBalance: Number(balance.toFixed(2)), annualBalances };
}
