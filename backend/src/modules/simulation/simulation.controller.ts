import { Body, Controller, Post } from '@nestjs/common'
import { SimulationService, InvestmentPayload, LoanPayload } from './simulation.service'

@Controller('simulate')
export class SimulationController {
  constructor(private readonly simulationService: SimulationService) {}

  @Post('investment')
  simulateInvestment(@Body() payload: InvestmentPayload) {
    return this.simulationService.simulateInvestment(payload)
  }

  @Post('loan')
  simulateLoan(@Body() payload: LoanPayload) {
    return this.simulationService.simulateLoan(payload)
  }
}
