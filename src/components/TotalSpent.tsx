import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import PaidIcon from '@mui/icons-material/Paid';
import type { TotalSpentProps } from '../types';

const TotalSpent: React.FC<TotalSpentProps> = ({ total }) => (
  <Grid>
    <Card
      sx={{
        background: 'linear-gradient(90deg, #e3f2fd 0%, #bbdefb 100%)',
        color: '#1976d2',
        border: 0,
        boxShadow: 3,
        minWidth: 220,
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <PaidIcon sx={{ fontSize: 32, color: '#1976d2' }} />
          <Typography variant='h6'>Total Spent</Typography>
        </Box>
        <Typography variant='h3' mt={2} fontWeight='bold'>
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
