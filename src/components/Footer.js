import { ImLocation } from "react-icons/im";
import { BsFillTelephoneInboundFill, BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-400">
      <div className="w-full lg:w-[80%] mx-auto mt-10 lg:mt-16 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h1 className="mb-6">تماس با ما</h1>
            <div className="flex items-center mb-6">
              <div>
                <ImLocation />
              </div>
              <p className="text-[14px] text-justify mr-2">
                تهران - خیابان شریعتی - بالاتر از پل سید خندان - خیابان خواجه
                عبدالله انصاری - بعد از چهارراه اول - نبش کوچه دوم - پلاک ۱۲
              </p>
            </div>
            <div className="flex items-center mb-6">
              <div>
                <BsFillTelephoneInboundFill size={15} />
              </div>
              <p className="text-[14px] mr-2">۰۲۱-۲۷۳۶۰</p>
            </div>
            <div className="flex items-center mb-6">
              <div>
                <MdEmail />
              </div>
              <p className="text-[14px] mr-2">Info@Pakhshoghab.com</p>
            </div>
            <h4 className="mb-4 text-[13px]">
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
            <ul className="flex flex-col items-start">
              <li className="flex items-center">
                <span></span>
                <Link to="/چارت-سازمانی">چارت سازمانی</Link>
              </li>
              <li>
                <a></a>
              </li>
              <li>
                <a></a>
              </li>
              <li>
                <a></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center p-4 mt-4">
        <p className="text-[13px]">
          &copy; تمامی حقوق برای شرکت پخش عقاب محفوظ است
        </p>
      </div>
    </footer>
  );
};

export default Footer;
