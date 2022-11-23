import { makeStyles } from "@mui/styles";
import "./HeaderSlider.css";

const HeaderSlider = () => {
  const useStyles = makeStyles({
    // "@keyframes moveSlideshow": {
    //   "100%": {
    //     transform: "translateX(-66%)",
    //   },
    "@keyframes scrolling": {
      "0%": {
        transform: "translateX(70rem)",
      },
      "100%": {
        transform: "translateX(-95rem)",
      },
    },
    container: {
      color: "white",
      textAlign: "center",
      justifyContent: "center",
      display: "flex",
    },
    content: {
      width: "80rem",
      height: "40px",
      marginTop: "20px",
      backgroundColor: "transparent",
      color: "black",
      overflow: "hidden",
      position: "relative",
    },
    scrollContent: {
      animation: "$scrolling 15s linear infinite",
      listStyle: "none",
      height: "100%",
      display: "flex",
    },
    li: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      width: "10rem",
      maxHeight: "100%",
      fontSize: "10px",
      whiteSpace: "nowrap",
    },
  });

  const classes = useStyles();

  return (
    <div
      className="text-center justify-center flex lg:mt-[102px] bg-gray-800"
      // style={{
      //   // backgroundColor: uiStatus === 'dark' ? '#001328' : "#edb879",
      //   backgroundColor: "#000000",
      // }}
    >
      <div className="w-[80rem] h-[60px] bg-transparent text-black overflow-hidden relative">
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
          {/* <li className="flex justify-center items-center flex-shrink-0 w-[10rem] max-h-full text-[14px] whitespace-nowrap">
            <p>های مصرفی در ایران است.</p>
          </li> */}
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
            <p style={{ wordSpacing: "4px" }}>مشتریان خود به ارمغان می آورد</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderSlider;
