/* eslint-disable perfectionist/sort-objects */
import { prisma } from "../db.js";
import { IBudgetCategoryCreateDTO, IBudgetCreateDTO } from "../types/budget.js";

const readBudget = async (id: string) => {
  const budget = await prisma.budget.findUnique({
    where: {
      id,
    },
  });
  return budget;
};

const appendCategoryToBudget = async (category: IBudgetCategoryCreateDTO) => {
  const { budgetId, name, type } = category;
  const budgetCategory = { name, type };

  if (budgetCategory.type === "INCOME") {
    const updatedBudget = await prisma.budget.update({
      where: {
        id: budgetId,
      },
      data: {
        incomes: {
          push: budgetCategory,
        },
      },
      select: {
        id: true,
        name: true,
        ownerId: true,
        startDate: true,
        endDate: true,
        incomes: true,
        expenses: true,
      },
    });
    return updatedBudget;
  } else {
    const updatedBudget = await prisma.budget.update({
      where: {
        id: budgetId,
      },
      data: {
        expenses: {
          push: budgetCategory,
        },
      },
      select: {
        id: true,
        name: true,
        ownerId: true,
        startDate: true,
        endDate: true,
        incomes: true,
        expenses: true,
      },
    });
    return updatedBudget;
  }
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
      incomes: true,
      expenses: true,
    },
  });
  return newBudget;
};

export default { createBudget, readBudget, appendCategoryToBudget };
