import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  List,
  ListItem,
  ListItemText,
  Grid,
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const categories = ['Rent', 'Groceries', 'Utilities', 'Transport'];

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState([
    { category: 'Rent', amount: 800 },
    { category: 'Groceries', amount: 300 },
    { category: 'Utilities', amount: 150 },
    { category: 'Transport', amount: 200 },
  ]);

  const [newExpense, setNewExpense] = useState({
    category: '',
    amount: 0,
    date: new Date(),
    note: '',
  });

  const total = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);

  const addExpense = () => {
    if (!newExpense.category || !newExpense.amount) return;
    setExpenses([...expenses, newExpense]);
    setNewExpense({ category: '', amount: '', date: new Date(), note: '' });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth='md' sx={{ py: 4 }}>
        <Grid
          container
          justifyContent='space-between'
          alignItems='center'
          mb={3}
        >
          <Typography variant='h4' fontWeight='bold'>
            Household Expenses
          </Typography>
          <Button variant='outlined'>Settings</Button>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant='h6'>Total Spent</Typography>
                <Typography variant='h4' mt={2}>
                  ${total}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  This Month
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant='h6' mb={2}>
                  Add Expense
                </Typography>
                <FormControl fullWidth margin='normal'>
                  <InputLabel>Category</InputLabel>
                  <Select
                    value={newExpense.category}
                    onChange={(e) =>
                      setNewExpense({ ...newExpense, category: e.target.value })
                    }
                    label='Category'
                  >
                    {categories.map((cat) => (
                      <MenuItem key={cat} value={cat}>
                        {cat}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  margin='normal'
                  type='number'
                  label='Amount'
                  value={newExpense.amount}
                  onChange={(e) =>
                    setNewExpense({ ...newExpense, amount: e.target.value })
                  }
                />
                <TextField
                  fullWidth
                  margin='normal'
                  label='Note'
                  value={newExpense.note}
                  onChange={(e) =>
                    setNewExpense({ ...newExpense, note: e.target.value })
                  }
                />
                <DatePicker
                  label='Date'
                  value={newExpense.date}
                  onChange={(date) =>
                    setNewExpense({ ...newExpense, date: date || new Date() })
                  }
                  renderInput={(params) => (
                    <TextField {...params} fullWidth margin='normal' />
                  )}
                />
                <Button
                  variant='contained'
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={addExpense}
                >
                  + Add Expense
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant='h6' mb={2}>
              Expense List
            </Typography>
            <List>
              {expenses.map((exp, idx) => (
                <ListItem key={idx} divider>
                  <ListItemText
                    primary={exp.category}
                    secondary={`$${exp.amount}`}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Container>
    </LocalizationProvider>
  );
}
