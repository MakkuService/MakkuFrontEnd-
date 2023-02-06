import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary';

import { Button, Input } from '../../components/ui';
import { useSignInMutation } from '../../store';
import Paths from '../../utils/paths';
import useUser from '../../hook/useUser';

const inputs = [
  {
    name: 'email',
    placeholder: 'E-mail',
    pattern: {
      value: /[a-z0-9._%+-]+@[a-z0-9.-]+[.{0}][a-z]{2,3}$/,
      message: 'Email is invalid',
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

export default function SignIn() {
  const errorHandler = useErrorHandler();
  const navigate = useNavigate();
  const userData = useUser();
  const [signIn] = useSignInMutation();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(async ({ email, password }) => {
    try {
      await signIn({ email, password });
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
      <h3 className="title_sign">Вход</h3>
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
      <Button style="button button_black m_40" text="Войти" submit />
      <NavLink className="links__item links_footer m_40" to={Paths.SIGN.UP}>
        Зарегистрироваться
      </NavLink>
    </form>
  );
}
