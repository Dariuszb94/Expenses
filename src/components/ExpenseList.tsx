import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

interface Expense {
  category: string;
  amount: number;
  date?: Date;
  note?: string;
}

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => (
  <Card sx={{ mt: 4 }}>
    <CardContent>
      <Typography variant='h6' mb={2}>
        Expense List
      </Typography>
      <List>
        {expenses.map((exp, idx) => (
          <ListItem key={idx} divider>
            <ListItemText primary={exp.category} secondary={`$${exp.amount}`} />
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default ExpenseList;
