import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { DATA } from "../data.tsx";
import "./ImageSlider.css";

export default function ImageSlider() {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      mousewheel={true}
      keyboard={true}
      autoplay={{ delay: 4000 }}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      className="mySwiper"
    >
      {DATA.map(({ id, src, title, phrase }) => (
        <SwiperSlide key={id} className="slider-content">
          <div className="slider-tittle">
            <h1>{title}</h1>
            <p className="slider-phrase">{phrase}</p>
          </div>
          <div className="slider-img">
            <img src={src} alt="image" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
