import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (
    <button
      type="button"
      className={`hidden lg:flex justify-center items-center fixed bottom-[30px] left-[40px] ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-all duration-500 z-[100] bg-[#f7f7f7] text-[#00000080] w-[43px] h-[43px] rounded-md shadow-lg`}
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g>
          <polygon points="12 6.414 19.293 13.707 20.707 12.293 12 3.586 3.293 12.293 4.707 13.707 12 6.414" />
          <polygon points="3.293 18.293 4.707 19.707 12 12.414 19.293 19.707 20.707 18.293 12 9.586 3.293 18.293" />
        </g>
      </svg>
    </button>
  );
};

export default ScrollToTop;
