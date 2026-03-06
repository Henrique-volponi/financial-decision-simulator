import { Module } from '@nestjs/common'
import { SimulationModule } from './modules/simulation/simulation.module'
import { HealthController } from './controllers/health.controller'
import { HealthService } from './services/health.service'

@Module({
  imports: [SimulationModule],
  controllers: [HealthController],
  providers: [HealthService],
})
export class AppModule {}
