/* eslint-disable perfectionist/sort-modules */
/* eslint-disable perfectionist/sort-interfaces */

export interface IBudgetCreateDTO {
  name: string;
  ownerId: string;
  startDate: string;
  endDate: string;
}
export interface IBudgetCategoryCreateDTO {
  name: string;
  type: string;
  budgetId: string;
}
