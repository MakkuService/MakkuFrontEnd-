import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary';

import { Button, Input } from '../../components/ui';

import { useSignUpMutation } from '../../store';
import useUser from '../../hook/useUser';
import Paths from '../../utils/paths';

const inputs = [
  {
    name: 'userName',
    placeholder: 'userName',
    pattern: {
      value: /^[a-z0-9_-]{3,15}$/,
      message: 'Login is invalid',
    },
    required: true,
    autoComplete: 'userName',
  },
  {
    name: 'email',
    placeholder: 'E-mail',
    pattern: {
      value: /[a-z0-9._%+-]+@[a-z0-9.-]+[.{0}][a-z]{2,3}$/,
      message: 'userName is invalid',
    },
    required: true,
    autoComplete: 'current-email',
  },
  {
    name: 'password',
    placeholder: 'Password',
    pattern: {
      value: /^[a-zA-Z0-9_-]{3,15}$/,
      message: 'Password is invalid',
    },
    required: true,
    type: 'password',
    autoComplete: 'current-password',
  },
];

export default function SignUp() {
  const errorHandler = useErrorHandler();
  const navigate = useNavigate();
  const userData = useUser();
  const [signUp] = useSignUpMutation();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      userName: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signUp({ userName, email, password });
      navigate('/');
    } catch ({ status, data: { reason } }) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });

  useEffect(() => {
    if (userData) {
      navigate('/');
    }
  });

  return (
    <form className="form form_sign" onSubmit={onSubmit}>
      <h3 className="title_sign">Регистрация</h3>
      {inputs.map((input) => (
        <Controller
          key={input.name}
          name={input.name}
          rules={{
            pattern: input.pattern,
            required: input.required,
          }}
          control={control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              {...input}
              className="input"
              errorText={fieldState.error?.message}
            />
          )}
        />
      ))}
      <Button style="button button_black m_40" submit text="Зарегистрироваться" />
      <NavLink className="links__item links_footer m_40" to={Paths.SIGN.IN}>
        Войти
      </NavLink>
    </form>
  );
}
