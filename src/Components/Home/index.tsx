import React from 'react';

// Components
import LateralMenu from '../LateralMenu';
import LeftDrawer from '../LeftDrawer';

// styles
import { Container } from './styles';

function Home() {
  return (
    <Container>
      <LateralMenu />
      <LeftDrawer />
      inicio
    </Container>
  );
}

export default Home;
