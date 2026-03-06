export type LoanSimulationInput = {
  principal: number
  annualRate: number // e.g. 0.09 for 9%
  termMonths: number
  extraMonthlyPayment?: number
}

export type LoanInstallment = {
  month: number
  payment: number
  principalPayment: number
  interestPayment: number
  remainingBalance: number
}

export type LoanSimulationResult = {
  scheduledPayment: number
  totalPaid: number
  totalInterest: number
  installments: LoanInstallment[]
}

export function simulateLoan(input: LoanSimulationInput): LoanSimulationResult {
  const monthlyRate = input.annualRate / 12
  const extra = input.extraMonthlyPayment ?? 0

  const scheduledPayment =
    input.principal === 0 || monthlyRate === 0
      ? input.principal / input.termMonths
      : (input.principal * monthlyRate) / (1 - (1 + monthlyRate) ** -input.termMonths)

  const installments: LoanInstallment[] = []
  let balance = input.principal
  let totalPaid = 0
  let totalInterest = 0

  for (let month = 1; month <= input.termMonths && balance > 0; month += 1) {
    const interestPayment = balance * monthlyRate
    let principalPayment = scheduledPayment + extra - interestPayment

    if (principalPayment > balance) {
      principalPayment = balance
    }

    const paymentThisMonth = principalPayment + interestPayment
    balance -= principalPayment
    totalPaid += paymentThisMonth
    totalInterest += interestPayment

    installments.push({
      month,
      payment: Number(paymentThisMonth.toFixed(2)),
      principalPayment: Number(principalPayment.toFixed(2)),
      interestPayment: Number(interestPayment.toFixed(2)),
      remainingBalance: Number(balance.toFixed(2)),
    })

    if (balance <= 0) break
  }

  return {
    scheduledPayment: Number(scheduledPayment.toFixed(2)),
    totalPaid: Number(totalPaid.toFixed(2)),
    totalInterest: Number(totalInterest.toFixed(2)),
    installments,
  }
}

export type BasicLoanInput = {
  loanAmount: number
  interestRate: number // annual, e.g. 0.09 for 9%
  loanYears: number
}

export type BasicLoanResult = {
  monthlyPayment: number
  schedule: LoanInstallment[]
  totalInterestPaid: number
  totalCost: number
}

export function simulateBasicLoan(input: BasicLoanInput): BasicLoanResult {
  const termMonths = Math.floor(input.loanYears * 12)
  const result = simulateLoan({
    principal: input.loanAmount,
    annualRate: input.interestRate,
    termMonths,
  })

  return {
    monthlyPayment: result.scheduledPayment,
    schedule: result.installments,
    totalInterestPaid: result.totalInterest,
    totalCost: result.totalPaid,
  }
}
