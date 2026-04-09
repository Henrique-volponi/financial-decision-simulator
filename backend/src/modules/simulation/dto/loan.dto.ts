import { IsNumber, IsPositive } from 'class-validator'

export class LoanDto {
  @IsNumber()
  @IsPositive()
  loanAmount: number

  @IsNumber()
  @IsPositive()
  interestRate: number

  @IsNumber()
  @IsPositive()
  loanYears: number
}
