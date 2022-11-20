import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, [pathname]);
//   return null;
// };
// export default ScrollToTop;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { pathname } = useLocation();

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
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

  //scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <>
      {isVisible && (
        <button
          type="button"
          className="fixed left-[20px] bottom-[40px] lg:right-[40px] z-[100] lg:bottom-[30px] flex justify-center items-center bg-[#f7f7f7] text-[#00000080] w-[43px] h-[43px] shadow-lg"
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
      )}
    </>
  );
};

export default ScrollToTop;
