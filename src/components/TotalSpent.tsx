import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import type { TotalSpentProps } from '../types';

const TotalSpent: React.FC<TotalSpentProps> = ({ total }) => (
  <Grid>
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
);

export default TotalSpent;
