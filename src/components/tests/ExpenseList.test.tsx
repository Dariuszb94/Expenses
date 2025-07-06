import React from 'react';
import { render, screen } from '@testing-library/react';
import ExpenseList from '../ExpenseList';

describe('ExpenseList', () => {
  it('renders a list of expenses', () => {
    const expenses = [
      { category: 'Rent', amount: 1000, date: new Date(), note: '' },
      { category: 'Groceries', amount: 200, date: new Date(), note: '' },
    ];
    render(<ExpenseList expenses={expenses} />);
    expect(screen.getByText('Rent')).toBeInTheDocument();
    expect(screen.getByText('Groceries')).toBeInTheDocument();
    expect(screen.getByText('$1000')).toBeInTheDocument();
    expect(screen.getByText('$200')).toBeInTheDocument();
  });
});
