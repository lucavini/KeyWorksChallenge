import styled from 'styled-components';

export const Container = styled.div`
  width: 93%;
  min-height: 80vh;
  margin-top: 40px;
  margin-left: 22px;
  padding-right: 80px;
  display: flex;

  overflow-x: scroll;
  overflow-y: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;
