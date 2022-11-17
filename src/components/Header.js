import { useState, useEffect, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../images/logo-pakhshoghab.png";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { AnimatePresence } from "framer-motion";
import SearchModal from "./framerModal/SearchModal";
import MenuModal from "./framerModal/MenuModal";

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
    <header>
      <nav className="w-full flex items-center justify-between lg:justify-center py-4 px-3">
        <div className="flex justify-center items-center rounded-md mr-0 lg:hidden">
          <button type="button" onClick={openMenu}>
            <GiHamburgerMenu size={35} />
          </button>
        </div>
        <Link className="hidden lg:block ml-[20px]" to="/">
          <img src={logo} alt="pakhshoghab" className="w-full h-full" />
        </Link>

        <Link className="block lg:hidden" to="/">
          <img src={logo} alt="pakhshoghab" className="w-full h-full" />
        </Link>

        <div className="hidden lg:flex">
          <ul className="flex text-gray-400 gap-1 xl:gap-3 font-semibold lg:text-md xl:text-lg">
            <li className="hover:text-black transition-all ease-linear duration-200">
              <Link
                className="block w-full h-full px-2 xl:px-4 py-[20px]"
                to="/"
              >
                صفحه اصلی
              </Link>
            </li>

            <Menu
              as="li"
              className="relative inline-block text-left hover:text-black transition-all ease-linear duration-200"
            >
              <Menu.Button className="inline-flex w-full h-full px-2 xl:px-4 justify-between items-center rounded-md font-semibold lg:text-md hover:text-black transition-all ease-linear duration-200">
                <span>درباره ما</span>
                <ChevronDownIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 z-[10] w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/درباره-پخش-عقاب"
                          className={`${
                            active ? "bg-gray-400 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          درباره پخش عقاب
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/چارت-سازمانی"
                          className={`${
                            active ? "bg-gray-400 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          چارت سازمانی
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <li className="hover:text-black transition-all ease-linear duration-200">
              <Link
                className="block w-full h-full px-2 xl:px-4 py-[20px]"
                to="/خدمات"
              >
                خدمات
              </Link>
            </li>

            <li className="hover:text-black transition-all ease-linear duration-200">
              <Link
                className="block w-full h-full px-2 xl:px-4 py-[20px]"
                to="/مشتریان"
              >
                مشتریان
              </Link>
            </li>
            <li className="hover:text-black transition-all ease-linear duration-200">
              <Link
                className="block w-full h-full px-2 xl:px-4 py-[20px]"
                to="/brands"
              >
                برندها
              </Link>
            </li>

            <Menu
              as="li"
              className="relative inline-block text-left hover:text-black transition-all ease-linear duration-200"
            >
              <Menu.Button className="inline-flex w-full h-full px-2 xl:px-4 justify-between items-center rounded-md font-semibold lg:text-md">
                <span>بلاگ</span>
                <ChevronDownIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 z-[10] w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/مقالات"
                          className={`${
                            active ? "bg-gray-400 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          مقالات
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/تجارب-موفق"
                          className={`${
                            active ? "bg-gray-400 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          تجارب موفق
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/مجله-عقاب"
                          className={`${
                            active ? "bg-gray-400 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          مجله عقاب
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <Menu
              as="li"
              className="relative inline-block text-left hover:text-black transition-all ease-linear duration-200"
            >
              <Menu.Button className="inline-flex w-full h-full px-2 xl:px-4 justify-between items-center rounded-md font-semibold lg:text-md">
                <span>تماس با ما</span>
                <ChevronDownIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 z-[10] w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/تماس-با-ما"
                          className={`${
                            active ? "bg-gray-400 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          تماس با ما
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/همکاری-با-ما"
                          className={`${
                            active ? "bg-gray-400 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          همکاری با ما
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/صدای-مشتری"
                          className={`${
                            active ? "bg-gray-400 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          صدای مشتری
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <li className="hover:text-black transition-all ease-linear duration-200">
              <Link
                to="/EN"
                className="block w-full h-full px-2 xl:px-4 py-[20px]"
              >
                EN
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="mr-4 p-2"
          onClick={() => {
            isSearchOpen ? closeSearch() : openSearch();
          }}
        >
          <GoSearch size={25} />
        </button>
      </nav>
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
