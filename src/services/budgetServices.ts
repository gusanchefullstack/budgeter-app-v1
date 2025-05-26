/* eslint-disable perfectionist/sort-objects */

import { CONCEPT_TYPE } from "#generated/prisma/enums.js";
import * as dateHandler from "typescript-calendar-date";
import { prisma } from "../db.js";
import { IBudgetCategoryCreateDTO, IBudgetCreateDTO, ICategoryConceptDTO } from "../types/budget.js";
import { periodsGenerator } from "./periodsGenerator.js";

const addConceptToBudget = async (concept: ICategoryConceptDTO) => {
  const { budgetId, name, type, frequency, recurringBudgetAmount, category } = concept;

  const budget = await prisma.budget.findUnique({
    where: { id: budgetId },
  });

  if (!budget) {
    throw new Error("Budget not found");
  }

  const categories =
    type === CONCEPT_TYPE.incomes
      ? budget.incomes.find((income) => income.categoryName === category)
      : budget.expenses.find((expense) => expense.categoryName === category);

  if (!categories) {
    throw new Error(`Category ${category} not found in ${type}`);
  }
  
  const periods = periodsGenerator(frequency, budget.startDate.toISOString(), budget.endDate.toISOString(), recurringBudgetAmount);
  const newConcept = {
    conceptName: name,
    frequency,
    plannedRecurringBudgetAmount: recurringBudgetAmount,
    recurringBudgetBuckets: periods,
  };

  
  
  categories.concepts.push(newConcept);

  // Primero eliminamos la categoría existente
  await prisma.budget.update({
    where: { id: budgetId },
    data: {
      [type]: {
        deleteMany: {
          where: { categoryName: category },
        },
      },
    },
  });

  // Luego actualizamos con la categoría modificada
  const updatedBudget = await prisma.budget.update({
    where: { id: budgetId },
    data: {
      [type]: {
        push: categories,
      },
    },
  });

  return updatedBudget;
};

const addCategoryToBudget = async (category: IBudgetCategoryCreateDTO) => {
  const { budgetId, name, type } = category;
  
  const budget = await prisma.budget.findUnique({
    where: { id: budgetId },
  });

  if (!budget) {
    throw new Error("Budget not found");
  }


  const categoryExists = await prisma.budget.findUnique({
    where: {
      id: budgetId,
      [type]: {
        some: {
          categoryName: name,
        },
      },
    },
  });

  if (categoryExists) {
    throw new Error(`Category ${name} already exists in ${type}`);
  }

    const updatedBudget = await prisma.budget.update({
    where: {
      id: budgetId,
    },
    data: {
      [type]: {
        push: {
          categoryName: name,
          concepts: [],
        },
      },
    },
  });
  return updatedBudget;
  
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
