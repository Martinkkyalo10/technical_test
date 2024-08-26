import { get, post, type HttpGetRoute, type HttpPostRoute } from './_fetch';
import type { ApiSchema } from '@/types';
import type { operations } from '@/types/schemas/api';
export type BrokerApplicationsListQueryDto = operations['BrokerApplicationsListController_find']['parameters']['query'];
export type BrokerApplicationsListResponseDto = ApiSchema['BrokerApplicationsListResponseDto'];

export type BrokerApplicationsPostDto = operations['BrokerApplicationsListController_find']['parameters']['payload']
export type BrokerApplicationsPostResponseDto = ApiSchema['BrokerApplicationsPostResponseDto'];

export default {
  list: async (query?: BrokerApplicationsListQueryDto): Promise<BrokerApplicationsListResponseDto> => {
    const data = await get<BrokerApplicationsListQueryDto, BrokerApplicationsListResponseDto>(
      <HttpGetRoute>'/brokers/applications/list-applications',
      query,
    );
    return data;
  },
  post: async (payload: BrokerApplicationsPostDto): Promise<BrokerApplicationsPostResponseDto> => {
    const data = await post<BrokerApplicationsPostDto, BrokerApplicationsPostDto, BrokerApplicationsPostResponseDto>(
      <HttpPostRoute>'/brokers/applications/create-applications',
      {},
      payload
    );
    return data;
  }
};


export interface LoanApplication {
  applicantName: string;
  applicantEmail: string;
  applicantMobilePhoneNumber: string;
  applicantAddress: string;
  annualIncomeBeforeTax: number;
  incomingAddress: string;
  incomingDeposit: number;
  incomingPrice: number;
  incomingStampDuty: number;
  loanAmount: number;
  loanDuration: number;
  monthlyExpenses: number;
  outgoingAddress: string;
  outgoingMortgage: number;
  outgoingValuation: number;
  savingsContribution: number;
}

export const submitLoanApplication = async (loanData: LoanApplication) => {
  try {
    const response = await fetch('/loans', {
      method: 'POST',
      body: JSON.stringify(loanData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to submit loan application');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in submitLoanApplication:', error);
    throw error;
  }
};