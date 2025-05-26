import transactionServices from "#services/transactionServices.js";
import { NextFunction, Request, Response } from "express";

const getAllTransactions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const transactions = await transactionServices.getTransactions();
    res.json({ data: transactions, status: "success" });
  } catch (error) {
    next(error);
  }
};

const createTransaction = async (req: Request, res: Response, next: NextFunction) => {
  try {
    
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    const  amount: number = req.body.amount;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const  date: string = req.body.date;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const ownerId: string = req.body.ownerId as string;
   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const description: string = req.body.description;
    const type: string = req.body.type;
    const category: string = req.body.category;
    const concept: string = req.body.concept;
    const transaction = await transactionServices.createTransaction({ amount: amount, type: type, category: category, concept: concept, date: new Date(date), description: description, ownerId: ownerId });
    res.json({ data: transaction, status: "success" });
  } catch (error) {
    next(error)
  }
};

export default { createTransaction, getAllTransactions }
