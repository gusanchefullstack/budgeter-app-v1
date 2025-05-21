import budgetController from "#controllers/budgetController.js";
import { Router } from "express";

const budgetRouter = Router();

budgetRouter.post("/", budgetController.createBudget);
budgetRouter.post("/categories", budgetController.createBudgetCategory);

export default budgetRouter;
