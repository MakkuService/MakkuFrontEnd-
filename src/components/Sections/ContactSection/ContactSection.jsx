import React, { useState } from 'react';

import { Button, InputField } from '../../ui';

import fields from '../../../mock/fields';

export default function ContactSection() {
  const [data, setData] = useState({ name: '', phone: '', mail: '' });
  const handlerButton = () => console.log('submit');

  const handlerChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  }

  return (
    <section className="section section_contact">
      <h2 className="title title_contact">
        Подпишитесь на новости о животных,
        которым необходима экстренная помощь
      </h2>

      <form className="form form_contact">
        {fields.map((field) => (
          <InputField
            key={field.name}
            name={field.name}
            value={data[name]}
            placeholder={field.placeholder}
            handlerChange={handlerChange}
          />
        ))}

        <Button
          style="button_contact"
          handler={handlerButton}
          text="Подписаться"
          handlerChange={handlerChange}
        />
      </form>

    </section>
  );
}
