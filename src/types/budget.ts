/* eslint-disable perfectionist/sort-modules */
/* eslint-disable perfectionist/sort-interfaces */

import { CONCEPT_FREQUENCY, CONCEPT_TYPE } from "#generated/prisma/enums.js";

export interface IBudgetCreateDTO {
  name: string;
  ownerId: string;
  startDate: string;
  endDate: string;
}
export interface IBudgetCategoryCreateDTO {
  name: string;
  budgetId: string;
  type: CONCEPT_TYPE;
}
export interface ICategoryConceptDTO {
  name: string;
  type: CONCEPT_TYPE;
  frequency: CONCEPT_FREQUENCY;
  recurringBudgetAmount: number;
  category: string;
  budgetId: string;
}
