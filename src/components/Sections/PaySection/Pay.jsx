import React from 'react';

import Button from '../../Button';
import InputField from '../../InputField';
import Tabs from '../../Tabs';

export default function Pay() {
  const handlerButton = () => {
    console.log('submit');
  };

  return (
    <section className="section section_pay">
      <form className="form form_pay">
        <Tabs />
        <div>
          Важна любая помощь, но именно благодаря ежемесячным пожертвованиям мы можем непрерывно помогать животным
        </div>
        <h3 className="title_pay-form">РАЗМЕР ПОЖЕРТВОВАНИЯ</h3>
        <h3 className="title_pay-form">ВАШИ ДАННЫЕ</h3>
        <InputField />
        <InputField />
        <Button style="button_pay" handler={handlerButton} text="Помочь" />
      </form>

      <h3 className="title title_pay">Пожертвовать приюту</h3>
    </section>
  );
}
