import { TbArrowBigUpLines } from "react-icons/tb";
import present from "../videos/pakhsh.mp4";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NewsSlider from "./swiper/NewsSlider";
import Header from "./Header";
import parsan from "../images/parsan.png";
import { motion } from "framer-motion";
import HeaderSlider from "./headerSlider/HeaderSlider";
import { Fragment, useState, useRef } from "react";
import ModalVideo from "react-modal-video";
import trucks from "../videos/pakhsh.mp4";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

const Home = () => {
  const firstImgVariants = {
    offscreen: {
      opacity: 0,
      x: 100,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };

  const secondImgVariants = {
    offscreen: {
      opacity: 0,
      x: -100,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const ref = useRef(null);
  // const cardTransition = { type: "spring", bounce: 0.4, duration: 0.8 };

  return (
    <>
      <HeaderSlider />
      <Header />
      <div className="p-4 w-full xl:w-[80%] mx-auto my-10 sm:mb-56 sm:mt-20 md:my-20 lg:my-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="font-[500] text-[16px] sm:mt-10 md:mt-0 p-4 lg:mt-[-40px] sm:text-[22px] xl:text-[35px]">
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
                // controls
                autoPlay
                muted
                loop
              >
                <source
                  // src="http://pakhshoghab.com/wp-content/uploads/2018/03/Paksh-Oghab-StopMotion.mp4"
                  src={present}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-16">
           <button>Open video</button>
        </div>
      </div>

      <div className="my-10 sm:my-56 md:my-20 lg:my-36 bg-gray-800">
        <h1 className="flex justify-center items-center text-[22px] py-4 px-2 sm:py-6 text-gray-300">
          برند های تجاری راسا صنعت
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-8 lg:gap-3 overflow-x-hidden p-12 pb-24 sm:p-16 sm:pb-32">
          <motion.div
            className="flex justify-center items-center"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            // transition={{ ...cardTransition, delay: 0.3 }}
          >
            <motion.div variants={firstImgVariants}>
              <img src={parsan} alt="parsan" />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center items-center"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            // transition={{ ...cardTransition, delay: 0.6 }}
          >
            <motion.div variants={secondImgVariants}>
              <img src={parsan} alt="moosian" />
            </motion.div>
          </motion.div>
        </div>
      </div>



      <div className="w-full xl:w-[80%] mx-auto my-10 sm:my-56 md:my-20 lg:my-36">
        <h1 className="flex justify-center items-center text-[22px] mt-20 mb-4">
          آخرین اخبار و رویدادهای ما
        </h1>
        <NewsSlider />
      </div>
    </>
  );
};

export default Home;
