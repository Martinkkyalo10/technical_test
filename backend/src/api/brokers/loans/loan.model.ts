import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { IsDate, IsDecimal, IsEmail, IsEnum, IsMobilePhone, IsString } from 'class-validator';

/**
 * Data model for the loans table, which stores loan applications submitted by brokers.
 */
@Table({
  tableName: 'loans',
  timestamps: true,
})
export class Loan extends Model<Loan> {
  /**
   * The primary key for the row
   */
  @ApiProperty({
    description: 'The primary key for the row',
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  /**
   * Applicant's name
   */
  @ApiProperty({ description: "Applicant's name" })
  @Column({ type: DataType.STRING, field: 'applicant_name' })
  @IsString()
  applicantName: string;

  /**
   * Applicant's email
   */
  @ApiProperty({ description: "Applicant's email" })
  @Column({
    type: DataType.STRING,
    validate: { isEmail: true },
    unique: true,
    field: 'applicant_email',
  })
  @IsEmail()
  applicantEmail: string;

  /**
   * Applicant's mobile phone number
   */
  @ApiProperty({ description: "Applicant's mobile phone number" })
  @Column({
    type: DataType.STRING,
    unique: true,
    field: 'applicant_mobile_phone_number',
  })
  @IsMobilePhone()
  applicantMobilePhoneNumber: string;

  /**
   * Applicant's address
   */
  @ApiProperty({ description: "Applicant's address" })
  @Column({ type: DataType.STRING, field: 'applicant_address' })
  @IsString()
  applicantAddress: string;

  /**
   * Annual income before tax
   */
  @ApiProperty({ description: 'Annual income before tax' })
  @Column({ type: DataType.FLOAT, field: 'annual_income_before_tax' })
  @IsDecimal()
  annualIncomeBeforeTax: number;

  /**
   * Incoming address
   */
  @ApiProperty({ description: 'Incoming address' })
  @Column({ type: DataType.STRING, field: 'incoming_address' })
  @IsString()
  incomingAddress: string;

  /**
   * Incoming deposit
   */
  @ApiProperty({ description: 'Incoming deposit' })
  @Column({ type: DataType.FLOAT, field: 'incoming_deposit' })
  @IsDecimal()
  incomingDeposit: number;

  /**
   * Incoming price
   */
  @ApiProperty({ description: 'Incoming price' })
  @Column({ type: DataType.FLOAT, field: 'incoming_price' })
  @IsDecimal()
  incomingPrice: number;

  /**
   * Incoming stamp duty
   */
  @ApiProperty({ description: 'Incoming stamp duty' })
  @Column({ type: DataType.FLOAT, field: 'incoming_stamp_duty' })
  @IsDecimal()
  incomingStampDuty: number;

  /**
   * Loan amount
   */
  @ApiProperty({ description: 'Loan amount' })
  @Column({ type: DataType.FLOAT, field: 'loan_amount' })
  @IsDecimal()
  loanAmount: number;

  /**
   * Loan duration
   */
  @ApiProperty({ description: 'Loan duration' })
  @Column({ type: DataType.INTEGER, field: 'loan_duration' })
  loanDuration: number;

  /**
   * Monthly expenses
   */
  @ApiProperty({ description: 'Monthly expenses' })
  @Column({ type: DataType.FLOAT, field: 'monthly_expenses' })
  @IsDecimal()
  monthlyExpenses: number;

  /**
   * Outgoing address
   */
  @ApiProperty({ description: 'Outgoing address' })
  @Column({ type: DataType.STRING, field: 'outgoing_address' })
  @IsString()
  outgoingAddress: string;

  /**
   * Outgoing mortgage
   */
  @ApiProperty({ description: 'Outgoing mortgage' })
  @Column({ type: DataType.FLOAT, field: 'outgoing_mortgage' })
  @IsDecimal()
  outgoingMortgage: number;

  /**
   * Outgoing valuation
   */
  @ApiProperty({ description: 'Outgoing valuation' })
  @Column({ type: DataType.FLOAT, field: 'outgoing_valuation' })
  @IsDecimal()
  outgoingValuation: number;

  /**
   * Savings contribution
   */
  @ApiProperty({ description: 'Savings contribution' })
  @Column({ type: DataType.FLOAT, field: 'savings_contribution' })
  @IsDecimal()
  savingsContribution: number;

  /**
   * The date the row was created
   */
  @ApiProperty({ description: 'The date the row was created', type: Date, format: 'date-time' })
  @Column({
    field: 'created_at',
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  @IsDate()
  createdAt: Date;

  /**
   * The date the row was last modified
   */
  @ApiProperty({ description: 'The date the row was last modified', type: Date, format: 'date-time' })
  @Column({
    field: 'updated_at',
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  @IsDate()
  updatedAt: Date;
}
