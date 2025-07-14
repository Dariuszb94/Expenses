import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';

const StyledFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: 40,
  right: 40,
  zIndex: 1200,
  boxShadow: theme.shadows[6],
  width: 88,
  height: 88,
  border: '4px solid #1976d2',
  background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default StyledFab;
