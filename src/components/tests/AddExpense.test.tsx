import React from 'react';
import { render, screen } from '@testing-library/react';
import AddExpense from '../AddExpense';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

describe('AddExpense', () => {
  const categories = ['Rent', 'Groceries'];
  const newExpense = { category: '', amount: 0, date: new Date(), note: '' };
  const setNewExpense = jest.fn();
  const addExpense = jest.fn();

  it('renders form fields and button', () => {
    render(
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <AddExpense
          categories={categories}
          newExpense={newExpense}
          setNewExpense={setNewExpense}
          addExpense={addExpense}
        />
      </LocalizationProvider>
    );
    expect(screen.getByLabelText(/Category/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Amount/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Note/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Add Expense/i })
    ).toBeInTheDocument();
  });
});
