import styled from 'styled-components';

export const Column = styled.div`
  width: 333px;
  min-height: 80vh;
  padding-bottom: 20px;
  background: #eaedea;
  box-shadow: 0px 8px 8px #00000029;
  border-radius: 8px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 16px;
    color: #fff;
    font-weight: 600;
  }

  div {
    display: flex;
  }

  .time {
    font-size: 14px;
    color: #fff;
    font-weight: 500;
    margin-left: 2px;
    margin-top: 1px;
  }
  .icon {
    width: 16px;
    height: 16px;
    margin-top: 2px;
    fill: #fff;
  }

  .total {
    width: 20px;
    height: 20px;
    border-radius: 50px;
    margin-left: 15px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: ${({ theme }) => theme.palette.primary.light};
    font-weight: 500;
  }
`;
