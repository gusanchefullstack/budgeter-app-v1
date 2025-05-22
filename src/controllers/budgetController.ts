import budgetServices from "#services/budgetServices.js";
// eslint-disable-next-line perfectionist/sort-named-imports
import { IBudgetCreateDTO, IBudgetCategoryCreateDTO, ICategoryConceptDTO } from "#types/budget.js";
import { NextFunction, Request, Response } from "express";

const createCategoryConcept = async (req: Request, res: Response, next: NextFunction) => {
  const categoryConcept = req.body as ICategoryConceptDTO;
  try {
    const updatedBudget = await budgetServices.addConceptToBudget(categoryConcept);
    res.json({ data: updatedBudget, status: "success" });
  } catch (error) {
    next(error);
  }
}

const createBudgetCategory = async (req: Request, res: Response, next: NextFunction) => {
  const budgetCategory = req.body as IBudgetCategoryCreateDTO;
  try {
    const updatedBudget = await budgetServices.addCategoryToBudget(budgetCategory);
    res.json({ data: updatedBudget, status: "success" });
  } catch (error) {
    next(error);
  }
}

const createBudget = async (req: Request, res: Response, next: NextFunction) => {
  const budget = req.body as IBudgetCreateDTO;
  try {
    const createdBudget = await budgetServices.createBudget(budget);
    res.json({ data: createdBudget, status: "success" });
  } catch (error) {
    next(error);
  }
};

export default { createBudget, createBudgetCategory, createCategoryConcept }