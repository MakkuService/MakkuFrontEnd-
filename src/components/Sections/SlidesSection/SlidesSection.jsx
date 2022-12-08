import React from 'react';

import slide1Src from '../../../images/slide1.jpg';
import slide2Src from '../../../images/slide2.jpg';

export default function SlidesSection() {
  return (
    <section className="section section_slides">
      <h2 className="title title_slides">Как помочь?</h2>

      <ul className="slides">
        <li className="slide">
          <div className="slide__title">
            <h3 className="title title_slide title_slide_first">
              <span className="paragraph">Взять питомца</span>
              <span className="paragraph">домой из приюта</span>
            </h3>
          </div>
          <div className="slide__image slide_first">
            <img src={slide1Src} alt="image description" className="image image_slide" />
          </div>
        </li>

        <li className="slide slide_second">
          <div className="slide__title">
            <h3 className="title title_slide title_slide_second">
              <span className="paragraph">Сделать доброе</span>
              <span className="paragraph">пожертвование</span>
            </h3>
          </div>
          <div className="slide__image">
            <img src={slide2Src} alt="image description" className="image image_slide" />
          </div>
        </li>
      </ul>

    </section>
  );
}
