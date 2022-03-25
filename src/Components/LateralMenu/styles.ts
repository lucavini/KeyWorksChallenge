import { styled } from '@mui/material/styles';
import { Drawer as MuiDrawer } from '@mui/material';

const drawerWidth = 64;

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    boxShadow: '20px 35px 50px #0000001A',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: drawerWidth,
    padding: '5px 0px',
    boxSizing: 'border-box',
    background: theme.palette.primary.light,
  },

  '.logo': {
    width: '59px',
    height: '59px',
    borderRadius: '50px',
    boxShadow: '0px 3px 6px #00000029',
  },

  '.icon': {
    width: '20px',
    height: '20px',
    margin: '0 auto',
    fill: theme.palette.primary.dark,
    color: theme.palette.primary.dark,
  },

  '.item': {
    margin: '10px 0px',

    '&:hover .icon': {
      fill: '#fff',
      color: '#fff',
    },
  },
}));

export const AddCard = styled('div')`
  width: 30px;
  height: 30px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 50px;
  background: #d60297;
  color: #fff;
  box-shadow: 0px 3px 6px #00000029;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    width: 157px;
    height: 36px;
    border-radius: 10px;
    margin-left: -15px;
    position: fixed;
  }
`;
