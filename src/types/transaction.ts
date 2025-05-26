export interface ITransaction {
  amount: number;
  date: Date;
  description: string;
  ownerId: string;  
  frequency: string;
  type: string;
  category: string;
  concept: string;
}
