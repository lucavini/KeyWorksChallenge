import { styled } from '@mui/material/styles';
import { Drawer as MuiDrawer } from '@mui/material';

const drawerWidth = 64;

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(() => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
}));
