import { TbArrowBigUpLines } from "react-icons/tb";
import present from "../videos/pakhsh.mp4";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NewsSlider from "./swiper/NewsSlider";
import Header from "./Header";
import parsan from "../images/parsan.png";
import { motion } from "framer-motion";
import HeaderSlider from "./headerSlider/HeaderSlider";

const Home = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     breakpoint: { max: 4000, min: 1200 },
  //     items: 4,
  //   },
  //   desktop: {
  //     breakpoint: { max: 1200, min: 992 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 992, min: 768 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 768, min: 0 },
  //     items: 1,
  //   },
  // };

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

  // const cardTransition = { type: "spring", bounce: 0.4, duration: 0.8 };

  return (
    <>
      <Header />
      <HeaderSlider />
      <div className="p-4 w-full lg:w-[80%] mx-auto my-10 lg:my-20">
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
                  <p>راسا صنعت چگونه کار می کند؟</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

 
   
    

      <div className="w-full lg:w-[90%] mx-auto my-10 lg:my-20">
        <h1 className="flex justify-center items-center text-[22px] my-10">
          شرکای تجاری راسا صنعت
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-3 overflow-x-hidden">
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
        {/* <Carousel responsive={responsive} autoPlay={true} infinite={true}>
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
        </Carousel> */}
        {/* <div className="flex justify-center items-center mt-8">
          <Link
            to="/brands"
            className="p-4 bg-blue-500 rounded-md text-white hover:text-black hover:bg-gray-200"
          >
            مشاهده سایر برند ها
          </Link>
        </div> */}
      </div>
      <div className="w-full lg:w-[80%] mx-auto my-10 lg:my-20">
        <h1 className="flex justify-center items-center text-[22px] mt-20 mb-4">
          آخرین اخبار و رویدادهای ما
        </h1>
        <NewsSlider />
      </div>
    </>
  );
};

export default Home;
