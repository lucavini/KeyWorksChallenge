import { styled, alpha, InputBase, Button } from '@mui/material/';

export const Container = styled('nav')`
  width: 100%;
  height: 64px;
  padding: 2px 128px 2px 16px;
  background: ${({ theme }) => theme.palette.primary.light};
`;

export const NavContainer = styled('div')`
  width: 100%;
  height: 100%;
  padding: 0px 10px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icon {
    width: 16px;
    height: 16px;
    fill: #748b75;
  }
`;

export const Infos = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    margin-top: 2px;
    margin-left: 32px;
    display: flex;
    align-items: center;
  }

  p {
    font-size: 14px;
    margin-left: 2px;
    color: #748b75;
  }
`;

export const Status = styled('span')`
  width: 20px;
  height: 20px;
  margin-left: 16px;
  border-radius: 50px;
  font-size: 12px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  background: #748b75;
`;

export const Title = styled('h2')`
  font-size: 25px;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.primary.dark};
`;

export const Controllers = styled('div')`
  display: flex;
  align-items: center;

  .icon {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.palette.primary.dark};
  }

  .bell {
    width: 26px;
    height: 32px;
  }

  .button {
    margin-left: 25px;
  }
`;

export const SearchContainer = styled('div')(({ theme }) => ({
  width: '552px',
  height: '48px',
  borderRadius: 5,
  boxShadow: '0px 3px 6px #00000029',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  display: 'flex',
  justifyContent: 'center',
  transition: '0.2s',

  '&:hover': {
    backgroundColor: '#0000000D',
    boxShadow: 'none',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '.search': {
    width: '16px',
    height: '23px',
    fill: theme.palette.primary.dark,
  },
}));

export const StyledInputBase = styled(InputBase)(() => ({
  width: '100%',
  height: '100%',
  paddingTop: '3px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 700,
  color: '#0000004D',
  transition: '0.2s',

  '&:hover': {
    color: '#00000080',
  },
}));

export const StyledButton = styled(Button)`
  height: 44px;
  margin-left: 24px;
  background: ${({ theme }) => theme.palette.primary.light};
  color: ${({ theme }) => theme.palette.primary.dark};
  font-weight: 700;
  .icon {
    transition: all ease-in-out 0.1s;
    fill: ${({ theme }) => theme.palette.primary.dark};
  }

  &:hover {
    background: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    .icon {
      fill: ${({ theme }) => theme.palette.primary.contrastText};
    }
  }
`;
