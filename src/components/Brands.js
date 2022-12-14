import { useState } from "react";
import { Link } from "react-router-dom";
import tooska from "../images/Tooska.png";
import nancy from "../images/nancy.png";
import viatana from "../images/viatana.png";
import goldenMax from "../images/Golden-MAX.png";
import rojin from "../images/rojin.png";
import teno from "../images/teno.png";

const Brands = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <div className="w-full lg:w-[80%] mx-auto mt-10 lg:mt-16">
        <nav className="flex justify-between px-6" aria-label="Breadcrumb">
          <h1 className="text-[20px]">برند ها</h1>
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center ml-2">
              <Link
                to="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                خانه
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <polygon points="13.707 4.707 12.293 3.293 3.586 12 12.293 20.707 13.707 19.293 6.414 12 13.707 4.707" />
                    <polygon points="19.707 4.707 18.293 3.293 9.586 12 18.293 20.707 19.707 19.293 12.414 12 19.707 4.707" />
                  </g>
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                  برند ها
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="w-full lg:w-[80%] mx-auto mt-10 lg:mt-16">
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap gap-2 pt-3 pb-4 px-2 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:ml-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-pink-600"
                      : "text-pink-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  همه
                </a>
              </li>
              <li className="-mb-px mr-2 last:ml-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-pink-600"
                      : "text-pink-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  شوینده
                </a>
              </li>
              <li className="-mb-px mr-2 last:ml-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 3
                      ? "text-white bg-pink-600"
                      : "text-pink-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  سلولزی
                </a>
              </li>
              <li className="-mb-px mr-2 last:ml-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 4
                      ? "text-white bg-pink-600"
                      : "text-pink-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#link4"
                  role="tablist"
                >
                  غذایی
                </a>
              </li>
              <li className="-mb-px mr-2 last:ml-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 5
                      ? "text-white bg-pink-600"
                      : "text-pink-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(5);
                  }}
                  data-toggle="tab"
                  href="#link5"
                  role="tablist"
                >
                  آرایشی و بهداشتی
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words px-2 bg-white w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <p className="text-justify text-[14px] text-[#626262]">
                      شرکت پخش عقاب از بدو تأسیس، همواره سعی بر آن داشته تا با
                      رویکردی کاملا علمی کلیه خدمات خود را به مشتریان ارائه دهد
                      و از این طریق به عنوان شرکتی پیشتاز و مدرن در صنعت پخش و
                      توزیع در کشور گام بردارد. شرکت پخش عقاب بواسطه سال‌هات
                      تجربه در این صنعت و ارائه خدماتی باکیفیت، افتخار همکاری با
                      برندهای مطرح ایرانی و بین‌‌المللی را دارد و همواره می‌کوشد
                      تا موجبات رضایت این برندها را فراهم آورد.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                      <div className="flex items-center justify-center">
                        <img src={tooska} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={rojin} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={nancy} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={teno} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={goldenMax} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={viatana} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={tooska} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={rojin} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={nancy} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={teno} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={goldenMax} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={viatana} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={rojin} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={nancy} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={teno} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={goldenMax} width={75} height={75} />
                      </div>
                    </div>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <p className="text-justify text-[14px] text-[#626262]">
                      شوینده‌ها ازجمله محصولاتی هستند که در سبد خرید هر خانواده
                      ایرانی جای دارند، چراکه امروزه سطح آگاهی عمومی نسبت به نقش
                      شویندها در پیشگیری از بروز بیماری‌ها به‌واسطه برطرف کردن
                      آلودگی‌ها بالا رفته است. شرکت پخش عقاب با بررسی بازار و
                      برندهای موجود، با معتبرترین شرکت‌ها در این زمینه همکاری
                      می‌کند. با توجه به رایحه قوی این محصولات، روش‌های انبارش و
                      توزیع این محصولات نیازمند تمهیدات منحصربه‌فردی است که شرکت
                      پخش عقاب با علم به این موضوع و تجربه‌ای چندین ساله توانسته
                      است با حفظ کیفیت، به شیوه‌ای مؤثر این محصولات را در تمام
                      ایران توزیع کند.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                      <div className="flex items-center justify-center">
                        <img src={tooska} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={rojin} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={nancy} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={teno} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={goldenMax} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={viatana} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={tooska} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={rojin} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={nancy} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={teno} width={75} height={75} />
                      </div>
                    </div>
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                    <p className="text-justify text-[14px] text-[#626262]">
                      صنایع سلولزی و بهداشتی یکی از مهم‌ترین صنایع ایران محسوب
                      می‌شود؛ جمعیت 80 میلیونی ایران و استفاده تمامی اقشار جامعه
                      در همه مقاطع سنی، بازار بسیار بزرگی برای تولیدکنندگان داخل
                      و خارج دستمال کاغذی و بهداشتی فراهم کرده است. با توجه به
                      آمارهای رسمی در سال 93: حجم بازار تولیدات سلولزی و دستمال
                      کاغذی و بهداشتی 50 هزار تن با گردش مالی حدود 100 میلیارد
                      تومان برآورد شده است که این گردش مالی در دو بخش تولید و
                      بسته بندی دستمال کاغذی در ایران حاصل می‌شود. از طرفی نیاز
                      بازار داخل کشور 40 هزار تن است که توسط تولیدکنندگان داخلی
                      تأمین می شود. مازاد تولید بر نیاز کشور نیز سهم صادرات
                      چندین میلیون دلاری به کشورهای همسایه داست. در حال حاضر
                      بصورت اسمی 300 واحد تولید محصولات سلولزی در ایران وجود
                      دارد. اما تنها 50 شرکت بطور واقعی به تولید این محصولات در
                      بسته بندی‌های مختلف مشغول هستند. ظرفیت تولید واقعی این 50
                      واحد حدود 50 تن در سال است، در حالیکه ظرفیت اسمی تولید
                      سالانه این واحدها بالغ بر ۱۰۰ هزار تن است. از نظر عوامل
                      محیطی تأثیرگذار بر این صنعت، بحران‌های ارزی و اقتصادی در
                      ایران دو بار در سالهای 86 و 91 باعث افزایش شدید قیمت
                      دستمال کاغذی شد. تنها در سال ۹۱ قیمت دستمال کاغذی نسبت به
                      سال قبل دو برابر شد و از کیلویی ۲۰۰۰ تومان به ۴۰۰۰ تومان
                      افزایش یافت و بالطبع موجب رکود و کاهش فروش نسبت به سال قبل
                      شد. کاهش فروش به همراه افزایش قیمت مواد اولیه و بالا رفتن
                      هزینه حقوق کارگران باعث تعطیلی برخی از واحدهای تولیدی
                      محصولات سلولزی و بهداشتی در کشور شد. همین بحران‌های ارزی و
                      اقتصادی در ایران در کنار آمارهای ارائه شده از حجم بازار،
                      محیط رقابتی شدیدی برای تولیدکنندگان صنایع سلولزی و بهداشتی
                      در ایران بوجود آورده است. خوشبختانه با توجه به دیدگاه
                      حمایتی دولت به تولیدات داخلی، در سال ۹۲ به پیشنهاد وزارت
                      صنعت، معدن و تجارت، تعرفه کاغذهای بهداشتی با کد ۴۸۰۳ با ۴
                      درصد افزایش از ۸ درصد به ۱۲ درصد در سال ۹۳ رسید. امروز 30
                      شرکت برتر، حدود 90 درصد نیاز بازار داخل را در دست گرفته
                      اند و به طور کلی تولیدات داخلی کشورمان در بازار دستمال
                      کاغذی و محصولات بهداشتی به خوبی در رقابت با نمونه‌های
                      خارجی برنده هستند. از طرف دیگر محصولات بهداشتی و سلولزی
                      به‌طور مستقیم با سلامت افراد جامعه نیز سروکار دارد. به
                      همین دلیل صنایع سلولزی و بهداشتی به لحاظ استانداردهای
                      تولید بسیار حساس بوده و از جهت تأمین مواد اولیه مرغوب،
                      بهداشت محیط تولید و کیفیت استاندارد محصول نهایی اهمیت
                      فراوانی دارد. باید توجه کرد که در تولید دستمال‌های کاغذی
                      از مواد اولیه یا تیشوی نامرغوب و یا از ضایعات دستمال‌های
                      دیگر استفاده نشود. استفاده از مواد اولیه نامرغوب، ممکن است
                      باعث بروز آلرژی، سرفه، مشکلات پوستی و... شود. به همین
                      دلیل، شرکت پخش عقاب همیشه در لاین فروش محصولات سلولزی و
                      بهداشتی اهمیت فراوانی برای کیفیت محصولات و شهرت
                      تأمین‌کننده قائل بوده است.. متخصصان این امر در شرکت پخش
                      عقاب در انتخاب دستمال‌کاغذی مرغوب و تشخیص انواع نامرغوب به
                      درجه سفیدی کاغذ، میزان نرمی کاغذ، میزان رطوبت، بوی کاغذ
                      ،کیفیت بسته‌بندی و استحکام آن هنگام حمل‌ونقل توجه فراوان
                      می‌کنند.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                      <div className="flex items-center justify-center">
                        <img src={goldenMax} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={viatana} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={tooska} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={rojin} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={nancy} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={teno} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={goldenMax} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={viatana} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={rojin} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={nancy} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={teno} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={goldenMax} width={75} height={75} />
                      </div>
                    </div>
                  </div>
                  <div
                    className={openTab === 4 ? "block" : "hidden"}
                    id="link4"
                  >
                    <p className="text-justify text-[14px] text-[#626262]">
                      داشتن رژیم غذایی سالم از ارکان اساسی سلامتی است که نیازمند
                      مواد اولیه تازه و باکیفیت است. در این میان با توجه به وسعت
                      و جمعیت بالای کلان‌شهرها، توزیع و پخش مواد غذایی با
                      سرعت‌بالا، هم‌زمان با حفظ کیفیت و انبارش صحیح بسیار حائز
                      اهمیت است. شرکت پخش عقاب با داشتن شبکه‌ی پخش علمی و اصولی
                      و به پشتوانه‌ی تجربه‌ی چندین ساله، با بهترین‌های صنعت غذا
                      همکاری کرده و محصولات آن‌ها را در تمام ایران توزیع می‌کند.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                      <div className="flex items-center justify-center">
                        <img src={tooska} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={rojin} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={nancy} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={teno} width={75} height={75} />
                      </div>

                      <div className="flex items-center justify-center">
                        <img src={nancy} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={teno} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={goldenMax} width={75} height={75} />
                      </div>
                    </div>
                  </div>
                  <div
                    className={openTab === 5 ? "block" : "hidden"}
                    id="link5"
                  >
                    <p className="text-justify text-[14px] text-[#626262]">
                      محصولات آرایشی و بهداشتی به عنوان زیرمجموعه‌ای پرمصرف از
                      محصولات FMCG و کالاهای مصرفی مارک‌دار هستند که در کسب‌وکار
                      سالن‌های آرایشی و زیبایی تقاضای زیادی دارند. قابل‌توجه است
                      که ایران یکی از بزرگ‌ترین مصرف‌کنندگان محصولات آرایشی و
                      بهداشتی است و از این نظر در رتبه هفتم دنیا و دوم خاورمیانه
                      قرار دارد. حجم بازار لوازم آرایشی در ایران در حدود ۲/ ۲
                      میلیارد دلار است که ۷۰ درصد از این تقاضا توسط کالاهای
                      خارجی تأمین می‌شود. شرکت پخش عقاب به‌منظور گسترش نوآوری‌ها
                      و کسب رهبری در بازار همواره به دنبال بهترین‌ها در سبد
                      کالایی خود است. در این راستا شرکت آلمانی هنکل جزو
                      بهترین‌های بازار است و محصولات آن در 150 کشور مختلف به
                      فروش می‌رسد. گروه محصولات آرایشی و بهداشتی هنکل نیز به‌طور
                      مداوم در حال گسترش است و تا امروز واحدهای تولیدی این شرکت
                      برند‌های متعدد و موفقی را در زمینه بهداشت و آرایش مو و
                      پوست توسعه داده‌اند. شرکت پخش عقاب همکاری خود با شرکت هنکل
                      را از سال 2015 با پخش و فروش مویرگی شوینده‌های پریل و
                      پرسیل آغاز نموده و تا امروز روابط تجاری قوی و پایداری با
                      این شرکت آلمانی بنیان نهاده است. اکنون محصولات آرایشی و
                      بهداشتی هنکل مانند شوارسکوف، تافت، گلیس، پلت، فا و شاوما
                      نیز به سبد کالایی پخش عقاب اضافه‌شده است تا رضایت کامل
                      مشتریان فراهم شود.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                      <div className="flex items-center justify-center">
                        <img src={tooska} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={rojin} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={nancy} width={75} height={75} />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={teno} width={75} height={75} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
