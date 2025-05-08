import { ITransactionDTO } from "#types/transaction.js";

import { prisma } from "../db.js";


const createTransaction = async (txData: ITransactionDTO) => {
  const transaction = await prisma.transaction.create({
    data: txData,
  });
  return transaction;
};

const getTransactions = async () => {
  const transactions = await prisma.transaction.findMany();
  return transactions;
};

export default { createTransaction, getTransactions };
