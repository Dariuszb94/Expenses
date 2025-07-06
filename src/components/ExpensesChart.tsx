import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import type { Expense } from '../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ExpensesChartProps {
  expenses: Expense[];
}

const getLast12Months = () => {
  const months = [];
  const now = new Date();
  for (let i = 11; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    months.push(
      `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
    );
  }
  return months;
};

const ExpensesChart: React.FC<ExpensesChartProps> = ({ expenses }) => {
  const months = getLast12Months();
  const dataByMonth = months.map((m) => {
    const [year, month] = m.split('-').map(Number);
    return expenses
      .filter((e) => {
        const d = new Date(e.date);
        return d.getFullYear() === year && d.getMonth() + 1 === month;
      })
      .reduce((sum, e) => sum + Number(e.amount), 0);
  });

  const data = {
    labels: months,
    datasets: [
      {
        label: 'Expenses',
        data: dataByMonth,
        backgroundColor: 'rgba(33, 150, 243, 0.7)',
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Expenses in the Last 12 Months' },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <Card
      sx={{
        mt: 4,
        boxShadow: 6,
        border: '2px solid #1976d2',
        background: 'linear-gradient(120deg, #e3f2fd 0%, #bbdefb 100%)',
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Typography variant='h5' fontWeight='bold' color='primary'>
            <span role='img' aria-label='chart'>
              📊
            </span>{' '}
            Yearly Expenses Chart
          </Typography>
        </Box>
        <Box sx={{ p: 2, background: '#fff', borderRadius: 3, boxShadow: 2 }}>
          <Bar data={data} options={options} height={80} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ExpensesChart;
