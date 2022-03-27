import React from 'react';

import Card from '../Card';

import { Column, Header } from './styles';

import { ReactComponent as Clock } from '../../Assets/icons/Clock.svg';

type Props = {
  columnTitle: string;
  Time: number;
  Total: number;
};

function ProjectColumn({ columnTitle, Time, Total }: Props) {
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

      <Card />
    </Column>
  );
}

export default ProjectColumn;
