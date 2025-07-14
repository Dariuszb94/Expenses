import './App.css';
import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Dialog,
  DialogContent,
  Tooltip,
  Zoom,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ExpenseList from './components/ExpenseList';
import Header from './components/Header';
import TotalSpent from './components/TotalSpent';
import AddExpense from './components/AddExpense';
import ExpensesChart from './components/ExpensesChart';
import BarChartIcon from '@mui/icons-material/BarChart';

import StyledFab from './components/styled/StyledFab';

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

  const [chartOpen, setChartOpen] = useState(false);

  const total = expenses.reduce(
    (sum: number, exp: { amount: number; date: string | Date }) => {
      const expDate = new Date(exp.date);
      const now = new Date();
      const isCurrentMonth =
        expDate.getFullYear() === now.getFullYear() &&
        expDate.getMonth() === now.getMonth();
      return isCurrentMonth ? sum + Number(exp.amount) : sum;
    },
    0
  );

  const addExpense = () => {
    if (!newExpense.category || newExpense.amount <= 0) return;
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
    setNewExpense({ category: '', amount: 0, date: new Date(), note: '' });
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Container maxWidth='md' sx={{ py: 4, position: 'relative' }}>
          <Header />
          <Tooltip
            title='Show Yearly Expenses Chart'
            arrow
            TransitionComponent={Zoom}
          >
            <StyledFab
              color='primary'
              aria-label='show chart'
              onClick={() => setChartOpen(true)}
            >
              <BarChartIcon sx={{ fontSize: 48, color: '#fff' }} />
            </StyledFab>
          </Tooltip>
          <Dialog
            open={chartOpen}
            onClose={() => setChartOpen(false)}
            maxWidth='md'
            fullWidth
          >
            <DialogContent>
              <ExpensesChart expenses={expenses} />
            </DialogContent>
          </Dialog>
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
