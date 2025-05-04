import transactionController from "#controllers/transactionController.js";
import { inputValidator } from "#middleware/inputErrorHandler.js";
import { Router } from "express";
import { body } from "express-validator";

const transactionRouter = Router();

transactionRouter.get("/", transactionController.getAllTransactions);
transactionRouter.post(
  "/",
  body("amount").isNumeric().withMessage("Transaction amount must be a number"),
  body("date").isISO8601({ strict: true, strictSeparator: true }).withMessage("Transaction date must be a valid ISO8601 date"),
  inputValidator,
  transactionController.createTransaction,
);

export default transactionRouter;
