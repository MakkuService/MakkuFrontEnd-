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
      <form>
        <Tabs />
        <InputField />
        <Button style="" handler={handlerButton} text="Пожертвовать" />
      </form>

      <h3>Пожертвовать приюту</h3>
    </section>
  );
}
