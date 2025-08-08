import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import {
  Thumbs,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    if (thumbsSwiper) {
      thumbsSwiper.slideTo(0);
    }
  }, [thumbsSwiper]);

  return (
    <div className="slider-container">
      <Swiper
        pagination={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[
          // Navigation,
          Pagination,
          Mousewheel,
          Keyboard,
          Thumbs,
          Autoplay,
        ]}
        loop={true}
        // navigation={true}
        className="main-swiper"
      >
        <SwiperSlide>
          <img src="/testImg.png" alt="Product 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/testImg.png" alt="Product 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/testImg.png" alt="Product 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/testImg.png" alt="Product 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/testImg.png" alt="Product 5" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={false}
        pagination={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[
          // Navigation,
          Pagination,
          Mousewheel,
          Keyboard,
          Thumbs,
          Autoplay,
        ]}
        loop={true}
        className="small-swiper"
      >
        <SwiperSlide>
          <img src="/testImg.png" alt="Product 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/testImg.png" alt="Product 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/testImg.png" alt="Product 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/testImg.png" alt="Product 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/testImg.png" alt="Product 5" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
