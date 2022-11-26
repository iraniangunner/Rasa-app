import { ImLocation } from "react-icons/im";
import { BsFillTelephoneInboundFill, BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsWatch } from "react-icons/bs";
import logo from "../../images/logo-pakhshoghab.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="relative border-t p-8 lg:px-16 bg-gray-700 text-gray-300 mt-10 md:mt-32 lg:mt-56">
      <div className="absolute w-[80%] left-[50%] top-0 translate-x-[-50%] rounded-br-md rounded-bl-md sm:rounded-md sm:translate-y-[-50%] bg-red-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col items-center justify-center p-4">
          <div className="mb-2">
            <BsWatch size={25} />
          </div>
          <p>شنبه تا پنجشنبه</p>
          <p>08:00- 17:00</p>
        </div>

        <div className="flex flex-col items-center justify-center p-4">
          <div className="mb-2">
            <ImLocation size={25} />
          </div>
          <p>کرج</p>
          <p>البرز</p>
        </div>

        <div className="flex flex-col items-center justify-center p-4">
          <div className="mb-2">
            <MdEmail size={25} />
          </div>
          <p>ایمیل:</p>
          <p>Info@Pakhshoghab.com</p>
        </div>

        <div className="flex flex-col items-center justify-center p-4">
          <div className="mb-2">
            <BsFillTelephoneInboundFill size={25} />
          </div>
          <p>تماس با ما:</p>
          <p>026-32306670</p>
        </div>
      </div>
      <div className="max-w-[116rem] mt-96 sm:mt-24 md:mt-12 mx-auto py-[1.5rem]">
        <div className="footer_top">
          <div className="company_info py-10 sm:py-0 xl:pr-[5rem]">
            <div>
              <img src={logo} alt="pakhshoghab" width={195} height={70}/>
            </div>
            <h4 className="text-[13px]">
              پخش عقاب را در شبکه های اجتماعی دنبال کنید:
            </h4>
            <ul className="flex items-center">
              <li className="ml-2">
                <a
                  href="https://www.linkedin.com/company/pakhshoghab/"
                  className="block p-2"
                  target="_blank"
                >
                  <FaLinkedinIn size={25} color="#0077b5" />
                </a>
              </li>
              <li className="ml-2">
                <a
                  href="https://www.instagram.com/oghab.distribution/"
                  className="block p-2"
                  target="_blank"
                >
                  <BsInstagram size={25} color="#dd2a7b" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6">لینک های مفید</h4>
            <ul className="flex flex-col items-start gap-2 text-[14px]">
              <li className="flex items-center">
                <AiOutlineMinus className="mt-1" color="#f87171" />
                <Link
                  to="/چارت-سازمانی"
                  className="pl-4 px-2 py-2 hover:text-[#fff] transition-all duration-200"
                >
                  صنایع غذایی
                </Link>
              </li>
              <li className="flex items-center">
                <AiOutlineMinus className="mt-1" color="#f87171" />
                <Link
                  to="/چارت-سازمانی"
                  className="pl-4 px-2 py-2 hover:text-[#fff] transition-all duration-200"
                >
                  پرسنل
                </Link>
              </li>
              <li className="flex items-center">
                <AiOutlineMinus className="mt-1" color="#f87171" />
                <Link
                  to="/چارت-سازمانی"
                  className="pl-4 px-2 py-2 hover:text-[#fff] transition-all duration-200"
                >
                  درباره ما
                </Link>
              </li>
              <li className="flex items-center">
                <AiOutlineMinus className="mt-1" color="#f87171" />
                <Link
                  to="/چارت-سازمانی"
                  className="pl-4 px-2 py-2 hover:text-[#fff] transition-all duration-200"
                >
                  اخبار و رویدادها
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6">لینک های مفید</h4>
            <ul className="flex flex-col items-start gap-2 text-[14px]">
              <li className="flex items-center">
                <Link to="/چارت-سازمانی" className="px-4 py-2">
                  محصولات
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/چارت-سازمانی" className="px-4 py-2">
                  محصولات
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/چارت-سازمانی" className="px-4 py-2">
                  محصولات
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/چارت-سازمانی" className="px-4 py-2">
                  محصولات
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6">لینک های مفید</h4>
            <ul className="flex flex-col items-start gap-2 text-[14px]">
              <li className="flex items-center">
                <Link to="/چارت-سازمانی" className="px-4 py-2">
                  محصولات
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/چارت-سازمانی" className="px-4 py-2">
                  محصولات
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/چارت-سازمانی" className="px-4 py-2">
                  محصولات
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/چارت-سازمانی" className="px-4 py-2">
                  محصولات
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center p-4 mt-4">
        <p className="text-[13px] text-gray-300">
          &copy; تمامی حقوق برای شرکت راسا صنعت محفوظ است
        </p>
      </div>
    </footer>
  );
};

export default Footer;
