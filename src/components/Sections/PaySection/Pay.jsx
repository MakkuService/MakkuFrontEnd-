import React from 'react';

import { Button, InputField, Tabs } from '../../ui';

import { sums, anySums } from './data';

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
          {sums.map((sum, i) => (<Button key={`sum${i}`} style="button_outline button_150" handler={handlerTest} text={`${sum} P`} />))}
        </div>
        <div className="grid grid_20">
          {anySums.map((sum, i) => (<Button key={`sum${i}`} style="button_outline button_345" handler={handlerTest} text={`${sum}${sum === '5000' ? ' P' : ''} `} />))}
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

        <div className="checkboxes">
          <label className="checkbox">
            <input type="checkbox" className="checkbox__input" />
            Соглашаюсь с<span className="checkbox__link"> офертой</span>
          </label>
          <label className="checkbox">
            <input type="checkbox" className="checkbox__input" />
            Соглашаюсь на обработку моих<span className="checkbox__link"> персональных данных</span>
          </label>
        </div>

        <Button style="button button_pay m_20" handler={handlerButton} text="Помочь" />
      </form>

      <h3 className="title title_pay">Пожертвовать приюту</h3>
    </section>
  );
}
