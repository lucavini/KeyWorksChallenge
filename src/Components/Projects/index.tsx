import React from 'react';

import ProjectColumn from '../ProjectColumn';
import { Container } from './styles';

import { ProjectContext } from '../../Context/ProjectContext';

function Projects() {
  const { waiting, ongoing, pendency, finished, other } = React.useContext(ProjectContext);

  return (
    <Container>
      <ProjectColumn
        columnTitle='Aguardando'
        Time={1}
        Total={10}
        projects={waiting}
      />

      <ProjectColumn
        columnTitle='Em Andamento'
        Time={1}
        Total={10}
        projects={ongoing}
      />

      <ProjectColumn
        columnTitle='Pendência'
        Time={1}
        Total={10}
        projects={pendency}
      />

      <ProjectColumn
        columnTitle='Finalizado'
        Time={1}
        Total={10}
        projects={finished}
      />

      <ProjectColumn
        columnTitle='Outros'
        Time={1}
        Total={10}
        projects={other}
      />
    </Container>
  );
}

export default Projects;
