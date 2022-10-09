import { AxiosResponse } from 'axios';

import api from '@api';
import LoanType from '@specs/_misc/loan-type';
import DefaultRequest from '@specs/_misc/request';
import CustomerType from '@specs/_misc/сustomer-type';
import CreditReplyVariantsData from '@specs/models/reply-varians-data/credit';

export interface FetchGetCreditsParams {
  type_of_person: CustomerType;
  type_of_loan: LoanType;
  customer_category_id: number;
  term: number;
  sum: number;
}
export type FetchGetCreditsResponse = CreditReplyVariantsData
const fetchGetCredits = (params: FetchGetCreditsParams) => api
  .get<DefaultRequest<FetchGetCreditsResponse>>('get-loans', {
    params,
  });

/*
   new Promise<AxiosResponse<DefaultRequest<FetchGetCreditsResponse>>>(resolve => {
  setTimeout(() => {
    resolve({
      data: {
        success: true,
        code: 0,
        data: {
          products: [
            {
              id: 1,
              title: 'Кредит для клиентов с кредитной историей ПСБ',
              details: 'Ставка от 9,5%\nСумма до 5 млн ₽\nСрок до 7 лет\nС возможностью '
                + 'снижения ставки в течении кредитования\n\n*Предоставляется клиентам старше 21 года',
              interest_rate: 9.5,
              maxSum: 5000000,
              max_term_in_years: 7,
              min_age: 21,
              customer_category: {
                id: 1,
                title: 'Прочие',
              },
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              type_of_person: 'private',
              type_of_loan: 'credit',
              initial_payment_percent: null,
            },
            {
              id: 2,
              title: 'Кредит для держателей зарплатных карт',
              details: 'Процентная ставка от 6,5%\nСумма до 5 млн ₽\nСрок до 7 лет\nС во'
                + 'зможностью снижения ставки в течении кредитования\n\n*Предоставляется клиентам старше 21 года',
              interest_rate: 6.5,
              maxSum: 5000000,
              max_term_in_years: 7,
              min_age: 21,
              customer_category: {
                id: 1,
                title: 'Прочие',
              },
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              type_of_person: 'private',
              type_of_loan: 'credit',
              initial_payment_percent: null,
            },
            {
              id: 3,
              title: 'Кредит «Открытый рынок»',
              details: 'Процентная ставка от 14,5%\nСумма до 3 млн ₽\nСрок до 5 лет\nС во'
                + 'зможностью снижения ставки в течении кредитования\n\n*Предоставляется клиентам старше 23 лет',
              interest_rate: 14.5,
              maxSum: 10000000,
              max_term_in_years: 5,
              min_age: 21,
              customer_category: {
                id: 1,
                title: 'Прочие',
              },
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              type_of_person: 'private',
              type_of_loan: 'credit',
              initial_payment_percent: null,
            },
            {
              id: 4,
              title: 'Кредит для вкладчиков ПСБ',
              details: 'Процентная ставка от 9,5%\nСумма до 5 миллионов\nСрок до 7 лет\n\nС возм'
                + 'ожностью снижения ставки в течении кредитования\n\n*Предоставляется клиентам старше 23 лет',
              interest_rate: 9.5,
              maxSum: 5000000,
              max_term_in_years: 7,
              min_age: 21,
              customer_category: {
                id: 1,
                title: 'Прочие',
              },
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              type_of_person: 'private',
              type_of_loan: 'credit',
              initial_payment_percent: null,
            },
          ],
        },
      },
    });
  }, 3000);
})

   */

export default fetchGetCredits;
