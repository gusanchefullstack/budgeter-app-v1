import { IConceptItem } from "./concepItem.js";
export interface ITransaction {
  amount: number;
  conceptItem: IConceptItem;
  date: Date;
  description: string;
  ownerId: string;
}
