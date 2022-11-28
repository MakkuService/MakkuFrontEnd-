import React from 'react';

import Button from '../Button';

export default function Card({ data }) {
  const handlerClick = () => {
    console.log(data);
  };

  return (
    <li className="card">
      {data}
      <Button style="button_card" handler={handlerClick} text="Помочь" />
    </li>
  );
}
