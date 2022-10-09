import { FetchGetCreditsResponse } from '@requests/chat/fetch-get-credits';
import CreditReplyVariantsData from '@specs/models/reply-varians-data/credit';

export default class CreditsAdapter {
  static adaptGetCreditRequest(response: FetchGetCreditsResponse): CreditReplyVariantsData {
    return response;
  }
}
