import React from 'react';

// Components
import Box from '@mui/material/Box';

// styles
import { Drawer } from './styles';

function LateralMenu() {
  return (
    <div>
      <Drawer variant='permanent' anchor='left'>
        <Box sx={{ overflowX: 'hidden' }}>a</Box>
      </Drawer>
    </div>
  );
}

export default LateralMenu;
