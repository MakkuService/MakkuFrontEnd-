import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button, InputField } from '../../components/ui';
import Paths from '../../utils/paths';

export default function SignIn() {
  const handlerChange = () => {
    console.log('change');
  };
  const handlerButton = () => {
    console.log('button');
  };

  return (
    <form className="form form_sign">
      <h3 className="title_pay-form">Вход</h3>
      <InputField
        className="input_pay"
        name="login"
        value=""
        placeholder="Логин"
        handlerChange={handlerChange}
      />
      <InputField
        className="input_pay"
        name="password"
        value=""
        placeholder="Пароль"
        handlerChange={handlerChange}
      />
      <Button
        style="button button_black m_20"
        handler={handlerButton}
        text="Войти"
      />
      <NavLink className="links__item links_footer m_20" to={Paths.SIGN.UP}>
        Зарегистрироваться
      </NavLink>
    </form>
  );
}
