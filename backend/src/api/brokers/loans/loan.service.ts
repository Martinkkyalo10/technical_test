import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Loan } from './loan.model';
import { CreateLoanDto } from './dto/create-loan.dto';

@Injectable()
export class LoanService {
  constructor(
    @InjectModel(Loan)
    private readonly loanModel: typeof Loan,
  ) {}

  // Create a new loan
  async createLoan(createLoanDto: CreateLoanDto): Promise<Loan> {
    return this.loanModel.create(createLoanDto);
  }

  // Compare the new loan amount with the average loan amount
  async compareLoanAmount(newLoanAmount: number) {
    const totalLoanAmount = await this.loanModel.sum('loanAmount');
    const loanCount = await this.loanModel.count();
    const averageLoanAmount = totalLoanAmount / loanCount;

    const comparison = newLoanAmount > averageLoanAmount ? 'above' : 'below';
    return { averageLoanAmount, comparison };
  }
}
