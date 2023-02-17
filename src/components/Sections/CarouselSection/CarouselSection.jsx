import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useWindowDimensions, getVisualProps } from '../../../hook/useWindowDimensions';
import { Card, Button } from '../../ui';

import Paths from '../../../utils/paths';
import array from '../../../mock/array';
import 'swiper/css';

export default function CarouselSection() {
  const navigate = useNavigate();
  const inLine = getVisualProps(useWindowDimensions());
  const handlerAll = () => navigate(Paths.FIND.SHELTERS);

  return (
    <section className="section section_carousel">
      <div className="carousel">
        <Swiper
          spaceBetween={20}
          slidesPerView={inLine.cards}
          // onClick={() => console.log('click')}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {array.map((x) => (
              <SwiperSlide key={x}>
                <Card data={{ id: x }} />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
      <div className="section__footer">
        <Button
          style="button button_all"
          handler={handlerAll}
          text="Посмотреть все приюты"
        />
      </div>
    </section>
  );
}
