import React from 'react';
import { Grid, Typography } from '@mui/material';

const Header: React.FC = () => (
  <Grid
    container
    justifyContent='space-between'
    alignItems='center'
    mb={3}
  >
    <Typography variant='h4' fontWeight='bold'>
      Household Expenses
    </Typography>
  </Grid>
);

export default Header;
