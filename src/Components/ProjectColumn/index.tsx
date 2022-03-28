import React from 'react';

import Card from '../Card';

import { Column, Header } from './styles';

import { ReactComponent as Clock } from '../../Assets/icons/Clock.svg';

import { Project } from '../../Context/ProjectContext';

type Props = {
  columnTitle: string;
  Time: number;
  Total: number;
  projects: Project[];
};

function ProjectColumn({ columnTitle, Time, Total, projects }: Props) {
  return (
    <Column>
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
            title={ProjectCard.title}
            typeActivity={ProjectCard.typeActivity}
            typeProject={ProjectCard.typeProject}
            description={ProjectCard.description}
          />
        </React.Fragment>
      ))}
    </Column>
  );
}

export default ProjectColumn;
