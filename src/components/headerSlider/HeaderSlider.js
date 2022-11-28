import "./HeaderSlider.css";

const HeaderSlider = () => {
  return (
    <div className="text-center flex justify-center bg-white">
      <div className="w-[80rem] h-[40px] bg-transparent text-[#04244c] font-[700] overflow-hidden relative">
        <ul className="scroll-content">
          <li className="flex justify-center items-center ml-14 flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
            <p style={{ wordSpacing: "4px" }}>شرکت راسا صنعت یکی از شرکت های</p>
          </li>
          <li className="flex justify-center items-center ml-14 flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
            <p style={{ wordSpacing: "4px" }}>پیشرو در زمینه فروش و پخش</p>
          </li>
          <li className="flex justify-center items-center ml-14 flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
            <p style={{ wordSpacing: "4px" }}>
              مویرگی کالاهای مصرفی در ایران است.
            </p>
          </li>
          <li className="flex justify-center items-center ml-8 flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
            <p style={{ wordSpacing: "4px" }}>طرح کسب و کار راسا صنعت</p>
          </li>
          <li className="flex justify-center items-center ml-10 flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
            <p style={{ wordSpacing: "4px" }}>بگونه‌ای طراحی شده است که</p>
          </li>
          <li className="flex justify-center items-center ml-12 flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
            <p style={{ wordSpacing: "4px" }}>سرعت، اطمینان و رضایت را برای</p>
          </li>
          <li className="flex justify-center items-center flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
            <p style={{ wordSpacing: "4px" }}>مشتریان خود به ارمغان می آورد.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderSlider;
