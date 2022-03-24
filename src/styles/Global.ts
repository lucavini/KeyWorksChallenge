import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body{
        font-size: 16px;
        background: #fff};
        color:  ${({ theme }) => theme.palette.secondary.dark};
    }

    button{
        cursor: pointer;
    }
`;
