import { Injectable } from '@nestjs/common'
import { simulateLongTermInvestment, simulateBasicLoan } from 'simulation-engine'

export type InvestmentPayload = {
  initialAmount: number
  monthlyContribution: number
  yearlyReturnRate: number
  investmentYears: number
}

export type LoanPayload = {
  loanAmount: number
  interestRate: number
  loanYears: number
}

@Injectable()
export class SimulationService {
  simulateInvestment(payload: InvestmentPayload) {
    return simulateLongTermInvestment({
      initialAmount: payload.initialAmount,
      monthlyContribution: payload.monthlyContribution,
      yearlyReturnRate: payload.yearlyReturnRate,
      investmentYears: payload.investmentYears,
    })
  }

  simulateLoan(payload: LoanPayload) {
    return simulateBasicLoan({
      loanAmount: payload.loanAmount,
      interestRate: payload.interestRate,
      loanYears: payload.loanYears,
    })
  }
}
