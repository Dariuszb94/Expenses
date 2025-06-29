import React from 'react';
import { render, screen } from '@testing-library/react';
import TotalSpent from '../TotalSpent';

describe('TotalSpent', () => {
  it('renders the total spent amount', () => {
    render(<TotalSpent total={1234} />);
    expect(screen.getByText(/Total Spent/i)).toBeInTheDocument();
    expect(screen.getByText('$1234')).toBeInTheDocument();
    expect(screen.getByText(/This Month/i)).toBeInTheDocument();
  });
});
