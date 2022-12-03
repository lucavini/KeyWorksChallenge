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
import { useAuth } from '../../../../Context/authContext';
import * as S from '../../styles';

interface iFormInput {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup
    .string()
    .required('Informe um e-mail valido')
    .email('E-mail inválido'),
  password: yup.string().required('Informe a sua senha'),
});

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const { handleLogin } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<iFormInput> = async ({ email, password }) => {
    handleLogin({ email, password });
  };

  return (
    <S.Container>
      <S.FormContainer>
        <h2>Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
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

          <Button fullWidth type="submit" variant="contained">
            Entrar
          </Button>

          <Button
            onClick={() => navigate('/login/register')}
            fullWidth
            variant="outlined"
          >
            Cadastrar
          </Button>
        </form>
      </S.FormContainer>
    </S.Container>
  );
}

export default Login;
