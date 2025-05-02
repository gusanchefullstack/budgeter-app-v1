import transactionController from "#controllers/transactionController.js";
import { Router } from "express";

const transactionRouter = Router();

transactionRouter.get("/", transactionController.getAllTransactions);
transactionRouter.post("/", transactionController.createTransaction);

export default transactionRouter;