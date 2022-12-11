import React from 'react';

import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ReactComponent as Search } from '../../Assets/icons/Search.svg';
import { ReactComponent as Clock } from '../../Assets/icons/Clock.svg';
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
import { useAuth } from '../../Context/authContext';
import { ProjectContext } from '../../Context/ProjectContext';

function TopBar() {
  const { user, handleLogout } = useAuth();
  const { setIsPersonal } = React.useContext(ProjectContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Container>
      <NavContainer>
        <Infos>
          <Title>Tarefas</Title>

          <div>
            <Clock className="icon" />
            <p>5h</p>
            <Status>10</Status>
          </div>
        </Infos>

        <Controllers>
          <SearchContainer>
            <SearchIconWrapper>
              <Search className="search" />
            </SearchIconWrapper>

            <StyledInputBase
              placeholder="Pesquisar por Tarefa..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </SearchContainer>

          <IconButton className="button" size="large">
            <Badge
              badgeContent={2}
              color="info"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
            >
              <Bell className="icon bell" />
            </Badge>
          </IconButton>

          <IconButton className="button" size="large">
            <Group className="icon" />
          </IconButton>

          <StyledButton
            id="basic-button"
            variant="contained"
            onClick={handleClick}
            endIcon={<PersonIcon className="icon" />}
          >
            OLA {user.name}
          </StyledButton>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Perfil</MenuItem>
            <MenuItem onClick={() => setIsPersonal((prev) => !prev)}>Trocar atividades</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Controllers>
      </NavContainer>
    </Container>
  );
}

export default TopBar;
