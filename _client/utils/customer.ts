import LoanType from '@specs/_misc/loan-type';
import CustomerType from '@specs/_misc/сustomer-type';

export default class CustomerUtils {
  static getCustomerLoanTypes() {
    return {
      [CustomerType.PRIVATE_PERSON]: [LoanType.CREDIT, LoanType.MORTGAGE, LoanType.CREDIT_CARD],
      [CustomerType.JURISTIC_PERSON]: [LoanType.REFINANCING],
    };
  }
}
