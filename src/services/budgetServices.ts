/* eslint-disable perfectionist/sort-objects */

import { CONCEPT_TYPE } from "#generated/prisma/enums.js";

import { prisma } from "../db.js";
import { IBudgetCategoryCreateDTO, IBudgetCreateDTO, ICategoryConceptDTO } from "../types/budget.js";

const addConceptToBudget = async (concept: ICategoryConceptDTO) => {
  const { budgetId, name, type, frequency, recurringBudgetAmount, category } = concept;

  const budget = await prisma.budget.findUnique({
    where: {
      id: budgetId,
    },
  });
  if (type === CONCEPT_TYPE.incomes) {
    const categories = budget?.incomes.find((income) => income.name === category);
    categories?.concepts.push({
      name,
      frequency,
      recurringBudgetAmount,
      plannedRecurringAmounts: [],
      actualRecurringAmounts: [],
    });
    await prisma.budget.update({
      where: {
        id: budgetId,
      },
      data: {
        [type]: {
          deleteMany: {
            where:{
              name:category
            }
          },
        },
      },
    });
    const updatedBudget = await prisma.budget.update({
      where: {
        id: budgetId,
      },
      data: {
        [type]: {
          push: categories,
        },
      },
    });
    return updatedBudget;
  }
  if (type === CONCEPT_TYPE.expenses) {
    const categories = budget?.expenses.find((expense) => expense.name === category);
    categories?.concepts.push({
      name,
      frequency,
      recurringBudgetAmount,
      plannedRecurringAmounts: [],
      actualRecurringAmounts: [],
    });
    await prisma.budget.update({
      where: {
        id: budgetId,
      },
      data: {
        [type]: {
          deleteMany: {
            where:{
              name:category
            }
          },
        },
      },
    });
    const updatedBudget = await prisma.budget.update({
      where: {
        id: budgetId,
      },
      data: {
        [type]: {
          push: categories,
        },
      },
    });
    return updatedBudget;
  }
};

const addCategoryToBudget = async (category: IBudgetCategoryCreateDTO) => {
  const { budgetId, name, type } = category;
  const budget = await prisma.budget.update({
    where: {
      id: budgetId,
    },
    data: {
      [type]: {
        push: {
          name: name,
          concepts: [],
        },
      },
    },
  });
  return budget;
};

const createBudget = async (budget: IBudgetCreateDTO) => {
  const { name, ownerId, startDate, endDate } = budget;

  const newBudget = await prisma.budget.create({
    data: {
      name,
      ownerId,
      startDate,
      endDate,
    },
    select: {
      id: true,
      name: true,
      ownerId: true,
      startDate: true,
      endDate: true,
    },
  });
  return newBudget;
};

export default { createBudget, addCategoryToBudget, addConceptToBudget };
