/* eslint-disable no-useless-return */
/* eslint-disable dot-notation */
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
  const { Columns } = React.useContext(ProjectContext);
  const OnDragend = (result: DropResult) => {
    const { destination, source } = result;
    const param = source.droppableId;
    const obj = {
      waiting: '',
      ongoing: '',
      pendency: '',
      finished: '',
      other: '',
    };

    // Draging to nowhere
    if (!destination) {
      return;
    }

    // Draging to same place
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Draging to same column
    const start = source.droppableId;
    const finish = destination.droppableId;
    if (start === finish) {
      const column = Array.from(Columns[param as keyof typeof obj].state);
      const [newArray] = column.splice(source.index, 1);
      column.splice(destination.index, 0, newArray);
      Columns[param as keyof typeof obj].setState(column);
      return;
    }

    // Moving to a diferent column
    const startColumn = Array.from(Columns[start as keyof typeof obj].state);
    const [newStart] = startColumn.splice(source.index, 1);

    const finishinColumn = Array.from(Columns[finish as keyof typeof obj].state);
    finishinColumn.splice(destination.index, 0, newStart);

    Columns[start as keyof typeof obj].setState(startColumn);
    Columns[finish as keyof typeof obj].setState(finishinColumn);
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
