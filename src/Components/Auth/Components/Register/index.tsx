import React from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';

import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import * as S from '../../styles';

interface iFormInput {
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object({
  email: yup
    .string()
    .required('Informe um e-mail valido')
    .email('E-mail inválido'),
  password: yup.string().required('Informe a sua senha'),
});

function Register() {
  const [showPassword, setShowPassword] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<iFormInput> = async ({ email, password }) => {
    console.log(email, password);
  };

  return (
    <S.Container>
      <S.FormContainer>
        <h2>Cadastro</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name='email'
            defaultValue=''
            render={({ field: { value, onChange } }) => (
              <TextField
                fullWidth
                value={value}
                onChange={onChange}
                label='E-mail'
                helperText={errors.email?.message}
                error={errors.email?.message !== undefined}
              />
            )}
          />

          <FormControl fullWidth variant='outlined'>
            <InputLabel>Senha</InputLabel>
            <Controller
              control={control}
              name='password'
              defaultValue=''
              render={({ field: { value, onChange } }) => (
                <OutlinedInput
                  label='Senha'
                  value={value}
                  onChange={onChange}
                  type={showPassword ? 'text' : 'password'}
                  error={errors.password?.message !== undefined}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge='end'
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              )}
            />
            {errors.password?.message !== undefined && (
              <FormHelperText error>{errors.password?.message}</FormHelperText>
            )}
          </FormControl>

          <FormControl fullWidth variant='outlined'>
            <InputLabel>Confirmar Senha</InputLabel>
            <Controller
              control={control}
              name='password'
              defaultValue=''
              render={({ field: { value, onChange } }) => (
                <OutlinedInput
                  label='Confirmar Senha'
                  value={value}
                  onChange={onChange}
                  type={showPassword ? 'text' : 'password'}
                  error={errors.password?.message !== undefined}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge='end'
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              )}
            />
            {errors.password?.message !== undefined && (
              <FormHelperText error>{errors.password?.message}</FormHelperText>
            )}
          </FormControl>

          <Button fullWidth type='submit' variant='contained'>
            Cadastrar
          </Button>
        </form>
      </S.FormContainer>
    </S.Container>
  );
}

export default Register;
