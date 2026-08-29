export type Section = "PHONE" | "TV" | "WINDOWS";

export type SearchItem = {
  title: string;
  desc: string;
  section: Section;
  kind: "أداة" | "شرح" | "تطبيق" | "Custom ROM" | "أمر";
  to: "/phone" | "/tv" | "/windows" | "/files" | "/qa";
};

export const searchItems: SearchItem[] = [
  // PHONE
  {
    title: "LineageOS",
    desc: "روم مخصص مفتوح المصدر بتحديثات أمنية منتظمة لعدد كبير من الأجهزة.",
    section: "PHONE",
    kind: "Custom ROM",
    to: "/phone",
  },
  {
    title: "Pixel Experience",
    desc: "تجربة أندرويد نقية قريبة من هواتف Google Pixel.",
    section: "PHONE",
    kind: "Custom ROM",
    to: "/phone",
  },
  {
    title: "crDroid",
    desc: "روم مخصص يركّز على التخصيص والأداء مع ثبات جيد.",
    section: "PHONE",
    kind: "Custom ROM",
    to: "/phone",
  },
  {
    title: "Evolution X",
    desc: "روم بتخصيص واسع وواجهة قريبة من Pixel.",
    section: "PHONE",
    kind: "Custom ROM",
    to: "/phone",
  },
  {
    title: "TWRP Recovery",
    desc: "ريكفري مخصص للنسخ الاحتياطي وتثبيت الرومات والملفات المضغوطة.",
    section: "PHONE",
    kind: "أداة",
    to: "/phone",
  },
  {
    title: "ADB & Fastboot",
    desc: "أوامر التحكم والتفليش الرسمية من Google مع أزرار نسخ.",
    section: "PHONE",
    kind: "أمر",
    to: "/phone",
  },
  {
    title: "Android USB Drivers",
    desc: "صفحة تعريفات USB الرسمية لكل الشركات في مكان واحد.",
    section: "PHONE",
    kind: "أداة",
    to: "/phone",
  },
  // TV
  {
    title: "File Manager for FTP",
    desc: "مدير ملفات لأجهزة أندرويد TV مع دعم FTP والشبكة.",
    section: "TV",
    kind: "تطبيق",
    to: "/tv",
  },
  {
    title: "YouWindo",
    desc: "تطبيق تشغيل محتوى على أجهزة التلفزيون الذكية.",
    section: "TV",
    kind: "تطبيق",
    to: "/tv",
  },
  {
    title: "DramaLive",
    desc: "تطبيق مشاهدة محتوى الدراما على التلفزيون.",
    section: "TV",
    kind: "تطبيق",
    to: "/tv",
  },
  {
    title: "Zeus Browser",
    desc: "متصفح مخصص للتحكم بالريموت على أجهزة Android TV.",
    section: "TV",
    kind: "تطبيق",
    to: "/tv",
  },
  {
    title: "Shamna Ultra",
    desc: "تطبيق تشغيل محتوى بواجهة مناسبة للتلفزيون.",
    section: "TV",
    kind: "تطبيق",
    to: "/tv",
  },
  {
    title: "Pigeon Cast",
    desc: "تطبيق بث ومشاركة المحتوى بين الهاتف والتلفزيون.",
    section: "TV",
    kind: "تطبيق",
    to: "/tv",
  },
  {
    title: "إرسال شاشة الهاتف إلى التلفزيون",
    desc: "شرح Cast / Screen Mirroring عبر Miracast و Google Cast.",
    section: "TV",
    kind: "شرح",
    to: "/tv",
  },
  // WINDOWS
  {
    title: "Rainmeter",
    desc: "تخصيص سطح المكتب بويدجت معلومات النظام والساعة والطقس.",
    section: "WINDOWS",
    kind: "أداة",
    to: "/windows",
  },
  {
    title: "TranslucentTB",
    desc: "جعل شريط المهام شفافاً أو ضبابياً.",
    section: "WINDOWS",
    kind: "أداة",
    to: "/windows",
  },
  {
    title: "Lively Wallpaper",
    desc: "خلفيات متحركة وتفاعلية لسطح المكتب.",
    section: "WINDOWS",
    kind: "أداة",
    to: "/windows",
  },
  {
    title: "تفعيل Windows الرسمي",
    desc: "التحقق من حالة التفعيل وإدخال مفتاح المنتج وربط الترخيص بحساب Microsoft.",
    section: "WINDOWS",
    kind: "شرح",
    to: "/windows",
  },
  {
    title: "تفعيل Office الرسمي",
    desc: "تسجيل الدخول بحساب Microsoft ومراجعة حالة الترخيص من Word > Account.",
    section: "WINDOWS",
    kind: "شرح",
    to: "/windows",
  },
  {
    title: "Windows Update",
    desc: "فحص التحديثات ومعالجة مشاكل التحديث العالق.",
    section: "WINDOWS",
    kind: "شرح",
    to: "/windows",
  },
  {
    title: "SFC و DISM",
    desc: "أوامر فحص وإصلاح ملفات النظام مع زر نسخ.",
    section: "WINDOWS",
    kind: "أمر",
    to: "/windows",
  },
  {
    title: "أوامر Win + R",
    desc: "winver و msconfig و services.msc وغيرها مع شرح وزر نسخ.",
    section: "WINDOWS",
    kind: "أمر",
    to: "/windows",
  },
];

export const latest = [
  { title: "قسم Win + R الكامل", section: "WINDOWS" as const, to: "/windows" as const },
  { title: "أوامر تنظيف Windows", section: "WINDOWS" as const, to: "/windows" as const },
  { title: "تطبيقات TV المختارة", section: "TV" as const, to: "/tv" as const },
  { title: "دليل TWRP و Custom ROM", section: "PHONE" as const, to: "/phone" as const },
];
