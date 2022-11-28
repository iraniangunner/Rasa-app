import { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../images/logo-pakhshoghab.png";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { AnimatePresence } from "framer-motion";
import SearchModal from "./framerModal/SearchModal";
import MenuModal from "./framerModal/MenuModal";
import HeaderSlider from "./headerSlider/HeaderSlider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [browserWidth, setBrowserWidth] = useState(0);

  const closeSearch = () => setIsSearchOpen(false);
  const openSearch = () => setIsSearchOpen(true);

  const closeMenu = () => setIsMenuOpen(false);
  const openMenu = () => setIsMenuOpen(true);

  useEffect(() => {
    if (browserWidth >= 992) {
      setIsMenuOpen(false);
      setIsSearchOpen(false);
      document.body.style.overflow = "visible";
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
    if (isMenuOpen || isSearchOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "visible";
    }

    return () => {
      document.documentElement.style.overflow = "visible";
    };
  }, [isMenuOpen, isSearchOpen]);

  return (
    <header className="bg-[#04244c] lg:sticky lg:top-0 lg:left-0 lg:right-0 z-[1000]">
      <nav className="w-full flex items-center justify-center lg:justify-around py-2 px-3">
        <Link className="block lg:hidden" to="/">
          <img src={logo} alt="pakhshoghab" className="w-full h-full" />
        </Link>

        <div className="hidden lg:flex">
          <ul className="flex text-gray-300 gap-1 xl:gap-3 font-semibold lg:text-sm xl:text-[1rem]">
            <li className="hover:text-white transition-all ease-linear duration-200">
              <Link
                className="block w-full h-full pr-3 xl:pr-4 py-[20px]"
                to="/"
              >
                صفحه اصلی
              </Link>
            </li>

            <li className="group relative cursor-pointer hover:text-white transition-all ease-linear duration-200">
              <div className="font-semibold rounded inline-flex items-center h-full pr-3 xl-pr-4">
                <span className="ml-1">محصولات</span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
              <ul className="absolute text-gray-700 pt-1 opacity-0 scale-y-0 invisible group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible origin-[0_0_0] transition-all w-56 shadow-md">
                <li>
                  <Link
                    className="rounded-t bg-gray-200 hover:bg-gray-500 hover:text-white py-2 px-4 block whitespace-no-wrap text-sm"
                    to="/صنایع-غذایی"
                  >
                    صنایع غذایی
                  </Link>
                </li>
                <li>
                  <Link
                    className="rounded-b bg-gray-200 hover:bg-gray-500 hover:text-white py-2 px-4 block whitespace-no-wrap text-sm"
                    to="/سلولزی-بهداشتی"
                  >
                    سلولزی بهداشتی
                  </Link>
                </li>
              </ul>
            </li>

            <li className="group relative cursor-pointer hover:text-white transition-all ease-linear duration-200">
              <div className="font-semibold rounded inline-flex items-center h-full pr-3 xl:pr-4">
                <span className="ml-1">برند ها</span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
              <ul className="absolute text-gray-700 pt-1 opacity-0 scale-y-0 invisible group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible origin-[0_0_0] transition-all w-56 shadow-md">
                <li>
                  <Link
                    className="rounded-t bg-gray-200 hover:bg-gray-500 hover:text-white py-2 px-4 block whitespace-no-wrap text-sm"
                    to="/پرسان"
                  >
                    پرسان
                  </Link>
                </li>
                <li>
                  <Link
                    className="rounded-b bg-gray-200 hover:bg-gray-500 hover:text-white py-2 px-4 block whitespace-no-wrap text-sm"
                    to="/موسیان"
                  >
                    موسیان
                  </Link>
                </li>
              </ul>
            </li>

            <li className="group relative cursor-pointer hover:text-white transition-all ease-linear duration-200">
              <div className="font-semibold rounded inline-flex items-center h-full pr-3 xl:pr-4">
                <span className="ml-1">همکاری با ما</span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
              <ul className="absolute text-gray-700 pt-1 opacity-0 scale-y-0 invisible group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible origin-[0_0_0] transition-all w-56 shadow-md">
                <li>
                  <Link
                    className="rounded-t bg-gray-200 hover:bg-gray-500 hover:text-white py-2 px-4 block whitespace-no-wrap text-sm"
                    to="/تولید-کنندگان"
                  >
                    تولید کنندگان
                  </Link>
                </li>
                <li>
                  <Link
                    className="bg-gray-200 hover:bg-gray-500 hover:text-white py-2 px-4 block whitespace-no-wrap text-sm"
                    to="/شرکت-پخش"
                  >
                    شرکت های پخش
                  </Link>
                </li>
                <li>
                  <Link
                    className="rounded-b bg-gray-200 hover:bg-gray-500 hover:text-white py-2 px-4 block whitespace-no-wrap text-sm"
                    to="/پرسنل"
                  >
                    پرسنل
                  </Link>
                </li>
              </ul>
            </li>

            <li className="hover:text-white transition-all ease-linear duration-200">
              <Link
                className="block w-full h-full pr-3 xl:pr-4 py-[20px]"
                to="/news"
              >
                اخبار و رویدادها
              </Link>
            </li>

            <li className="hover:text-white transition-all ease-linear duration-200">
              <Link
                className="block w-full h-full pr-3 xl:pr-4 py-[20px]"
                to="/about-us"
              >
                درباره ما
              </Link>
            </li>

            <li className="hover:text-white transition-all ease-linear duration-200">
              <Link
                className="block w-full h-full pr-3 xl:pr-4 py-[20px]"
                to="/contact-us"
              >
                تماس با ما
              </Link>
            </li>
            <li className="hover:text-white transition-all ease-linear duration-200">
              <Link
                to="/EN"
                className="flex items-center justify-center w-full h-full pr-3 xl:pr-4 py-[20px] "
              >
                EN
              </Link>
            </li>
          </ul>
          <div className="w-[1px] bg-[#C70b0d] mr-4 xl:mr-10"></div>
          <div className="hidden lg:flex justify-center items-center mr-4 xl:mr-10">
            <button
              className="p-2 text-gray-300 hover:text-white transition-all ease-linear duration-200"
              onClick={() => {
                isSearchOpen ? closeSearch() : openSearch();
              }}
            >
              <GoSearch size={25} />
            </button>
          </div>
        </div>

        <Link className="hidden lg:block mr-8" to="/">
          <img src={logo} alt="pakhshoghab" className="w-full h-full" />
        </Link>
      </nav>

      <div className="block lg:hidden z-[10000] fixed bottom-0 h-[44px] w-full">
        <nav className="absolute left-0 top-0 w-full h-full py-2 flex justify-between items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-md absolute right-[50%] bottom-[-2px] translate-x-[50%]"
            width="768"
            height="50"
            viewBox="0 0 768 50"
          >
            <path
              fill="#04244c"
              fillRule="evenodd"
              d="M-15,0H345c12.855,0,16.965,20,39,20,22.238,0,25.921-20,39-20H828V95H-15V0Z"
            ></path>
          </svg>
          <button
            type="button"
            onClick={openMenu}
            className="z-[10] w-full h-full flex justify-center items-center text-white"
          >
            <GiHamburgerMenu size={30} />
          </button>

          <Link
            to="/"
            className="z-[10] absolute right-[50%] top-[-35px] translate-x-[50%] w-[47px] h-[47px] rounded-[50%] text-[18px] leading-[50px] flex justify-center items-center bg-[#B00937] text-[#ffffff]"
          >
            <svg
              class="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
          </Link>

          <button
            className="z-[10] w-full h-full flex justify-center items-center text-white"
            onClick={() => {
              isSearchOpen ? closeSearch() : openSearch();
            }}
          >
            <GoSearch size={25} />
          </button>
        </nav>
      </div>

      {/* Responsive navbar */}
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isMenuOpen && (
          <MenuModal modalOpen={openMenu} handleClose={closeMenu} />
        )}
      </AnimatePresence>

      {/* Search box */}
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isSearchOpen && (
          <SearchModal modalOpen={openSearch} handleClose={closeSearch} />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
