export interface Expense {
  category: string;
  amount: number;
  date: Date;
  note: string;
}

export interface AddExpenseProps {
  categories: string[];
  newExpense: Expense;
  setNewExpense: (expense: Expense) => void;
  addExpense: () => void;
}

export interface ExpenseListProps {
  expenses: Expense[];
}

export interface TotalSpentProps {
  total: number;
}
