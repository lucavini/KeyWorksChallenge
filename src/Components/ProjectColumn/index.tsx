/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Droppable } from 'react-beautiful-dnd';

// Components
import Card from '../Card';
import { ReactComponent as Clock } from '../../Assets/icons/Clock.svg';

// styles
import { Column, Header } from './styles';

// Utils
import { Project } from '../../Context/ProjectContext';

type Props = {
  id: string;
  columnTitle: string;
  Time: number;
  Total: number;
  projects: Project[];
};

function ProjectColumn({ id, columnTitle, Time, Total, projects }: Props) {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <Column ref={provided.innerRef} {...provided.droppableProps}>
          <Header>
            <h2>{columnTitle}</h2>
            <div>
              <Clock className='icon' />
              <p className='time'>{Time}h</p>
              <p className='total'>{Total}</p>
            </div>
          </Header>

          {projects?.map((ProjectCard, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={index}>
              <Card
                id={ProjectCard.id}
                index={index}
                date={ProjectCard.date}
                title={ProjectCard.title}
                typeActivity={ProjectCard.typeActivity}
                typeProject={ProjectCard.typeProject}
                description={ProjectCard.description}
              />
            </React.Fragment>
          ))}

          {provided.placeholder}
        </Column>
      )}
    </Droppable>
  );
}

export default ProjectColumn;
