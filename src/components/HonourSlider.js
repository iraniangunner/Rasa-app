import honour1 from "../images/honour-1.jpg";
import honour2 from "../images/honour-2.jpg";
import honour3 from "../images/honour-3.jpg";
import honour4 from "../images/honour-4.jpg";

const HonourSlider = () => {
  return (
    <div className="my-10 sm:my-56 md:my-20">
      <div className="flex justify-center items-center bg-[#04244c]">
        <h1 className="text-[20px] px-2 py-2 my-4 font-[700] text-gray-300">
          افتخارات راسا صنعت
        </h1>
      </div>
      <div className="text-center flex justify-center bg-[#04244c]">
        <div className="w-[80rem] h-[300px] bg-transparent text-black overflow-hidden relative">
          <ul className="flex h-full animate-[scrolling_20s_linear_infinite]">
            <li className="flex justify-center items-center ml-14 flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
              <img src={honour1} />
            </li>
            <li className="flex justify-center items-center ml-14 flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
              <img src={honour2} />
            </li>
            <li className="flex justify-center items-center ml-14 flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
              <img src={honour3} />
            </li>
            <li className="flex justify-center items-center ml-8 flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
              <img src={honour4} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HonourSlider;
