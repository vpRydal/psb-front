import api from '@api';
import LoanType from '@specs/_misc/loan-type';
import DefaultRequest from '@specs/_misc/request';
import CustomerType from '@specs/_misc/сustomer-type';
import CategoryReplyVariantsData from '@specs/models/reply-varians-data/category';

export interface FetchGetCategoriesParams {
  type_of_person: CustomerType;
  type_of_loan: LoanType;
}
export type FetchGetCategoriesResponse = CategoryReplyVariantsData
const fetchGetCategories = (params: FetchGetCategoriesParams) => api
  .get<DefaultRequest<FetchGetCategoriesResponse>>('customer-categories', {
    params,
  });

export default fetchGetCategories;
