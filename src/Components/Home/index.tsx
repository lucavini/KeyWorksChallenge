import React from 'react';

// Components
import TopBar from '../TopBar';
import Projects from '../Projects';
import MenuBacklog from '../MenuBacklog';
import LateralMenu from '../LateralMenu';
// import MenuDivider from '../MenuDivider';
// import MenuConcluded from '../MenuConcluded';

// styles
import { Container, ContentBox } from './styles';

function Home() {
  return (
    <Container>
      <LateralMenu />
      <MenuBacklog />
      <ContentBox>
        <TopBar />
        <Projects />
      </ContentBox>
      {/* <MenuDivider />
      <MenuConcluded /> */}
    </Container>
  );
}

export default Home;
