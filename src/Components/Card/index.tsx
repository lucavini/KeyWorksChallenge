/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

// Components
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { ReactComponent as Calendar } from '../../Assets/icons/Calendar.svg';
import { ReactComponent as Clock } from '../../Assets/icons/Clock.svg';

// Styles
import {
  CardProject,
  Type,
  Header,
  Title,
  Infos,
  Description,
  Following,
  Schedule,
  Status,
  Team,
  TeamCircle,
} from './styles';

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 178,
  },
});

// Usar a branch master, fazer pull, após isso rodar o comando "edge migration".

type Props = {
  title: string;
  typeActivity: string;
  typeProject: string;
  description: string;
};

function Card({ title, typeActivity, typeProject, description }: Props) {
  return (
    <CardProject>
      <Header>
        <Type>{typeActivity}</Type>
        <div className='code'>
          <p className='label'>Código:</p>
          <p className='code-number'>#12345</p>
        </div>
      </Header>

      <Title>{title}</Title>

      <Infos>
        <div className='project'>
          <p className='label'>Projeto:</p>
          <p className='project-name'>{typeProject}</p>
        </div>

        <div className='schedule'>
          <p className='label'>Prevista:</p>
          <p className='date-label'>
            <Calendar className='calendar' />
            <span className='date'>30/12/2021</span>
          </p>
        </div>
      </Infos>

      <Description>
        <p className='label'>Descrição:</p>
        <CustomWidthTooltip title={description} placement='right-end'>
          <p>{description}</p>
        </CustomWidthTooltip>
      </Description>

      <Following>
        <span>Acompanhamento</span>
      </Following>

      <Schedule>
        <div className='project'>
          <p className='label'>Previsto:</p>
          <p className='time'>
            <Clock className='icon' /> 00:30
          </p>
        </div>
        <Status>Em dia</Status>
      </Schedule>

      <Team>
        <div className='project'>
          <p className='label'>Saldo:</p>
          <p className='time'>
            <Clock className='icon' /> <span>+00:30</span>
          </p>
        </div>

        <div className='teams'>
          <p className='label'>Equipe:</p>
          <div className='teams-circles'>
            <TeamCircle>
              <span>AS</span>
            </TeamCircle>

            <TeamCircle>
              <span>PH</span>
            </TeamCircle>

            <TeamCircle>
              <span>WO</span>
            </TeamCircle>
          </div>
        </div>
      </Team>
    </CardProject>
  );
}

export default Card;
