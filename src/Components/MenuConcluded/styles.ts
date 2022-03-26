import styled, { css } from 'styled-components';

interface Props {
  open: boolean;
}

export const CustomDrawer = styled.div<Props>`
  height: 100vh;
  padding: 20px 0;
  background: #fff;
  box-shadow: 0px 3px 6px #00000029;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all ease-in-out 0.2s;
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;

  ${({ open }) => css`
    width: ${open ? '200px' : '64px'};
    .arrow {
      transform: ${open ? 'rotate(-90deg)' : 'rotate(90deg)'};
    }
  `}

  .icon {
    fill: ${({ theme }) => theme.palette.primary.dark};
  }

  .note {
    width: 24px;
    height: 24px;
    margin-top: 10px;
    border-radius: 50px;
    background: ${({ theme }) => theme.palette.primary.dark};
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
