import { Injectable } from '@nestjs/common'

@Injectable()
export class SimulationService {
  getPlaceholder() {
    return { message: 'Simulation module placeholder' }
  }
}
