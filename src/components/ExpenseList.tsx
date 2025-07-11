import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  Box,
} from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import type { ExpenseListProps } from '../types';

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => (
  <Card sx={{ mt: 4, boxShadow: 4 }}>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <CategoryIcon color='primary' />
        <Typography variant='h6' fontWeight='bold'>
          Expense List
        </Typography>
      </Box>
      <List>
        {expenses.map((exp, idx) => (
          <ListItem key={idx} divider sx={{ py: 1.5 }}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: '#1976d2', color: '#fff' }}>
                {exp.category[0]}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={exp.category}
              secondary={`$${exp.amount}`}
              primaryTypographyProps={{ fontWeight: 500 }}
              secondaryTypographyProps={{ color: '#1976d2', fontWeight: 600 }}
            />
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default ExpenseList;
