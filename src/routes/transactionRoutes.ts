import transactionController from "#controllers/transactionController.js";
import { inputValidator } from "#middleware/inputErrorHandler.js";
import { Router } from "express";
import { body } from "express-validator";

const transactionRouter = Router();

transactionRouter.get("/", transactionController.getAllTransactions);
transactionRouter.post(
  "/",
  body("amount").exists().withMessage("Transaction amount is required").isNumeric().withMessage("Transaction amount must be a number"),
  body("date")
    .exists()
    .withMessage("Date of transaction is required")
    .isISO8601({ strict: true, strictSeparator: true })
    .withMessage("Transaction date must be a valid ISO8601 date. Strings with date and time separated by anything other than a T will be invalid"),
  body("description").exists().withMessage("Description is required").isString().withMessage("Description must be a string"),
  body("type")
    .exists()
    .withMessage("Concept type is required")
    .isIn(["incomes", "expenses"])
    .withMessage("Concept type must be a string incomes or expenses"),
  body("category").exists().withMessage("Concept category is required").isString().withMessage("Concept category must be a string"),
  body("concept").exists().withMessage("Concept name is required").isString().withMessage("Concept name must be a string"),
  body("ownerId").exists().withMessage("Owner id is required").isString().withMessage("Valid ownerId is required"),
  inputValidator,
  transactionController.createTransaction,
);

export default transactionRouter;
