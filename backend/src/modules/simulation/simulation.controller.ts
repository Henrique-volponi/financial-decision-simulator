import { Controller, Get } from '@nestjs/common'
import { SimulationService } from './simulation.service'

@Controller('simulation')
export class SimulationController {
  constructor(private readonly simulationService: SimulationService) {}

  @Get()
  getPlaceholder() {
    return this.simulationService.getPlaceholder()
  }
}
