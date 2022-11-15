import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 700px;
  min-height: 350px;
  padding: 25px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 10px ${({ theme }) => theme.palette.secondary.main};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h2 {
    font-size: 26px;
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 600;
  }

  form {
    margin-top: 20px;
    width: 70%;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
  }

`;
