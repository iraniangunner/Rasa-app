import "./HonourSlider";
import image from "../../images/etehadiye.png";

const HonourSlider = () => {
  return (
    <div className="text-center flex justify-center bg-gray-600 my-10 sm:my-56 md:my-20">
      <div className="w-[80rem] h-[200px] bg-transparent text-black overflow-hidden relative">
        <ul className="scroll-content">
          <li className="flex justify-center items-center ml-14 flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
            <img src={image} className="" />
          </li>
          <li className="flex justify-center items-center ml-14 flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
            <img src={image} className="" />
          </li>
          <li className="flex justify-center items-center ml-14 flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
            <img src={image} className="" />
          </li>
          <li className="flex justify-center items-center ml-8 flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
            <img src={image} className="" />
          </li>
          <li className="flex justify-center items-center ml-10 flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
            <img src={image} className="" />
          </li>
          <li className="flex justify-center items-center ml-12 flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
            <img src={image} className="" />
          </li>
          <li className="flex justify-center items-center flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
            <img src={image} className="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HonourSlider;
