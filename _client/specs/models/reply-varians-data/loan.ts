import LoanType from '@specs/_misc/loan-type';

type LoanReplyVariantsData = (typeof LoanType[keyof typeof LoanType])[]

export default LoanReplyVariantsData;
