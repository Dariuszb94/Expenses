import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('renders the header title', () => {
    render(<Header />);
    expect(screen.getByText(/Household Expenses/i)).toBeInTheDocument();
  });
});
