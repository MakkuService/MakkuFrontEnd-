import React from 'react';

import Button from '../../Button';
import InputField from '../../InputField';
import Tabs from '../../Tabs';

export default function Pay() {
  const handlerButton = () => {
    console.log('submit');
  };
  const handlerTest = () => {
    console.log('test');
  };
  const handlerChange = () => {
    console.log('change');
  };

  return (
    <section className="section section_pay">
      <form className="form form_pay">
        <Tabs />
        <div className="description">
          Важна любая помощь, но именно благодаря ежемесячным пожертвованиям мы можем непрерывно помогать животным
        </div>
        <h3 className="title_pay-form">РАЗМЕР ПОЖЕРТВОВАНИЯ</h3>
        <div className="grid">
          <Button style="button_outline button_150" handler={handlerTest} text="100 P" />
          <Button style="button_outline button_150" handler={handlerTest} text="200 P" />
          <Button style="button_outline button_150" handler={handlerTest} text="500 P" />
          <Button style="button_outline button_150" handler={handlerTest} text="1000 P" />
        </div>
        <div className="grid grid_20">
          <Button style="button_outline button_345" handler={handlerTest} text="5000 P" />
          <Button style="button_outline button_345" handler={handlerTest} text="Другая сумма" />
        </div>
        <h3 className="title_pay-form">ВАШИ ДАННЫЕ</h3>
        <InputField
          className="input_pay"
          name="name"
          value=""
          placeholder="Ваше имя и фамилия"
          handlerChange={handlerChange}
        />
        <InputField
          className="input_pay"
          name="email"
          value=""
          placeholder="E-mail"
          handlerChange={handlerChange}
        />
        <label>
          <input type="checkbox" />
          Соглашаюсь с <span>офертой</span>
        </label>
        <label>
          <input type="checkbox" />
          Соглашаюсь на обработку моих <span>персональных данных</span>
        </label>
        <Button style="button button_pay m_20" handler={handlerButton} text="Помочь" />
      </form>

      <h3 className="title title_pay">Пожертвовать приюту</h3>
    </section>
  );
}
