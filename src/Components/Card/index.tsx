/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import moment from 'moment';

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
  id: string;
  index: number;
  title: string;
  activity: string;
  typeProject: string;
  description: string;
  date: Date | null;
};

function Card({
  id,
  index,
  title,
  activity,
  typeProject,
  description,
  date,
}: Props) {
  const now = new Date();
  const diff = moment(date, 'DD/MM/YYYY HH:mm:ss').diff(moment(now, 'DD/MM/YYYY HH:mm:ss'));
  const days = moment.duration(diff).asDays();

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <CardProject
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Header>
            <Type>{activity}</Type>
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
                <span className='date'>
                  {moment(date).format('DD/MM/YYYY')}
                </span>
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
            <Status days={days}>
              {days > 5 ? 'Em dia' : days >= 0.5 ? 'Atenção' : 'Em Atraso'}
            </Status>
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
      )}
    </Draggable>
  );
}

export default Card;
