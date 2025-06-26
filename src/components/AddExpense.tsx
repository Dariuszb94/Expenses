import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import type { AddExpenseProps } from '../types';

const AddExpense: React.FC<AddExpenseProps> = ({
  categories,
  newExpense,
  setNewExpense,
  addExpense,
}) => {
  const isDisabled = newExpense.category === '' || !newExpense.amount;
  return (
    <Grid>
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
              setNewExpense({
                ...newExpense,
                amount: Number(e.target.value),
              })
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
          />
          <Button
            variant='contained'
            fullWidth
            sx={{ mt: 2 }}
            onClick={addExpense}
            disabled={isDisabled}
          >
            + Add Expense
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default AddExpense;
