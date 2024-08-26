import { Controller, Post, Body, HttpStatus, Res } from '@nestjs/common';
import { LoanService } from './loan.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { Response } from 'express';

@Controller('loans')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Post()
  async submitLoan(@Body() createLoanDto: CreateLoanDto, @Res() res: Response) {
    try {
      // Save the new loan
      const newLoan = await this.loanService.createLoan(createLoanDto);

      // Calculate the average loan amount
      const { averageLoanAmount, comparison } = await this.loanService.compareLoanAmount(newLoan.loanAmount);

      return res.status(HttpStatus.CREATED).json({
        success: true,
        message: `The new loan's loan amount is ${comparison} the average.`,
        data: {
          newLoan,
          averageLoanAmount,
          comparison,
        },
      });
    } catch (error) {
      console.error('Error submitting loan:', error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: 'An error occurred while submitting the loan.',
      });
    }
  }
}
