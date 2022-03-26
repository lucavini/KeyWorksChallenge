import React from 'react';

import ProjectColumn from '../ProjectColumn';
import { Container } from './styles';

function Projects() {
  return (
    <Container>
      <ProjectColumn columnTitle='Aguardando' />
      <ProjectColumn columnTitle='Em Andamento' />
      <ProjectColumn columnTitle='Pendência' />
      <ProjectColumn columnTitle='Finalizado' />
      <ProjectColumn columnTitle='Outros' />
    </Container>
  );
}

export default Projects;
