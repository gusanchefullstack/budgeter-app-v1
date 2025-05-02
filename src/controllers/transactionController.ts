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
    const transaction = await transactionServices.createTransaction({ amount: amount, date: new Date(date) });
    res.json({ data: transaction, status: "success" });
  } catch (error) {
    next(error)
  }
};

export default { createTransaction, getAllTransactions }
