import React from 'react';

// Components
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';

// styles
import { Drawer, AddCard } from './styles';

// Assets
import logoProject from '../../Assets/images/logoProject.png';
import { ReactComponent as MenuIcon } from '../../Assets/icons/menuIcon.svg';
import { ReactComponent as GridIcon } from '../../Assets/icons/grid.svg';
import { ReactComponent as BullseyeArrow } from '../../Assets/icons/bullseyeArrow.svg';
import { ReactComponent as Cadastrar } from '../../Assets/icons/Cadastrar.svg';
import { ReactComponent as CalendarClock } from '../../Assets/icons/calendarClock.svg';
import { ReactComponent as Configurar } from '../../Assets/icons/Configurar.svg';
import { ReactComponent as FileChart } from '../../Assets/icons/fileChart.svg';
import { ReactComponent as Notificacao } from '../../Assets/icons/notificacao.svg';

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
            <ListItemIcon>
              <GridIcon className='icon' />
            </ListItemIcon>
          </ListItem>

          <ListItem button className='item'>
            <ListItemIcon>
              <Notificacao className='icon' />
            </ListItemIcon>
          </ListItem>

          <ListItem button className='item'>
            <ListItemIcon>
              <CalendarClock className='icon' />
            </ListItemIcon>
          </ListItem>

          <ListItem button className='item'>
            <ListItemIcon>
              <BullseyeArrow className='icon' />
            </ListItemIcon>
          </ListItem>

          <ListItem button className='item'>
            <ListItemIcon>
              <FileChart className='icon' />
            </ListItemIcon>
          </ListItem>

          <ListItem button className='item'>
            <ListItemIcon>
              <Cadastrar className='icon' />
            </ListItemIcon>
          </ListItem>

          <ListItem button className='item'>
            <ListItemIcon>
              <Configurar className='icon' />
            </ListItemIcon>
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
