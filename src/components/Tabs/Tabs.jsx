import React, { useState } from 'react';

export default function Tabs() {
  const [items, setItem] = useState([true, false]);
  const handlerClick = (id) => {
    setItem(items.map((x, i) => i === id))
  };
  return (
    <div className="tabs">
      <div onClick={() => handlerClick(0)} className={`tabs__item${items[0] ? ' tabs__item_active' : ''}`}>ЕЖЕМЕСЯЧНО</div>
      <div onClick={() => handlerClick(1)} className={`tabs__item${items[1] ? ' tabs__item_active' : ''}`}>РАЗОВО</div>
    </div>
  );
}
