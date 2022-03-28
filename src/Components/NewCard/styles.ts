import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

export const BoxModal = styled(Paper)`
  position: absolute;
  width: 800px;
  min-height: 400px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 15px 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  column-gap: 20px;
  row-gap: 20px;

  .firstColumn {
    grid-column: 1;
  }
  .secondColumn {
    grid-column: 2;
  }
  .fullColumn {
    grid-column: 1 / -1;
  }
`;

export const Title = styled('h1')`
  font-weight: 400;
  font-size: 28px;
`;
