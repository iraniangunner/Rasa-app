import "./FooterSlider";
import image from "../../images/etehadiye.png";

const FooterSlider = () => {
  return (
    <div className="text-center flex justify-center bg-gray-600 my-10 sm:my-56 md:my-20">
      {/* <div className="flex justify-center items-center text-white p-4">افتخارات راسا صنعت</div> */}
      <div className="w-[80rem] h-[200px] bg-transparent text-black overflow-hidden relative">
        <ul className="scroll-content">
          <li className="flex justify-center items-center ml-14 flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
            <img src={image} className="" />
            {/* <p style={{ wordSpacing: "4px" }}>شرکت راسا صنعت یکی از شرکت های</p> */}
          </li>
          <li className="flex justify-center items-center ml-14 flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
            {/* <p style={{ wordSpacing: "4px" }}>پیشرو در زمینه فروش و پخش</p> */}
            <img src={image} className="" />
          </li>
          <li className="flex justify-center items-center ml-14 flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
            {/* <p style={{ wordSpacing: "4px" }}>
              مویرگی کالاهای مصرفی در ایران است.
            </p> */}
            <img src={image} className="" />
          </li>
          <li className="flex justify-center items-center ml-8 flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
            {/* <p style={{ wordSpacing: "4px" }}>طرح کسب و کار راسا صنعت</p> */}
            <img src={image} className="" />
          </li>
          <li className="flex justify-center items-center ml-10 flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
            {/* <p style={{ wordSpacing: "4px" }}>بگونه‌ای طراحی شده است که</p> */}
            <img src={image} className="" />
          </li>
          <li className="flex justify-center items-center ml-12 flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
            {/* <p style={{ wordSpacing: "4px" }}>سرعت، اطمینان و رضایت را برای</p> */}
            <img src={image} className="" />
          </li>
          <li className="flex justify-center items-center flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
            {/* <p style={{ wordSpacing: "4px" }}>مشتریان خود به ارمغان می آورد.</p> */}
            <img src={image} className="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterSlider;
