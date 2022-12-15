import React from 'react';

import ProjectColumn from '../ProjectColumn';
import { Container } from './styles';

import { ProjectContext } from '../../Context/ProjectContext';

function Projects() {
  const {
    waiting,
    ongoing,
    pendency,
    finished,
    other,
    getAllCards,
  } = React.useContext(ProjectContext);

  React.useEffect(() => {
    getAllCards();
  }, []);

  return (
    <Container>
      <ProjectColumn
        id='waiting'
        columnTitle='Aguardando'
        Time={1}
        Total={10}
        projects={waiting}
      />

      <ProjectColumn
        id='ongoing'
        columnTitle='Em Andamento'
        Time={1}
        Total={10}
        projects={ongoing}
      />

      <ProjectColumn
        id='pendency'
        columnTitle='Pendência'
        Time={1}
        Total={10}
        projects={pendency}
      />

      <ProjectColumn
        id='finished'
        columnTitle='Finalizado'
        Time={1}
        Total={10}
        projects={finished}
      />

      <ProjectColumn
        id='other'
        columnTitle='Outros'
        Time={1}
        Total={10}
        projects={other}
      />
    </Container>
  );
}

export default Projects;
