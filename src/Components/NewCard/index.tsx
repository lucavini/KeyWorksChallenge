/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React from 'react';

// Components
import TextField, { TextFieldProps } from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

// Utils
import { ProjectContext } from '../../Context/ProjectContext';

// styles
import { BoxModal, Title } from './styles';

const activities = ['desenvolvimento', 'ux | ui', 'financeiro'];
const typeProject = ['Company', 'Client', 'Work'];
const teams = ['Afonso Solano', 'Pedro Henrique', 'Wellington Oliveira'];

function NewCard() {
  const { project, setProjects } = React.useContext(ProjectContext);
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <BoxModal>
      <Title className='fullColumn'>Nova Atividade</Title>

      <TextField
        fullWidth
        className='fullColumn'
        label='Título do projeto'
        value={project?.title}
        onChange={({ target }) =>
          setProjects((prevState) => ({
            ...prevState,
            title: target.value,
          }))
        }
      />

      <FormControl className='firstColumn' fullWidth>
        <InputLabel>Tipo de Atividade</InputLabel>
        <Select label='Tipo de Atividade'>
          <MenuItem value=''>
            <em>Tipo de Atividade</em>
          </MenuItem>
          {activities?.map((activity, index) => (
            <MenuItem key={index} value={activity}>
              {activity}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className='secondColumn' fullWidth>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props: JSX.IntrinsicAttributes & TextFieldProps) => (
              <TextField {...props} />
            )}
            label='Data Prevista'
            value={value}
            onChange={(newValue: React.SetStateAction<Date | null>) => {
              setValue(newValue);
            }}
          />
        </LocalizationProvider>
      </FormControl>

      <FormControl className='firstColumn' fullWidth>
        <InputLabel>Tipo de Projeto</InputLabel>
        <Select label='Tipo de Atividade'>
          <MenuItem value=''>
            <em>Tipo de Projeto</em>
          </MenuItem>
          {typeProject?.map((type, index) => (
            <MenuItem key={index} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className='secondeColumn' fullWidth>
        <InputLabel>Equipes</InputLabel>
        <Select label='Equipes'>
          <MenuItem value=''>
            <em>Equipes</em>
          </MenuItem>
          {teams?.map((team, index) => (
            <MenuItem key={index} value={team}>
              {team}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        fullWidth
        className='fullColumn'
        label='Descrição do projeto'
        multiline
        rows={4}
      />

      <Button
        className='secondColumn'
        variant='contained'
        sx={{ justifySelf: 'end' }}
      >
        Novo Cartão +
      </Button>
    </BoxModal>
  );
}

export default NewCard;
