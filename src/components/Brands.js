import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const Brands = () => {
  // const data = [
  //   {
  //     Label: "همه",
  //     value: "all",
  //     desc: `شرکت پخش عقاب از بدو تأسیس، همواره سعی بر آن داشته تا با رویکردی کاملا علمی کلیه خدمات خود را به مشتریان ارائه دهد و از این طریق به عنوان شرکتی پیشتاز و مدرن در صنعت پخش و توزیع در کشور گام بردارد. شرکت پخش عقاب بواسطه سال‌هات تجربه در این صنعت و ارائه خدماتی باکیفیت، افتخار همکاری با برندهای مطرح ایرانی و بین‌‌المللی را دارد و همواره می‌کوشد تا موجبات رضایت این برندها را فراهم آورد.`,
  //   },
  //   {
  //     label: "ٌشوینده",
  //     value: "washer",
  //     desc: `شوینده‌ها ازجمله محصولاتی هستند که در سبد خرید هر خانواده ایرانی جای دارند، چراکه امروزه سطح آگاهی عمومی نسبت به نقش شویندها در پیشگیری از بروز بیماری‌ها به‌واسطه برطرف کردن آلودگی‌ها بالا رفته است. شرکت پخش عقاب با بررسی بازار و برندهای موجود، با معتبرترین شرکت‌ها در این زمینه همکاری می‌کند. با توجه به رایحه قوی این محصولات، روش‌های انبارش و توزیع این محصولات نیازمند تمهیدات منحصربه‌فردی است که شرکت پخش عقاب با علم به این موضوع و تجربه‌ای چندین ساله توانسته است با حفظ کیفیت، به شیوه‌ای مؤثر این محصولات را در تمام ایران توزیع کند.`,
  //   },

  //   {
  //     label: "سلولزی",
  //     value: "cellulose",
  //     desc: `دستمال کاغذی و بهداشتی فراهم کرده است. با توجه به آمارهای رسمی در سال 93: حجم بازار تولیدات سلولزی و دستمال کاغذی و بهداشتی 50 هزار تن با گردش مالی حدود 100 میلیارد تومان برآورد شده است که این گردش مالی در دو بخش تولید و بسته بندی دستمال کاغذی در ایران حاصل می‌شود. از طرفی نیاز بازار داخل کشور 40 هزار تن است که توسط تولیدکنندگان داخلی تأمین می شود. مازاد تولید بر نیاز کشور نیز سهم صادرات چندین میلیون دلاری به کشورهای همسایه داست. در حال حاضر بصورت اسمی 300 واحد تولید محصولات سلولزی در ایران وجود دارد. اما تنها 50 شرکت بطور واقعی به تولید این محصولات در بسته بندی‌های مختلف مشغول هستند. ظرفیت تولید واقعی این 50 واحد حدود 50 تن در سال است، در حالیکه ظرفیت اسمی تولید سالانه این واحدها بالغ بر ۱۰۰ هزار تن است. از نظر عوامل محیطی تأثیرگذار بر این صنعت، بحران‌های ارزی و اقتصادی در ایران دو بار در سالهای 86 و 91 باعث افزایش شدید قیمت دستمال کاغذی شد. تنها در سال ۹۱ قیمت دستمال کاغذی نسبت به سال قبل دو برابر شد و از کیلویی ۲۰۰۰ تومان به ۴۰۰۰ تومان افزایش یافت و بالطبع موجب رکود و کاهش فروش نسبت به سال قبل شد`,
  //   },

  //   {
  //     Label: "غذایی",
  //     value: "dietary",
  //     desc: `داشتن رژیم غذایی سالم از ارکان اساسی سلامتی است که نیازمند مواد اولیه تازه و باکیفیت است. در این میان با توجه به وسعت و جمعیت بالای کلان‌شهرها، توزیع و پخش مواد غذایی با سرعت‌بالا، هم‌زمان با حفظ کیفیت و انبارش صحیح بسیار حائز اهمیت است. شرکت پخش عقاب با داشتن شبکه‌ی پخش علمی و اصولی و به پشتوانه‌ی تجربه‌ی چندین ساله، با بهترین‌های صنعت غذا همکاری کرده و محصولات آن‌ها را در تمام ایران توزیع می‌کند. `,
  //   },
  //   {
  //     label: "ٌآرایشی و بهداشتی",
  //     value: "cosmetics",
  //     desc: `محصولات آرایشی و بهداشتی به عنوان زیرمجموعه‌ای پرمصرف از محصولات FMCG و کالاهای مصرفی مارک‌دار هستند که در کسب‌وکار سالن‌های آرایشی و زیبایی تقاضای زیادی دارند. قابل‌توجه است که ایران یکی از بزرگ‌ترین مصرف‌کنندگان محصولات آرایشی و بهداشتی است و از این نظر در رتبه هفتم دنیا و دوم خاورمیانه قرار دارد. حجم بازار لوازم آرایشی در ایران در حدود ۲/ ۲ میلیارد دلار است که ۷۰ درصد از این تقاضا توسط کالاهای خارجی تأمین می‌شود. شرکت پخش عقاب به‌منظور گسترش نوآوری‌ها و کسب رهبری در بازار همواره به دنبال بهترین‌ها در سبد کالایی خود است. در این راستا شرکت آلمانی هنکل جزو بهترین‌های بازار است و محصولات آن در 150 کشور مختلف به فروش می‌رسد. گروه محصولات آرایشی و بهداشتی هنکل نیز به‌طور مداوم در حال گسترش است و تا امروز واحدهای تولیدی این شرکت برند‌های متعدد و موفقی را در زمینه بهداشت و آرایش مو و پوست توسعه داده‌اند. شرکت پخش عقاب همکاری خود با شرکت هنکل را از سال 2015 با پخش و فروش مویرگی شوینده‌های پریل و پرسیل آغاز نموده و تا امروز روابط تجاری قوی و پایداری با این شرکت آلمانی بنیان نهاده است. اکنون محصولات آرایشی و بهداشتی هنکل مانند شوارسکوف، تافت، گلیس، پلت، فا و شاوما نیز به سبد کالایی پخش عقاب اضافه‌شده است تا رضایت کامل مشتریان فراهم شود.`,
  //   },
  // ];

  const data = [
    {
      label: "همه",
      value: "html",
      desc: `شرکت پخش عقاب از بدو تأسیس، همواره سعی بر آن داشته تا با رویکردی کاملا علمی کلیه خدمات خود را به مشتریان ارائه دهد و از این طریق به عنوان شرکتی پیشتاز و مدرن در صنعت پخش و توزیع در کشور گام بردارد. شرکت پخش عقاب بواسطه سال‌هات تجربه در این صنعت و ارائه خدماتی باکیفیت، افتخار همکاری با برندهای مطرح ایرانی و بین‌‌المللی را دارد و همواره می‌کوشد تا موجبات رضایت این برندها را فراهم آورد.`,
    },
    {
      label: "شوینده",
      value: "react",
      desc: `شوینده‌ها ازجمله محصولاتی هستند که در سبد خرید هر خانواده ایرانی جای دارند، چراکه امروزه سطح آگاهی عمومی نسبت به نقش شویندها در پیشگیری از بروز بیماری‌ها به‌واسطه برطرف کردن آلودگی‌ها بالا رفته است. شرکت پخش عقاب با بررسی بازار و برندهای موجود، با معتبرترین شرکت‌ها در این زمینه همکاری می‌کند. با توجه به رایحه قوی این محصولات، روش‌های انبارش و توزیع این محصولات نیازمند تمهیدات منحصربه‌فردی است که شرکت پخش عقاب با علم به این موضوع و تجربه‌ای چندین ساله توانسته است با حفظ کیفیت، به شیوه‌ای مؤثر این محصولات را در تمام ایران توزیع کند.`,
    },
 
    {
      label: "سلولزی",
      value: "vue",
      desc: `دستمال کاغذی و بهداشتی فراهم کرده است. با توجه به آمارهای رسمی در سال 93: حجم بازار تولیدات سلولزی و دستمال کاغذی و بهداشتی 50 هزار تن با گردش مالی حدود 100 میلیارد تومان برآورد شده است که این گردش مالی در دو بخش تولید و بسته بندی دستمال کاغذی در ایران حاصل می‌شود. از طرفی نیاز بازار داخل کشور 40 هزار تن است که توسط تولیدکنندگان داخلی تأمین می شود. مازاد تولید بر نیاز کشور نیز سهم صادرات چندین میلیون دلاری به کشورهای همسایه داست. در حال حاضر بصورت اسمی 300 واحد تولید محصولات سلولزی در ایران وجود دارد. اما تنها 50 شرکت بطور واقعی به تولید این محصولات در بسته بندی‌های مختلف مشغول هستند. ظرفیت تولید واقعی این 50 واحد حدود 50 تن در سال است، در حالیکه ظرفیت اسمی تولید سالانه این واحدها بالغ بر ۱۰۰ هزار تن است. از نظر عوامل محیطی تأثیرگذار بر این صنعت، بحران‌های ارزی و اقتصادی در ایران دو بار در سالهای 86 و 91 باعث افزایش شدید قیمت دستمال کاغذی شد. تنها در سال ۹۱ قیمت دستمال کاغذی نسبت به سال قبل دو برابر شد و از کیلویی ۲۰۰۰ تومان به ۴۰۰۰ تومان افزایش یافت و بالطبع موجب رکود و کاهش فروش نسبت به سال قبل شد`,
    },
 
    {
      label: "غذایی",
      value: "angular",
      desc: `داشتن رژیم غذایی سالم از ارکان اساسی سلامتی است که نیازمند مواد اولیه تازه و باکیفیت است. در این میان با توجه به وسعت و جمعیت بالای کلان‌شهرها، توزیع و پخش مواد غذایی با سرعت‌بالا، هم‌زمان با حفظ کیفیت و انبارش صحیح بسیار حائز اهمیت است. شرکت پخش عقاب با داشتن شبکه‌ی پخش علمی و اصولی و به پشتوانه‌ی تجربه‌ی چندین ساله، با بهترین‌های صنعت غذا همکاری کرده و محصولات آن‌ها را در تمام ایران توزیع می‌کند. `,
    },
 
    {
      label: "شوینده و بهداشتی",
      value: "svelte",
      desc: `محصولات آرایشی و بهداشتی به عنوان زیرمجموعه‌ای پرمصرف از محصولات FMCG و کالاهای مصرفی مارک‌دار هستند که در کسب‌وکار سالن‌های آرایشی و زیبایی تقاضای زیادی دارند. قابل‌توجه است که ایران یکی از بزرگ‌ترین مصرف‌کنندگان محصولات آرایشی و بهداشتی است و از این نظر در رتبه هفتم دنیا و دوم خاورمیانه قرار دارد. حجم بازار لوازم آرایشی در ایران در حدود ۲/ ۲ میلیارد دلار است که ۷۰ درصد از این تقاضا توسط کالاهای خارجی تأمین می‌شود. شرکت پخش عقاب به‌منظور گسترش نوآوری‌ها و کسب رهبری در بازار همواره به دنبال بهترین‌ها در سبد کالایی خود است. در این راستا شرکت آلمانی هنکل جزو بهترین‌های بازار است و محصولات آن در 150 کشور مختلف به فروش می‌رسد. گروه محصولات آرایشی و بهداشتی هنکل نیز به‌طور مداوم در حال گسترش است و تا امروز واحدهای تولیدی این شرکت برند‌های متعدد و موفقی را در زمینه بهداشت و آرایش مو و پوست توسعه داده‌اند. شرکت پخش عقاب همکاری خود با شرکت هنکل را از سال 2015 با پخش و فروش مویرگی شوینده‌های پریل و پرسیل آغاز نموده و تا امروز روابط تجاری قوی و پایداری با این شرکت آلمانی بنیان نهاده است. اکنون محصولات آرایشی و بهداشتی هنکل مانند شوارسکوف، تافت، گلیس، پلت، فا و شاوما نیز به سبد کالایی پخش عقاب اضافه‌شده است تا رضایت کامل مشتریان فراهم شود.`,
    },
  ];
 

  return (
    <div className="w-full lg:w-[80%] mx-auto mt-10 lg:mt-16 min-h-[100vh]">
     <Tabs id="custom-animation" value="html">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
    </div>
  );
};

export default Brands;
