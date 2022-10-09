import { FetchGetCategoriesResponse } from '@requests/chat/fetch-get-categories';
import CategoryReplyVariantsData from '@specs/models/reply-varians-data/category';

export default class CategoriesAdapter {
  static adaptGetCategoryRequest(response: FetchGetCategoriesResponse): CategoryReplyVariantsData {
    const categories = response.categories.map(category => ({
      ...category,
      minSum: 50000,
      minTerm: 1,
    }));

    return {
      categories,
    };
  }
}
