import { IsNumber, IsPositive, Min } from 'class-validator'

export class InvestmentDto {
  @IsNumber()
  @Min(0)
  initialAmount: number

  @IsNumber()
  @Min(0)
  monthlyContribution: number

  @IsNumber()
  @IsPositive()
  yearlyReturnRate: number

  @IsNumber()
  @IsPositive()
  investmentYears: number
}
