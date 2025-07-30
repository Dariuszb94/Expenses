import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const StyledAddExpenseHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

export default StyledAddExpenseHeader;
