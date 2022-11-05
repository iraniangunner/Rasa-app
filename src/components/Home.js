import { useState, Fragment, useEffect } from "react";
import "react-modal-video/css/modal-video.min.css";
import dubai from "../videos/dubai.mp4";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import { AiFillVideoCamera } from "react-icons/ai";
import nancy from "../images/nancy.png";
import rojin from "../images/rojin.png";
import viatana from "../images/viatana.png";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import barbican from "../images/barbican.png";
import pakhsh from "../videos/pakhsh.mp4";

const Home = () => {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const [browserWidth, setBrowserWidth] = useState(0);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

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

  useEffect(() => {
    if (browserWidth >= 992) {
      setModal(false);
      document.body.style.overflow = "unset";
    }
  }, [browserWidth]);

  useEffect(() => {
    function handleResize() {
      setBrowserWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (modal) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "unset";
    }

    return () => {
      document.documentElement.style.overflow = "unset";
    };
  }, [modal]);
  return (
    <>
      <div className="h-[100vh]">
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.4)]"></div>
        <video
          src={pakhsh}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute w-full h-full top-0 flex flex-col justify-center">
          <div className="px-4 py-2 w-full lg:w-[80%] mx-auto mt-10 lg:mt-16 text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="mt-20">
                <h1 className="font-[500] text-[16px] sm:text-[22px] xl:text-[35px] mb-2 md:mb-8">
                  مدیریت علمی در فروش و پخش محصولات غذایی شوینده و بهداشتی
                </h1>
                <p className="text-[14px] sm:text-[19px] text-justify ">
                  شرکت پخش عقاب یکی از شرکت‌های پیشرو در زمینه فروش و پخش مویرگی
                  کالاهای مصرفی در ایران است. طرح کسب و کار پخش عقاب بگونه‌ای
                  طراحی شده است که سرعت، اطمینان و رضایت را برای مشتریان خود به
                  ارمغان می آورد. پخش عقاب با پیاده سازی سیستم مدیریت استراتژیک
                  در تئوری و عمل به کلیه ذینفعان و مشتریان اجازه می دهد که
                  فرصتها را به ارزش و مزیت پایدار تبدیل کنند.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center pb-6 my-4">
            <button
              onClick={openModal}
              className={`flex items-center ${
                modal && "cursor-default"
              } p-4 bg-transparent border border-solid rounded-md text-white hover:text-black hover:bg-white transition-all`}
            >
              <span className="ml-2">پخش عقاب چگونه کار می کند؟</span>
              <AiFillVideoCamera />
              {modal ? (
                <section className="modal__bg">
                  <div className="modal__align">
                    <div className="modal__content" modal={modal}>
                      <IoCloseOutline
                        className="modal__close"
                        arial-label="Close modal"
                        onClick={setModal}
                      />
                      <div className="modal__video-align">
                        {videoLoading ? (
                          <div className="modal__spinner">
                            <BiLoaderAlt
                              className="modal__spinner-style"
                              fadeIn="none"
                            />
                          </div>
                        ) : null}
                        <video
                          className="modal__video-style"
                          onLoad={spinner}
                          loading="lazy"
                          width="800"
                          height="500"
                          controls
                          autoPlay
                          loop
                        >
                          <source src={dubai} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                </section>
              ) : null}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[90%] mx-auto mt-10 lg:mt-16">
        <h1 className="flex justify-center items-center text-[22px] my-10 lg:mt-24">
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
      <div className="w-full lg:w-[80%] mx-auto mt-10 lg:mt-16"></div>
    </>
  );
};

export default Home;
