import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, Button } from '../../ui';

import array from './array';

import 'swiper/css';

export default function CarouselSection() {
  const handlerAll = () => {
    console.log('show all');
  };

  return (
    <section className="section section_carousel">
      <div className="carousel">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {array.map((x) => (
              <SwiperSlide key={x}>
                <Card data={x} />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
      <div className="section__footer">
        <Button style="button button_all" handler={handlerAll} text="Посмотреть все приюты" />
      </div>
    </section>
  );
}
