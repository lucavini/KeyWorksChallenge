import React from 'react';
// components
import IconButton from '@mui/material/IconButton';

// styles
import { CustomDrawer } from './styles';

// assets
import { ReactComponent as Suitcase } from '../../Assets/icons/Suitcase.svg';
import { ReactComponent as Arrow } from '../../Assets/icons/Arrow.svg';

function MenuBacklog() {
  const [open, setOpen] = React.useState(false);

  return (
    <CustomDrawer open={open}>
      <IconButton size='large'>
        <Suitcase className='icon' />
      </IconButton>

      <IconButton size='medium' onClick={() => setOpen(!open)}>
        <Arrow className='icon arrow' />
      </IconButton>

      <div className='note'>3</div>
    </CustomDrawer>
  );
}

export default MenuBacklog;
