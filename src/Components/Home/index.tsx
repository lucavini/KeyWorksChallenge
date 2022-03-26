import React from 'react';

// Components
import MenuBacklog from '../MenuBacklog';
import MenuDivider from '../MenuDivider';
import LateralMenu from '../LateralMenu';
import MenuConcluded from '../MenuConcluded';
import TopBar from '../TopBar';

// styles
import { Container, ContentBox } from './styles';

function Home() {
  return (
    <Container>
      <LateralMenu />
      <MenuBacklog />
      <ContentBox>
        <TopBar />
      </ContentBox>
      <MenuDivider />
      <MenuConcluded />
    </Container>
  );
}

export default Home;
