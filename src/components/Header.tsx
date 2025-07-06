import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import SavingsIcon from '@mui/icons-material/Savings';

const Header: React.FC = () => (
  <Box
    sx={{
      background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)',
      borderRadius: 3,
      py: 3,
      px: 4,
      mb: 4,
      color: 'white',
      boxShadow: 3,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
    }}
  >
    <SavingsIcon sx={{ fontSize: 40 }} />
    <Typography variant='h4' fontWeight='bold'>
      Household Expenses
    </Typography>
  </Box>
);

export default Header;
