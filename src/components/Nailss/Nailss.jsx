import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './Nailss.css'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_1 from '../../images/nailimg/nail1.jpg';
import slide_2 from '../../images/nailimg/nail2.jpg';
import slide_3 from '../../images/nailimg/nail3.jpg';
import slide_4 from '../../images/nailimg/nail4.jpg';
import slide_5 from '../../images/nailimg/nail5.jpg';
import slide_6 from '../../images/nailimg/nail6.jpg';
import slide_7 from '../../images/nailimg/nail7.jpg';
import slide_8 from '../../images/nailimg/nail8.jpg';
import slide_9 from '../../images/nailimg/nail9.jpg';
import slide_10 from '../../images/nailimg/nail10.jpg';

export const Nailss = () => {
  return (
    <div>
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{el:'swiper-pagination', clickable: true }}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        className="swiper-container"
      >
        <SwiperSlide>
          <img src={slide_1} alt="slide_1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_2} alt="slide_2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_3} alt="slide_3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_4} alt="slide_4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_5} alt="slide_5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_6} alt="slide_6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_7} alt="slide_6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_8} alt="slide_6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_9} alt="slide_6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_10} alt="slide_6" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
