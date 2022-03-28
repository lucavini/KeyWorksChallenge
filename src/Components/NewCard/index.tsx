/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React from 'react';

// Components
import TextField, { TextFieldProps } from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
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

type Props = {
  handleClose: () => void;
};

function NewCard({ handleClose }: Props) {
  const { project, setProjects, setWaiting } = React.useContext(ProjectContext);
  const [timeValue, setValue] = React.useState<Date | null>(new Date());

  const handleChange = (event: SelectChangeEvent<typeof project.teams>) => {
    const {
      target: { value },
    } = event;

    setProjects((prevState) => ({
      ...prevState,
      teams: typeof value === 'string' ? value.split(',') : value,
    }));
  };

  const handleClick = () => {
    setWaiting((prevState) => [
      {
        ...project,
        id: `${String(Math.random() * 100000)}1sdf${String(Math.random() * 100000)}`,
      },
      ...prevState,
    ]);
    setProjects({
      id: '',
      title: '',
      typeActivity: '',
      typeProject: '',
      teams: [],
      description: '',
    });
    handleClose();
  };

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
        <Select
          label='Tipo de Atividade'
          value={project?.typeActivity}
          onChange={({ target }) =>
            setProjects((prevState) => ({
              ...prevState,
              typeActivity: target.value,
            }))
          }
        >
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
            value={timeValue}
            onChange={(newValue: React.SetStateAction<Date | null>) => {
              setValue(newValue);
            }}
          />
        </LocalizationProvider>
      </FormControl>

      <FormControl className='firstColumn' fullWidth>
        <InputLabel>Tipo de Projeto</InputLabel>
        <Select
          label='Tipo de Atividade'
          value={project?.typeProject}
          onChange={({ target }) =>
            setProjects((prevState) => ({
              ...prevState,
              typeProject: target.value,
            }))
          }
        >
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
        <InputLabel id='demo-multiple-name-label'>Equipes</InputLabel>
        <Select
          labelId='demo-multiple-name-label'
          id='demo-multiple-name'
          multiple
          value={project?.teams}
          onChange={handleChange}
          input={<OutlinedInput label='Equipes' />}
        >
          {teams?.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
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
        value={project?.description}
        onChange={({ target }) =>
          setProjects((prevState) => ({
            ...prevState,
            description: target.value,
          }))
        }
      />

      <Button
        className='secondColumn'
        variant='contained'
        onClick={handleClick}
        sx={{ justifySelf: 'end' }}
      >
        Novo Cartão +
      </Button>
    </BoxModal>
  );
}

export default NewCard;
