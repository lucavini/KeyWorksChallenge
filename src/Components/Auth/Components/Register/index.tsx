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

import { useNavigate } from 'react-router-dom';
import * as S from '../../styles';
import api from '../../../../service/api';

interface iFormInput {
  userName: string;
  email: string;
  password: string;
  confirmpassword: string;
}

const schema = yup.object({
  userName: yup.string().required('Informe seu nome'),
  email: yup
    .string()
    .required('Informe um e-mail valido')
    .email('E-mail inválido'),
  password: yup.string().required('Informe a sua senha'),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas devem coincidir'),
});

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState('');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<iFormInput> = async ({
    userName,
    email,
    password,
    confirmpassword,
  }) => {
    setError('');
    try {
      await api.post('auth/register', {
        name: userName,
        email,
        password,
        confirmpassword,
      });

      navigate('/');
    } catch (err: any) {
      setError(err.response.data.msg);
    }
  };

  return (
    <S.Container>
      <S.FormContainer>
        <h2>Cadastro</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="userName"
            defaultValue=""
            render={({ field: { value, onChange } }) => (
              <TextField
                fullWidth
                value={value}
                onChange={onChange}
                label="Nome"
                helperText={errors.userName?.message}
                error={errors.userName?.message !== undefined}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            defaultValue=""
            render={({ field: { value, onChange } }) => (
              <TextField
                fullWidth
                value={value}
                onChange={onChange}
                label="E-mail"
                helperText={errors.email?.message}
                error={errors.email?.message !== undefined}
              />
            )}
          />

          <FormControl fullWidth variant="outlined">
            <InputLabel>Senha</InputLabel>
            <Controller
              control={control}
              name="password"
              defaultValue=""
              render={({ field: { value, onChange } }) => (
                <OutlinedInput
                  label="Senha"
                  value={value}
                  onChange={onChange}
                  type={showPassword ? 'text' : 'password'}
                  error={errors.password?.message !== undefined}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
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

          <FormControl fullWidth variant="outlined">
            <InputLabel>Confirmar Senha</InputLabel>
            <Controller
              control={control}
              name="confirmpassword"
              defaultValue=""
              render={({ field: { value, onChange } }) => (
                <OutlinedInput
                  label="Confirmar Senha"
                  value={value}
                  onChange={onChange}
                  type={showPassword ? 'text' : 'password'}
                  error={errors.password?.message !== undefined}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              )}
            />
            {errors.confirmpassword?.message !== undefined && (
              <FormHelperText error>
                {errors.confirmpassword?.message}
              </FormHelperText>
            )}
          </FormControl>

          <Button fullWidth type="submit" variant="contained">
            Cadastrar
          </Button>

          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </S.FormContainer>
    </S.Container>
  );
}

export default Register;
