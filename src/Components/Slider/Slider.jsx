import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css/bundle";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import {
  Thumbs,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

const Slider = () => {
  const navigate = useNavigate();
  return (
    <div className="slider-container">
      <Swiper
        pagination={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[Pagination, Mousewheel, Keyboard, Thumbs, Autoplay]}
        loop={true}
        className="main-swiper non-selectable"
      >
        <SwiperSlide>
          <img
            src="/slides/slide6.png"
            alt="Product 1"
            onClick={() =>
              navigate("/card/flamingo/526a6e8e-c285-457a-be8c-f4acda92bc2a")
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slides/slide1.png"
            alt="Product 2"
            onClick={() =>
              navigate("/card/lego/e22c268d-4369-4b0e-8c26-3f987c110321")
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slides/slide3.png"
            alt="Product 3"
            onClick={() =>
              navigate("/card/baggage/66c635fd-e4ae-4301-a616-ea647b7e48a3")
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slides/slide4.png"
            alt="Product 4"
            onClick={() =>
              navigate("/card/F1-car/2b4ab0aa-c808-4abb-b4f4-09f53cd8cb05")
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slides/slide5.png"
            alt="Product 5"
            onClick={() =>
              navigate("/card/money/53cfa9dc-a0da-4d16-acdb-067b8b0e2343")
            }
          />
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
        modules={[Pagination, Mousewheel, Keyboard, Thumbs, Autoplay]}
        loop={true}
        className="small-swiper non-selectable"
      >
        <SwiperSlide>
          <img
            src="/slides/mini-slide6.png"
            alt="Product 1"
            onClick={() =>
              navigate("/card/flamingo/526a6e8e-c285-457a-be8c-f4acda92bc2a")
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slides/mini-slide1.png"
            alt="Product 2"
            onClick={() =>
              navigate("/card/lego/e22c268d-4369-4b0e-8c26-3f987c110321")
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slides/mini-slide3.png"
            alt="Product 3"
            onClick={() =>
              navigate("/card/baggage/66c635fd-e4ae-4301-a616-ea647b7e48a3")
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slides/mini-slide4.png"
            alt="Product 4"
            onClick={() =>
              navigate("/card/F1-car/2b4ab0aa-c808-4abb-b4f4-09f53cd8cb05")
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slides/mini-slide5.png"
            alt="Product 5"
            onClick={() =>
              navigate("/card/money/53cfa9dc-a0da-4d16-acdb-067b8b0e2343")
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
