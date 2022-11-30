import React from 'react';

export default function SlidesSection() {
  return (
    <section className="section section_slides">
      <h2 className="title title_slides">Как помочь?</h2>
      <ul className="grid">

        <li className="grid__item">
          <p>
            <span>Взять питомца</span>
            <span>домой из приюта</span>
          </p>
          <li>img</li>
        </li>

        <li className="grid__item">
          <p>
            <span>Сделать доброе</span>
            <span>пожертвование</span>
          </p>
          <li>img</li>
        </li>

      </ul>
    </section>
  );
}
