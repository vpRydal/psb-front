import { AxiosResponse } from 'axios';

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
const fetchGetCategories = (params: FetchGetCategoriesParams) => new
Promise<AxiosResponse<DefaultRequest<FetchGetCategoriesResponse>>>(resolve => {
  setTimeout(() => {
    resolve({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      data: {
        data: {
          categories: [
            {
              maxSum: 10000000000,
              maxTerm: 10,
              minSum: 0,
              name: 'Военнослужащий',
              minTerm: 1,
              id: 1,
            },
          ],
        },
      },
    });
  }, 3000);
}); /* api.get<DefaultRequest<FetchGetCategoriesResponse>>('hello', {
  params,
}) */

export default fetchGetCategories;
