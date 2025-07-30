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
import AddCircleIcon from '@mui/icons-material/AddCircle';
import type { AddExpenseProps } from '../types';
import StyledAddExpenseHeader from './styled/StyledAddExpenseHeader';

const AddExpense: React.FC<AddExpenseProps> = ({
  categories,
  newExpense,
  setNewExpense,
  addExpense,
}) => {
  const isDisabled = newExpense.category === '' || !newExpense.amount;
  return (
    <Grid>
      <Card sx={{ boxShadow: 4 }}>
        <CardContent>
          <StyledAddExpenseHeader>
            <AddCircleIcon color='primary' />
            <Typography variant='h6' fontWeight='bold'>
              Add Expense
            </Typography>
          </StyledAddExpenseHeader>
          <FormControl fullWidth margin='normal' variant='outlined'>
            <InputLabel id='category-label'>Category</InputLabel>
            <Select
              labelId='category-label'
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
            variant='outlined'
            value={newExpense.amount === 0 ? '' : newExpense.amount}
            onChange={(e) => {
              // Remove all leading zeros except for '0'
              const value = e.target.value.replace(/^0+(?!$)/, '');
              setNewExpense({
                ...newExpense,
                amount: value === '' ? 0 : Number(value),
              });
            }}
            inputProps={{ min: 0 }}
          />
          <TextField
            fullWidth
            margin='normal'
            label='Note'
            variant='outlined'
            value={newExpense.note}
            onChange={(e) =>
              setNewExpense({ ...newExpense, note: e.target.value })
            }
          />
          <DatePicker
            label='Date'
            value={newExpense.date}
            format='dd-MM-yyyy'
            onChange={(date) =>
              setNewExpense({ ...newExpense, date: date || new Date() })
            }
          />
          <Button
            variant='contained'
            fullWidth
            sx={{ mt: 2, py: 1.2, fontWeight: 'bold', fontSize: 16 }}
            onClick={addExpense}
            disabled={isDisabled}
            startIcon={<AddCircleIcon />}
          >
            Add Expense
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default AddExpense;
