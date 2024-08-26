import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsMobilePhone, IsDecimal, IsInt } from 'class-validator';

export class CreateLoanDto {
  @ApiProperty({ description: "Applicant's name" })
  @IsString()
  applicantName: string;

  @ApiProperty({ description: "Applicant's email" })
  @IsEmail()
  applicantEmail: string;

  @ApiProperty({ description: "Applicant's mobile phone number" })
  @IsMobilePhone()
  applicantMobilePhoneNumber: string;

  @ApiProperty({ description: "Applicant's address" })
  @IsString()
  applicantAddress: string;

  @ApiProperty({ description: 'Annual income before tax' })
  @IsDecimal()
  annualIncomeBeforeTax: number;

  @ApiProperty({ description: 'Incoming address' })
  @IsString()
  incomingAddress: string;

  @ApiProperty({ description: 'Incoming deposit' })
  @IsDecimal()
  incomingDeposit: number;

  @ApiProperty({ description: 'Incoming price' })
  @IsDecimal()
  incomingPrice: number;

  @ApiProperty({ description: 'Incoming stamp duty' })
  @IsDecimal()
  incomingStampDuty: number;

  @ApiProperty({ description: 'Loan amount' })
  @IsDecimal()
  loanAmount: number;

  @ApiProperty({ description: 'Loan duration' })
  @IsInt()
  loanDuration: number;

  @ApiProperty({ description: 'Monthly expenses' })
  @IsDecimal()
  monthlyExpenses: number;

  @ApiProperty({ description: 'Outgoing address' })
  @IsString()
  outgoingAddress: string;

  @ApiProperty({ description: 'Outgoing mortgage' })
  @IsDecimal()
  outgoingMortgage: number;

  @ApiProperty({ description: 'Outgoing valuation' })
  @IsDecimal()
  outgoingValuation: number;

  @ApiProperty({ description: 'Savings contribution' })
  @IsDecimal()
  savingsContribution: number;
}
