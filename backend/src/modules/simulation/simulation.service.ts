import { Injectable } from '@nestjs/common'
import { simulateLongTermInvestment, simulateBasicLoan } from 'simulation-engine'
import { InvestmentDto } from './dto/investment.dto'
import { LoanDto } from './dto/loan.dto'

@Injectable()
export class SimulationService {
  simulateInvestment(payload: InvestmentDto) {
    return simulateLongTermInvestment(payload)
  }

  simulateLoan(payload: LoanDto) {
    return simulateBasicLoan(payload)
  }
}
