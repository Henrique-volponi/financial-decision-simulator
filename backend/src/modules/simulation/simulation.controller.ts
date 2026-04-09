import { Body, Controller, Post } from '@nestjs/common'
import { SimulationService } from './simulation.service'
import { InvestmentDto } from './dto/investment.dto'
import { LoanDto } from './dto/loan.dto'

@Controller('simulate')
export class SimulationController {
  constructor(private readonly simulationService: SimulationService) {}

  @Post('investment')
  simulateInvestment(@Body() payload: InvestmentDto) {
    return this.simulationService.simulateInvestment(payload)
  }

  @Post('loan')
  simulateLoan(@Body() payload: LoanDto) {
    return this.simulationService.simulateLoan(payload)
  }
}
