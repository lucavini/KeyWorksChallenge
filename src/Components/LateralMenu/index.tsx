import React from 'react';

// Components
import List from '@mui/material/List';
import Tooltip from '@mui/material/Tooltip';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';

// styles
import { Drawer, AddCard } from './styles';

// Assets
import logoProject from '../../Assets/images/logoProject.png';
import { ReactComponent as MenuIcon } from '../../Assets/icons/menuIcon.svg';
import { ReactComponent as GridIcon } from '../../Assets/icons/grid.svg';
import { ReactComponent as Cadastrar } from '../../Assets/icons/Cadastrar.svg';
import { ReactComponent as FileChart } from '../../Assets/icons/fileChart.svg';
import { ReactComponent as Configurar } from '../../Assets/icons/Configurar.svg';
import { ReactComponent as Notificacao } from '../../Assets/icons/notificacao.svg';
import { ReactComponent as CalendarClock } from '../../Assets/icons/calendarClock.svg';
import { ReactComponent as BullseyeArrow } from '../../Assets/icons/bullseyeArrow.svg';

function LateralMenu() {
  const [addCartHover, setAddCartHover] = React.useState(false);

  return (
    <div>
      <Drawer variant='permanent' anchor='left'>
        <img className='logo' src={logoProject} alt='logoProject' />

        <List>
          <ListItem button className='item'>
            <ListItemIcon>
              <MenuIcon className='icon' />
            </ListItemIcon>
          </ListItem>

          <ListItem button className='item'>
            <Tooltip title='Dashboard' placement='right-end'>
              <ListItemIcon>
                <GridIcon className='icon' />
              </ListItemIcon>
            </Tooltip>
          </ListItem>

          <ListItem button className='item'>
            <Tooltip title='Notificações' placement='right-end'>
              <ListItemIcon>
                <Notificacao className='icon' />
              </ListItemIcon>
            </Tooltip>
          </ListItem>

          <ListItem button className='item'>
            <Tooltip title='Gestão de Tempo' placement='right-end'>
              <ListItemIcon>
                <CalendarClock className='icon' />
              </ListItemIcon>
            </Tooltip>
          </ListItem>

          <ListItem button className='item'>
            <Tooltip title='Gestão de Processos' placement='right-end'>
              <ListItemIcon>
                <BullseyeArrow className='icon' />
              </ListItemIcon>
            </Tooltip>
          </ListItem>

          <ListItem button className='item'>
            <Tooltip title='Relatórios' placement='right-end'>
              <ListItemIcon>
                <FileChart className='icon' />
              </ListItemIcon>
            </Tooltip>
          </ListItem>

          <ListItem button className='item'>
            <Tooltip title='Cadastros' placement='right-end'>
              <ListItemIcon>
                <Cadastrar className='icon' />
              </ListItemIcon>
            </Tooltip>
          </ListItem>

          <ListItem button className='item'>
            <Tooltip title='Parâmetros' placement='right-end'>
              <ListItemIcon>
                <Configurar className='icon' />
              </ListItemIcon>
            </Tooltip>
          </ListItem>
        </List>

        <div>
          <AddCard
            className='item'
            onMouseOver={() => setAddCartHover(true)}
            onMouseOut={() => setAddCartHover(false)}
          >
            {addCartHover ? '+ CRIAR CARD' : '+'}
          </AddCard>
        </div>
      </Drawer>
    </div>
  );
}

export default LateralMenu;
