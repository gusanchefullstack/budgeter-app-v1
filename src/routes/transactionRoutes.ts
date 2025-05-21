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
  body("conceptItem.name").exists().withMessage("Concept item name is required").isString().withMessage("Concept item name must be a string"),
  body("conceptItem.type")
    .exists()
    .withMessage("Concept item type is required")
    .isIn(["INCOME", "EXPENSE"])
    .withMessage("Concept item type must be a string"),
  body("conceptItem.frequency")
    .exists()
    .withMessage("Concept item frequency is required")
    .isIn(["ONE_TIME", "DAILY", "WEEKLY", "MONTHLY", "BI_WEEKLY", "QUARTERLY", "SEMI_ANUALLY", "ANUALLY"])
    .withMessage("Concept item frequency must be one of ONETIME, DAILY, WEEKLY, MONTHLY, BI_WEEKLY, QUARTERLY, SEMI_ANUALLY, ANUALLY"),
  body("ownerId").exists().withMessage("Owner id is required").isString().withMessage("Owner id must be a string"),
  inputValidator,
  transactionController.createTransaction,
);

export default transactionRouter;
