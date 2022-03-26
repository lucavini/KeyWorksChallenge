import React from 'react';
// components
import IconButton from '@mui/material/IconButton';

// styles
import { CustomDrawer } from './styles';

// assets
import { ReactComponent as Split } from '../../Assets/icons/Split.svg';
import { ReactComponent as Arrow } from '../../Assets/icons/Arrow.svg';

function MenuDivider() {
  const [open, setOpen] = React.useState(false);

  return (
    <CustomDrawer open={open}>
      <IconButton size='large'>
        <Split className='icon' />
      </IconButton>

      <IconButton size='medium' onClick={() => setOpen(!open)}>
        <Arrow className='icon arrow' />
      </IconButton>

      <div className='note'>2</div>
    </CustomDrawer>
  );
}

export default MenuDivider;
