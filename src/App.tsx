import './App.css';
import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ExpenseList from './components/ExpenseList';
import Header from './components/Header';
import TotalSpent from './components/TotalSpent';
import AddExpense from './components/AddExpense';

const categories = ['Rent', 'Groceries', 'Utilities', 'Transport'];

function App() {
  const [expenses, setExpenses] = useState(() => {
    const stored = localStorage.getItem('expenses');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const [newExpense, setNewExpense] = useState({
    category: '',
    amount: 0,
    date: new Date(),
    note: '',
  });

  const total = expenses.reduce(
    (sum: number, exp: { amount: number }) => sum + Number(exp.amount),
    0
  );

  const addExpense = () => {
    if (!newExpense.category || !newExpense.amount) return;
    setExpenses([...expenses, newExpense]);
    setNewExpense({ category: '', amount: 0, date: new Date(), note: '' });
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Container maxWidth='md' sx={{ py: 4 }}>
          <Header />
          <Grid container spacing={2}>
            <TotalSpent total={total} />
            <AddExpense
              categories={categories}
              newExpense={newExpense}
              setNewExpense={setNewExpense}
              addExpense={addExpense}
            />
          </Grid>
          <ExpenseList expenses={expenses} />
        </Container>
      </LocalizationProvider>
    </>
  );
}

export default App;
