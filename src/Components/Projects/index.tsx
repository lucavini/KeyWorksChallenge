import React from 'react';

import ProjectColumn from '../ProjectColumn';
import { Container } from './styles';

function Projects() {
  return (
    <Container>
      <ProjectColumn columnTitle='Aguardando' Time={1} Total={10} />
      <ProjectColumn columnTitle='Em Andamento' Time={1} Total={10} />
      <ProjectColumn columnTitle='Pendência' Time={1} Total={10} />
      <ProjectColumn columnTitle='Finalizado' Time={1} Total={10} />
      <ProjectColumn columnTitle='Outros' Time={1} Total={10} />
    </Container>
  );
}

export default Projects;
