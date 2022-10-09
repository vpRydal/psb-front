import CustomerType from '@specs/_misc/сustomer-type';

export interface CreditProductCustoemrCategory {
  id: number;
  title: string
}
export interface CreditProduct {
  id: number;
  title: string;
  details: string;
  interest_rate: number;
  maxSum: number;
  max_term_in_years: number;
  min_age: number;
  type_of_person: CustomerType;
  moth_amount: number;
  customer_category: CreditProductCustoemrCategory
}

interface CreditReplyVariantsData {
  products: CreditProduct[]
}

export default CreditReplyVariantsData;
