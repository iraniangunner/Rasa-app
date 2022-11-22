import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const MenuModal = ({ modalOpen, handleClose }) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    );
  }

  const dropIn = {
    hidden: {
      x: 500,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
      },
    },
    exit: {
      x: 500,
      opacity: 0,
      transition: {
        duration: 0.3,
        type: "spring",
      },
    },
  };

  return (
    <Backdrop onClick={handleClose} className="lg:hidden">
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#ffffff] text-lg w-[70%] sm:w-[50%] md:w-[35%] shadow-2xl absolute top-[20px] right-[20px] bottom-[20px] rounded-lg overflow-auto"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex justify-end p-3">
          <button
            type="button"
            className="bg-[#16161a0a] dark:bg-[#ffffff1a] rounded-[14px] p-2"
            onClick={handleClose}
          >
            <IoMdClose size={25} />
          </button>
        </div>
        <ul className="pb-3 pt-1 px-8">
          <li className="my-2 text-gray-400 hover:text-black transition-colors ease-linear duration-200">
            <Link
              className="flex items-center py-2"
              to="/"
              onClick={handleClose}
            >
              <span className="ml-4">صفحه اصلی</span>
            </Link>
          </li>
          <li className="my-2">
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="text-gray-400 hover:text-black transition-colors ease-linear duration-200 "
              >
                محصولات
              </AccordionHeader>
              <AccordionBody>
                <ul>
                  <li className="my-2 text-gray-400 hover:text-black transition-colors ease-linear duration-200">
                    <Link
                      className="flex items-center p-2"
                      to="/صنایع-غذایی"
                      onClick={handleClose}
                    >
                      <span className="ml-4">صنایع غذایی</span>
                    </Link>
                  </li>
                  <li className="my-2 text-gray-400 hover:text-black transition-colors ease-linear duration-200">
                    <Link
                      className="flex items-center p-2"
                      to="/سلولزی-بهداشتی"
                      onClick={handleClose}
                    >
                      <span className="ml-4">سلولزی بهداشتی</span>
                    </Link>
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
          </li>

          <li className="my-2">
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="text-gray-400 hover:text-black transition-colors ease-linear duration-200"
              >
                برند های تجاری
              </AccordionHeader>
              <AccordionBody>
                <ul>
                  <li className="my-2 text-gray-400 hover:text-black transition-colors ease-linear duration-200">
                    <Link
                      className="flex items-center p-2"
                      to="/پرسان"
                      onClick={handleClose}
                    >
                      <span className="ml-4">پرسان</span>
                    </Link>
                  </li>
                  <li className="my-2 text-gray-400 hover:text-black transition-colors ease-linear duration-200">
                    <Link
                      className="flex items-center p-2"
                      to="/موسیان"
                      onClick={handleClose}
                    >
                      <span className="ml-4">موسیان</span>
                    </Link>
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
          </li>

          <li className="my-2">
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="text-gray-400 hover:text-black transition-colors ease-linear duration-200"
              >
               همکاری با ما
              </AccordionHeader>
              <AccordionBody>
                <ul>
                  <li className="my-2 text-gray-400 hover:text-black transition-colors ease-linear duration-200">
                    <Link
                      className="flex items-center p-2"
                      to="/تولید-کنندگان"
                      onClick={handleClose}
                    >
                      <span className="ml-4">تولید کنندگان</span>
                    </Link>
                  </li>
                  <li className="my-2 text-gray-400 hover:text-black transition-colors ease-linear duration-200">
                    <Link
                      className="flex items-center p-2"
                      to="/شرکت-پخش"
                      onClick={handleClose}
                    >
                      <span className="ml-4">شرکت های پخش</span>
                    </Link>
                  </li>
                  <li className="my-2 text-gray-400 hover:text-black transition-colors ease-linear duration-200">
                    <Link
                      className="flex items-center p-2"
                      to="/پرسنل"
                      onClick={handleClose}
                    >
                      <span className="ml-4">پرسنل</span>
                    </Link>
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
          </li>

          <li className="my-2 text-gray-400 hover:text-black transition-colors ease-linear duration-200">
            <Link
              className="flex items-center py-2"
              to="/news"
              onClick={handleClose}
            >
              <span className="ml-4">اخبار و رویدادها</span>
            </Link>
          </li>
          <li className="my-2 text-gray-400 hover:text-black transition-colors ease-linear duration-200">
            <Link
              className="flex items-center py-3"
              to="/about-us"
              onClick={handleClose}
            >
              <span className="ml-4">درباره ما</span>
            </Link>
          </li>
          <li className="my-2 text-gray-400 hover:text-black transition-colors ease-linear duration-200">
            <Link
              className="flex items-center py-3"
              to="/contact-us"
              onClick={handleClose}
            >
              <span className="ml-4">تماس با ما</span>
            </Link>
          </li>

          <li className="my-2 text-gray-400 hover:text-black transition-colors ease-linear duration-200">
            <Link
              to="/EN"
              className="flex items-center py-3"
              onClick={handleClose}
            >
              <span className="ml-4">EN</span>
            </Link>
          </li>
        </ul>
      </motion.div>
    </Backdrop>
  );
};

export default MenuModal;
