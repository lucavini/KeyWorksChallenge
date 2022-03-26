import React from 'react';
// components
import IconButton from '@mui/material/IconButton';

// styles
import { CustomDrawer } from './styles';

// assets
import { ReactComponent as CheckCircle } from '../../Assets/icons/CheckCircle.svg';
import { ReactComponent as Arrow } from '../../Assets/icons/Arrow.svg';

function MenuConcluded() {
  const [open, setOpen] = React.useState(false);

  return (
    <CustomDrawer open={open}>
      <IconButton size='large'>
        <CheckCircle className='icon' />
      </IconButton>

      <IconButton size='medium' onClick={() => setOpen(!open)}>
        <Arrow className='icon arrow' />
      </IconButton>

      <div className='note'>2</div>
    </CustomDrawer>
  );
}

export default MenuConcluded;
