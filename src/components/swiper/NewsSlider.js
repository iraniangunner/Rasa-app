import { Swiper, SwiperSlide } from "swiper/react";
import first from "../../images/1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./NewsSlider.css";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

const NewsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <Swiper
        navigation={true}
        // effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        // slidesPerView={3}
        dir="ltr"
        grabCursor={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, EffectCoverflow, Navigation, Autoplay]}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        loop={true}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={first} />
          <div className="absolute w-full h-[40%] bottom-0 left-0 right-0 px-4 py-2 text-right text-white">
            <p>1400/2/5</p>
            <p>مراسم تقدیر از آقای رییس</p>
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
    // <div>
    //   <Slider {...settings}>
    //     <div className="card">
    //       <div className="card-top">
    //         <img src={first} alt="image" />
    //         <h1>جلسه آقای رییس</h1>
    //       </div>
    //       <div className="card-bottom">
    //         <h3>جزئیات خبر</h3>
    //         <span className="category">این جا بخوانید</span>
    //       </div>
    //     </div>
    //     <div className="card">
    //       <div className="card-top">
    //         <img src={first} alt="image" />
    //         <h1>جلسه آقای رییس</h1>
    //       </div>
    //       <div className="card-bottom">
    //         <h3>جزئیات خبر</h3>
    //         <span className="category">این جا بخوانید</span>
    //       </div>
    //     </div>
    //     <div className="card">
    //       <div className="card-top">
    //         <img src={first} alt="image" />
    //         <h1>جلسه آقای رییس</h1>
    //       </div>
    //       <div className="card-bottom">
    //         <h3>جزئیات خبر</h3>
    //         <span className="category">این جا بخوانید</span>
    //       </div>
    //     </div>
    //     <div className="card">
    //       <div className="card-top">
    //         <img src={first} alt="image" />
    //         <h1>جلسه آقای رییس</h1>
    //       </div>
    //       <div className="card-bottom">
    //         <h3>جزئیات خبر</h3>
    //         <span className="category">این جا بخوانید</span>
    //       </div>
    //     </div>
    //     <div className="card">
    //       <div className="card-top">
    //         <img src={first} alt="image" />
    //         <h1>جلسه آقای رییس</h1>
    //       </div>
    //       <div className="card-bottom">
    //         <h3>جزئیات خبر</h3>
    //         <span className="category">این جا بخوانید</span>
    //       </div>
    //     </div>
    //     <div className="card">
    //       <div className="card-top">
    //         <img src={first} alt="image" />
    //         <h1>جلسه آقای رییس</h1>
    //       </div>
    //       <div className="card-bottom">
    //         <h3>جزئیات خبر</h3>
    //         <span className="category">این جا بخوانید</span>
    //       </div>
    //     </div>
    //     <div className="card">
    //       <div className="card-top">
    //         <img src={first} alt="image" />
    //         <h1>جلسه آقای رییس</h1>
    //       </div>
    //       <div className="card-bottom">
    //         <h3>جزئیات خبر</h3>
    //         <span className="category">این جا بخوانید</span>
    //       </div>
    //     </div>
    //   </Slider>
    // </div>
  );
};

export default NewsSlider;
