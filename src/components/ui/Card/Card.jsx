import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';

export default function Card({ data }) {
  const navigate = useNavigate();
  const handlerClick = () => {
    navigate(`/find-shelter/${data.id}`);
  };

  return (
    <li className="card">
      {data.id}
      <Button style="button_card" handler={handlerClick} text="Помочь" />
    </li>
  );
}
