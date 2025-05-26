export interface ITransaction {
  amount: number;
  date: Date;
  description: string;
  ownerId: string;  
  type: string;
  category: string;
  concept: string;
}
