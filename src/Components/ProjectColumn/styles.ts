import styled from 'styled-components';

export const Column = styled.div`
  width: 333px;
  min-height: 960px;
  background: #eaedea;
  box-shadow: 0px 8px 8px #00000029;
  border-radius: 8px;
  flex-shrink: 0;

  & + & {
    margin-left: 24px;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 8px 0px;
  padding: 0 16px;
  background: ${({ theme }) => theme.palette.primary.light};
  display: flex;
  align-items: center;

  h2 {
    font-size: 16px;
    color: #fff;
    font-weight: 600;
  }
`;
