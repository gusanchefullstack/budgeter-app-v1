import { PrismaClient } from "#generated/prisma/client.js";
import { ITransactionDTO } from "#types/transaction.js";

const prisma = new PrismaClient();

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
