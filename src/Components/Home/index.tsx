/* eslint-disable operator-linebreak */
import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

// Components
import { ProjectContext } from '../../Context/ProjectContext';
import TopBar from '../TopBar';
import Projects from '../Projects';
import MenuBacklog from '../MenuBacklog';
import LateralMenu from '../LateralMenu';
import MenuDivider from '../MenuDivider';
import MenuConcluded from '../MenuConcluded';

// styles
import { Container, ContentBox } from './styles';

function Home() {
  const { waiting, setWaiting } = React.useContext(ProjectContext);
  const OnDragend = (result: DropResult) => {
    const { destination, source } = result;

    // lugar nenhum
    if (!destination) {
      return;
    }

    // mesma localização
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = Array.from(waiting);
    const [newArray] = column.splice(source.index, 1);
    column.splice(destination.index, 0, newArray);

    setWaiting(column);
  };

  return (
    <DragDropContext onDragEnd={OnDragend}>
      <Container>
        <LateralMenu />
        <MenuBacklog />
        <ContentBox>
          <TopBar />
          <Projects />
        </ContentBox>
        <MenuDivider />
        <MenuConcluded />
      </Container>
    </DragDropContext>
  );
}

export default Home;
