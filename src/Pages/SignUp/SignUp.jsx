import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import {Button, Input } from '../../components/ui';
import Paths from '../../utils/paths';

const inputs = [
  {
    name: 'login',
    label: 'Login',
    pattern: {
      value: /^[a-z0-9_-]{3,15}$/,
      message: 'Login is invalid',
    },
    required: true,
    autoComplete: 'username',
  },
  {
    name: 'email',
    label: 'E-mail',
    pattern: {
      value: /[a-z0-9._%+-]+@[a-z0-9.-]+[.{0}][a-z]{2,3}$/,
      message: 'Email is invalid',
    },
    required: true,
    autoComplete: 'current-email',
  },
  {
    name: 'password',
    label: 'Password',
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
  const { control, handleSubmit } = useForm({
    defaultValues: {
      login: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {

  });

  return (
    <form className="form form_sign" onSubmit={onSubmit}>
      <h3 className="title_pay-form">Регистрация</h3>
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
              className="input input_pay"
              errorText={fieldState.error?.message}
            />
          )}
        />
      ))}
      <Button style="button button_black m_20" submit text="Зарегистрироваться" />
      <NavLink className="links__item links_footer m_20" to={Paths.SIGN.IN}>
        Войти
      </NavLink>
    </form>
  );
}
