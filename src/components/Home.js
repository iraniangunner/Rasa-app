import { useState, Fragment, useEffect } from "react";
import "react-modal-video/css/modal-video.min.css";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import { AiFillVideoCamera } from "react-icons/ai";
import { TbArrowBigUpLines } from "react-icons/tb";
import nancy from "../images/nancy.png";
import rojin from "../images/rojin.png";
import viatana from "../images/viatana.png";
import { Link } from "react-router-dom";
import present from "../videos/pakhsh.mp4";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import barbican from "../images/barbican.png";
import pakhsh from "../videos/pakhsh.mp4";
import { AnimatePresence } from "framer-motion";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import first from "../images/1.jpg";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper/Swiper.css";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";


const Home = () => {
  // const [videoModal, setVideoModal] = useState(false);
  // const [videoLoading, setVideoLoading] = useState(true);
  // const [browserWidth, setBrowserWidth] = useState(0);

  // const openVideoModal = () => {
  //   setVideoModal(true);
  // };

  // const closeVideoModal = () => {
  //   setVideoModal(false);
  // };

  // const spinner = () => {
  //   setVideoLoading(!videoLoading);
  // };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  // useEffect(() => {
  //   if (browserWidth >= 992) {
  //     // setVideoModal(false);
  //     document.body.style.overflow = "visible";
  //   }
  // }, [browserWidth]);

  // useEffect(() => {
  //   function handleResize() {
  //     setBrowserWidth(window.innerWidth);
  //   }

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (videoModal) {
  //     document.documentElement.style.overflow = "hidden";
  //   } else {
  //     document.documentElement.style.overflow = "visible";
  //   }

  //   return () => {
  //     document.documentElement.style.overflow = "visible";
  //   };
  // }, [videoModal]);



  return (
    <>
      <div className="p-4 w-full lg:w-[80%] mx-auto my-10 lg:my-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1 className="font-[500] text-[16px] p-4 lg:mt-[-40px] sm:text-[22px] xl:text-[35px]">
              مدیریت علمی در فروش و پخش محصولات غذایی شوینده و بهداشتی
            </h1>
            <p className="text-[14px] sm:text-[19px] text-justify p-4">
              شرکت پخش عقاب یکی از شرکت‌های پیشرو در زمینه فروش و پخش مویرگی
              کالاهای مصرفی در ایران است. طرح کسب و کار پخش عقاب بگونه‌ای طراحی
              شده است که سرعت، اطمینان و رضایت را برای مشتریان خود به ارمغان می
              آورد. پخش عقاب با پیاده سازی سیستم مدیریت استراتژیک در تئوری و عمل
              به کلیه ذینفعان و مشتریان اجازه می دهد که فرصتها را به ارزش و مزیت
              پایدار تبدیل کنند.
            </p>
          </div>
          <div className="flex justify-center items-center order-first lg:order-last">
            <div>
              <video
                className="rounded-[20px]"
                // onLoad={spinner}
                loading="lazy"
                width="800"
                height="500"
                controls
              >
                <source
                  // src="http://pakhshoghab.com/wp-content/uploads/2018/03/Paksh-Oghab-StopMotion.mp4"
                  src={present}
                  type="video/mp4"
                />
              </video>
              <div className="mt-6 flex flex-col justify-center items-center">
                <TbArrowBigUpLines className="arrow" size={35} />
                <div className="flex items-center">
                  {/* <div className="flasher mt-2"></div> */}
                  <p>پخش عقاب چگونه کار می کند؟</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[90%] mx-auto">
        <h1 className="flex justify-center items-center text-[22px] my-10">
          شرکای تجاری پخش عقاب
        </h1>
        <Carousel responsive={responsive} autoPlay={true} infinite={true}>
          <div className="flex justify-center items-center">
            <img src={nancy} alt="Nancy" />
          </div>
          <div className="flex justify-center items-center">
            <img src={barbican} alt="barbican" />
          </div>
          <div className="flex justify-center items-center">
            <img src={rojin} alt="rojin" />
          </div>
          <div className="flex justify-center items-center">
            <img src={viatana} alt="viatana" />
          </div>

          <div className="flex justify-center items-center">
            <img src={nancy} alt="Nancy" />
          </div>
          <div className="flex justify-center items-center">
            <img src={barbican} alt="barbican" />
          </div>
          <div className="flex justify-center items-center">
            <img src={rojin} alt="rojin" />
          </div>
          <div className="flex justify-center items-center">
            <img src={viatana} alt="viatana" />
          </div>
        </Carousel>
        <div className="flex justify-center items-center mt-8">
          <Link
            to="/brands"
            className="p-4 bg-blue-500 rounded-md text-white hover:text-black hover:bg-gray-200"
          >
            مشاهده سایر برند ها
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-[80%] mx-auto mt-10 lg:mt-16">
        <h1 className="flex justify-center items-center text-[22px] my-10">
          آخرین اخبار و رویدادهای ما
        </h1>
        <div className="container">
          <Swiper
            navigation={true}
      
            effect={"coverflow"}
            centeredSlides={true}
            // slidesPerView={1}
            slidesPerView={"auto"}
            dir="ltr"
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
      </div>
    </>
  );
};

export default Home;
