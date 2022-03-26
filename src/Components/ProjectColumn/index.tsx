import React from 'react';

import { Column, Header } from './styles';

type Props = {
  columnTitle: string;
};

function ProjectColumn({ columnTitle }: Props) {
  return (
    <Column>
      <Header>
        <h2>{columnTitle}</h2>
      </Header>
    </Column>
  );
}

export default ProjectColumn;
