import { Swiper, SwiperSlide } from "swiper/react";
import first from "../../images/1.jpg";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./NewsSlider.css";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

const NewsSlider = () => {
  return (
    <div className="container">
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        // slidesPerView={1}
        slidesPerView={"auto"}
        dir="ltr"
        grabCursor={true}
        // spaceBetween={10}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, EffectCoverflow, Navigation, Autoplay]}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   768: {
        //     slidesPerView: 3,
        //     spaceBetween: 40,
        //   },
        //   1024: {
        //     slidesPerView: 4,
        //     spaceBetween: 70,
        //   },
        // }}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={first} />
          <div className="absolute w-full h-[40%] bottom-0 left-0 right-0 px-4 py-2 text-right text-white">
           <p>1400/2/5</p>
           <p>مراسم تقدیر از آقای ابهری</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={first} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={first} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={first} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={first} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={first} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NewsSlider;
