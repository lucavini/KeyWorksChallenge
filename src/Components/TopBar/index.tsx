import React from 'react';

import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { ReactComponent as Search } from '../../Assets/icons/Search.svg';
import { ReactComponent as Clock } from '../../Assets/icons/Clock.svg';
import { ReactComponent as Filter } from '../../Assets/icons/Filter.svg';
import { ReactComponent as Bell } from '../../Assets/icons/Bell.svg';
import { ReactComponent as Group } from '../../Assets/icons/Group.svg';

import {
  Container,
  NavContainer,
  Infos,
  Title,
  Status,
  Controllers,
  SearchContainer,
  SearchIconWrapper,
  StyledInputBase,
  StyledButton,
} from './styles';

function TopBar() {
  return (
    <Container>
      <NavContainer>
        <Infos>
          <Title>Tarefas</Title>

          <div>
            <Clock className='icon' />
            <p>5h</p>
            <Status>10</Status>
          </div>
        </Infos>

        <Controllers>
          <SearchContainer>
            <SearchIconWrapper>
              <Search className='search' />
            </SearchIconWrapper>

            <StyledInputBase
              placeholder='Pesquisar por Tarefa...'
              inputProps={{ 'aria-label': 'search' }}
            />
          </SearchContainer>

          <StyledButton
            variant='contained'
            endIcon={<Filter className='icon' />}
          >
            FILTRO
          </StyledButton>

          <IconButton className='button' size='large'>
            <Badge
              badgeContent={2}
              color='info'
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
            >
              <Bell className='icon' />
            </Badge>
          </IconButton>

          <IconButton className='button' size='large'>
            <Group className='icon' />
          </IconButton>
        </Controllers>
      </NavContainer>
    </Container>
  );
}

export default TopBar;
