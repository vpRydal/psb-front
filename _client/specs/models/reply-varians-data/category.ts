interface CategoryData {
  customer_category_id: number;
  name: string;
  /** максимальная сума кредитования */
  maxSum: number;
  /** минимальна сума кредитования */
  minSum: number;
  /** максимальный период кредитования */
  maxTerm: number;
  /** максимальный период кредитования */
  minTerm: number;
}

interface CategoryReplyVariantsData {
  categories: CategoryData[]
}

export default CategoryReplyVariantsData;

export type {
  CategoryData,
};
