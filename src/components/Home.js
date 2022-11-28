// import { TbArrowBigUpLines } from "react-icons/tb";
import present from "../videos/pakhsh.mp4";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NewsSlider from "./newsCarousel/NewsCarousel";
import Header from "./Header";
import parsan from "../images/parsan.png";
import { motion } from "framer-motion";
import HeaderSlider from "./headerSlider/HeaderSlider";
import { Fragment, useState } from "react";
import ModalVideo from "react-modal-video";
// import trucks from "../videos/pakhsh.mp4";
import "../../node_modules/react-modal-video/scss/modal-video.scss";
import company from "../images/company.png";
import HonourSlider from "./honourSlider/HonourSlider";

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

  const secondPartVariants = {
    offscreen: {
      opacity: 0,
      x: 600,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };

  const thirdPart1Variants = {
    offscreen: {
      opacity: 0,
      y: -600,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };

  const thirdPart2Variants = {
    offscreen: {
      opacity: 0,
      y: 600,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  // const modalOpenHandler = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  // const cardTransition = { type: "spring", bounce: 0.4, duration: 0.8 };

  return (
    <>
      <HeaderSlider />
      <Header />
      <div className="p-4 w-full xl:w-[80%] mx-auto my-10 sm:my-56 sm:mt-20 md:my-20 lg:my-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="text-[#04244c]">
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
          {/* <button onClick={modalOpenHandler}>Play Video </button>
          <IntroModal open={isModalOpen} toggleModal={modalOpenHandler} /> */}
          <Fragment>
            <ModalVideo
              channel="custom"
              autoplay
              url={present}
              isOpen={isModalOpen}
              // videoId="L61p2uyiMSo"
              onClose={() => setIsModalOpen(false)}
            />
          </Fragment>

          <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
            VIEW DEMO
          </button>
        </div>
      </div>
      <div className="my-10 sm:my-56 md:my-20 lg:my-24 bg-[#04244c]">
        <div className="flex justify-center items-center">
          <h1 className="text-[20px] px-2 py-2 my-4 font-[700] text-gray-300">
            برند های تجاری راسا صنعت
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-8 lg:gap-3 overflow-x-hidden p-12 pb-24 lg:p-16 lg:pb-32">
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
      <div className="my-10 sm:my-56 md:my-20 lg:my-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-hidden w-full xl:w-[80%] mx-auto">
          <div
            className="p-4"
            // initial="offscreen"
            // whileInView="onscreen"
            // viewport={{ once: true, amount: 0.8 }}
          >
            <div variants={secondPartVariants}>
              <h1 className="mb-4 text-[18px]">
                مدیریت علمی در فروش و پخش محصولات غذایی، شوینده و بهداشتی
              </h1>
              <p className="text-[14px] leading-6 text-justify">
                رمز موفقیت در بازار پرتلاطم امروز به‌کارگیری فنون مدیریت علمی در
                بازار است، شرکت پخش عقاب با این رویکرد به یکی از معتبرترین
                شرکت‌های پخش در کشور بدل ساخته‌است. پخش عقاب موفقیت خود را مدیون
                پیروی و ساختار پذیری از برنامه‌های استراتژیک و برنامه‌ریزی درست
                و تعهد به اجرای صحیح آن‌ها است. این شرکت، هرساله با جمع‌آوری
                اطلاعات بازار و داده‌های خود، عملکرد خویش را به‌صورت مستمر
                ارزیابی کرده و با تعیین اهداف در بازه های زمانی کوتاه، میانه و
                بلند‌ برنامه‌های استراتژیک خود را برای تحقق این اهداف تدوین و
                پیاده‌سازی می‌کند. این شرکت هم اکنون از این طریق، با ارائه خدمات
                دقیق، علمی و منحصربه‌فرد موفق به جلب اعتماد و رضایت مشتریان شده
                و به جایگاهی درخشان در صنعت پخش و توزیع کشور دست‌یافته است.
              </p>
            </div>
          </div>
          <div
            className="grid grid-cols-2 p-4 gap-4 aspect-square"
            // initial="offscreen"
            // whileInView="onscreen"
            // viewport={{ once: true, amount: 0.8 }}
          >
            <div>
              <img
                src={company}
                className="w-full h-full rounded-md object-cover"
              />
            </div>
            <div variants={thirdPart1Variants}>
              <img
                src={company}
                className="w-full h-full rounded-md object-cover"
              />
            </div>
            <div variants={thirdPart2Variants}>
              <img
                src={company}
                className="w-full h-full rounded-md object-cover"
              />
            </div>
            <div variants={thirdPart2Variants}>
              <img
                src={company}
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 sm:my-56 md:my-20 lg:my-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 px-4 py-16 overflow-x-hidden w-full xl:w-[80%] mx-auto">
          <div
            className="flex justify-center items-center bg-company"
            // initial="offscreen"
            // whileInView="onscreen"
            // viewport={{ once: true, amount: 0.8 }}
          >
            <div className="px-8 py-16 lg:p-8 h-full bg-[rgba(0,0,0,0.65)] border-[5px] border-solid border-white text-white">
              <h1 className="mb-4 text-[18px]">
                مدیریت علمی در فروش و پخش محصولات غذایی، شوینده و بهداشتی
              </h1>
              <p className="text-[14px] leading-6 text-justify">
                رمز موفقیت در بازار پرتلاطم امروز به‌کارگیری فنون مدیریت علمی در
                بازار است، شرکت پخش عقاب با این رویکرد به یکی از معتبرترین
                شرکت‌های پخش در کشور بدل ساخته‌است. پخش عقاب موفقیت خود را مدیون
                پیروی و ساختار پذیری از برنامه‌های استراتژیک و برنامه‌ریزی درست
                و تعهد به اجرای صحیح آن‌ها است. این شرکت، هرساله با جمع‌آوری
                اطلاعات بازار و داده‌های خود، عملکرد خویش را به‌صورت مستمر
                ارزیابی کرده و با تعیین اهداف در بازه های زمانی کوتاه، میانه و
                بلند‌ برنامه‌های استراتژیک خود را برای تحقق این اهداف تدوین و
                پیاده‌سازی می‌کند. این شرکت هم اکنون از این طریق، با ارائه خدمات
                دقیق، علمی و منحصربه‌فرد موفق به جلب اعتماد و رضایت مشتریان شده
                و به جایگاهی درخشان در صنعت پخش و توزیع کشور دست‌یافته است.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <video
              muted
              loop
              autoPlay
              className="w-full h-full object-cover md:max-h-[400px] lg:max-h-full border-[5px] border-solid border-white"
            >
              <source src={present} />
            </video>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-[80%] mx-auto my-10 sm:my-56 md:my-20 lg:my-32">
        <h1 className="flex justify-center items-center text-[22px] mt-20 mb-4">
          آخرین اخبار و رویدادهای ما
        </h1>
        <NewsSlider />
      </div>
      <HonourSlider />
    </>
  );
};

export default Home;
