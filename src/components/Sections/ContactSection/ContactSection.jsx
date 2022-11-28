import React from 'react';

import Button from '../../Button';
import InputField from '../../InputField';

export default function ContactSection() {
  const handlerButton = () => {
    console.log('submit');
  };

  return (
    <section className="section section_contact">
      <h2 className="title title_contact">
        Подпишитесь на новости о животных,
        которым необходима экстренная помощь
      </h2>
      <form className="form form_contact">
        <InputField />
        <InputField />
        <InputField />
        <Button style="button_contact" handler={handlerButton} text="Подписаться" />
      </form>

    </section>
  );
}
