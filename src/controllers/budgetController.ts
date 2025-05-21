import budgetServices from "#services/budgetServices.js";
// eslint-disable-next-line perfectionist/sort-named-imports
import { IBudgetCreateDTO, IBudgetCategoryCreateDTO } from "#types/budget.js";
import { NextFunction, Request, Response } from "express";

const createBudgetCategory = async (req: Request, res: Response, next: NextFunction) => {
  const budgetCategory = req.body as IBudgetCategoryCreateDTO;
  try {
    const existingBudget = await budgetServices.readBudget(budgetCategory.budgetId);
    if(!existingBudget) res.json("Budget nof found. Please create a new budget first")
    const updatedBudget = await budgetServices.appendCategoryToBudget(budgetCategory);
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

export default { createBudget, createBudgetCategory };
