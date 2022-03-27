import { styled } from '@mui/material/styles';

export const Container = styled('main')`
  width: 100%;
  display: flex;
  position: relative;

  overflow-x: scroll;
  overflow-y: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

export const ContentBox = styled('div')`
  width: 100%;
  min-height: 100vh;
  margin-left: 65px;
  overflow-x: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;
