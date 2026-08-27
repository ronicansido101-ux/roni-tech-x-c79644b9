import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  BatteryCharging,
  ChevronDown,
  Cpu,
  Droplets,
  HardDrive,
  Smartphone,
  Tv,
  Usb,
  Wifi,
  Wrench,
} from "lucide-react";

export const Route = createFileRoute("/guides")({
  head: () => ({
    meta: [
      { title: "شروحات صيانة الهواتف | RONI TECH X" },
      {
        name: "description",
        content:
          "شروحات عملية لصيانة الهواتف: الشاشة، البطارية، منفذ الشحن، أعطال الشبكة، والفلاش والسوفتوير.",
      },
      { property: "og:title", content: "شروحات صيانة الهواتف | RONI TECH X" },
      {
        property: "og:description",
        content: "دليل خطوة بخطوة لأشهر أعطال الهواتف وطرق إصلاحها.",
      },
    ],
  }),
  component: GuidesPage,
});

const levelBadge: Record<string, string> = {
  مبتدئ: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  متوسط: "border-amber-500/30 bg-amber-500/10 text-amber-400",
  متقدم: "border-rose-500/30 bg-rose-500/10 text-rose-400",
};

const guides = [
  {
    icon: Smartphone,
    title: "استبدال شاشة الهاتف",
    level: "متوسط",
    summary:
      "فك الجهاز بأمان، فصل الفليت، تركيب الشاشة الجديدة واختبار اللمس قبل إغلاق الجهاز.",
    requirements: [
      "جهاز مطفأ تماماً وبطارية أقل من 30% (أو منفصلة).",
      "مساحة عمل نظيفة خالية من الغبار والكهرباء الساكنة.",
      "شاشة بديلة متوافقة بنفس رقم الطراز (Model).",
      "كيبل فليت سليم وعدم وجود كسر في المفصلات.",
    ],
    tools: ["مفكات دقيقة (Pentalobe/Phillips)", "بلاستيك فك (Pry tool)", "سشوار صناعي أو iOpener", "شاشة بديلة متوافقة"],
    steps: [
      "أطفئ الجهاز تماماً وانتظر 30 ثانية.",
      "سخّن الحواف بسشوار صناعي على درجة حرارة متوسطة لمدة 2-3 دقائق لتليين اللاصق.",
      "ادخل أداة الفك البلاستيكية من الزاوية السفلية برفق وتحرك حول الحواف.",
      "ارفع الشاشة بزاوية 90 درجة مع الحذر من كابلات الفليت.",
      "افصل بطارية الجهاز أولاً، ثم افصل كابلات الشاشة (LCD وTouch وDigitizer).",
      "أزل الشاشة القديمة وثبّت الجديدة بالعكس: أوصل الكابلات ثم البطارية.",
      "شغّل الجهاز واختبر اللمس والألوان والسطوع قبل إغلاق الإطار.",
      "أغلق الجهاز بلطف واضغط على الحواف حتى يلتصق اللاصق.",
    ],
    tips: "لا تستخدم مفك معدنياً حاداً قرب البطارية. تأكد من عدم وجود غبار تحت الشاشة قبل الإغلاق.",
  },
  {
    icon: BatteryCharging,
    title: "تغيير البطارية وحل مشاكل الشحن",
    level: "مبتدئ",
    summary:
      "قياس استهلاك البطارية، فحص دائرة الشحن، واستبدال البطارية بشكل صحيح دون تلف اللاصق.",
    requirements: [
      "تأكد أن العطل ليس في الشاحن أو الكيبل (جرّب قطع أخرى أصلية).",
      "بطارية بديلة مطابقة لرقم الطراز الأصلي.",
      "الجهاز بدرجة حرارة الغرفة، ليس ساخناً.",
      "تجنب العمل بالقرب من الماء أو الرطوبة العالية.",
    ],
    tools: ["بطارية بديلة أصلية", "مفك Phillips/Pentalobe", "بلاستيك فك", "كحول إيزوبروبيلي 99%"],
    steps: [
      "افحص أولاً: هل المشكلة في الشاحن، الكيبل، أو المنفذ؟ جرّب قطعاً أخرى.",
      "أطفئ الجهاز وافتح الغطاء الخلفي أو الشاشة حسب طراز الجهاز.",
      "افصل كابلات الشاشة إذا كانت تعيق الوصول للبطارية.",
      "أزل اللاصق المطاطي حول البطارية بحذر باستخدام أداة بلاستيكية.",
      "اسحب ألسنة اللاصق (pull-tabs) ببطء ومتوازياً مع سطح البطارية.",
      "ضع البطارية الجديدة في مكانها وثبّتها باللاصق المرفق.",
      "أعد توصيل الكابلات وشغّل الجهاز. اتركه يشحن حتى 100% ثم افحص صحته من الإعدادات.",
    ],
    tips: "إذا استمر استنزاف البطارية بسرعة، افحص تطبيقات الخلفية أو استبدل منفذ الشحن أولاً.",
  },
  {
    icon: Usb,
    title: "إصلاح منفذ الشحن (Charging Port)",
    level: "متوسط",
    summary:
      "تنظيف المنفظ، فحص خطوط البيانات والشحن، وطريقة لحام المنفذ الجديد على البورد.",
    requirements: [
      "جهاز مطفأ وبطارية منفصلة إن أمكن.",
      "تأكد من نوع المنفذ (Micro USB / USB-C / Lightning) ومتوافق مع الطراز.",
      "كيبل USB أصلي للاختبار بعد الإصلاح.",
      "تهوية جيدة؛ اللحام ينتج أبخرة ضارة.",
    ],
    tools: ["فرشاة ناعمة + كحول 99%", "مكواة لحام دقيقة", "فليكس (Flex cable) منفذ شحن", "مكبر أو مجهر صغير"],
    steps: [
      "افحص المنفذ بالمجهر: هل يوجد غبار أو أتربة أو أطراف معدنية مكسورة؟",
      "نظف المنفذ بفرشاة جافة أولاً، ثم بقطنة مبللة بالكحول مع تجفيفه جيداً.",
      "اختبر الجهد: اربط كيبل USB وافحص VBUS وD+/D- بجهاز قياس.",
      "إذا كان المنفذ مدموراً، افكّ الجهاز واخرج البورد الرئيسي.",
      "أزل المنفذ القديم بالهوت اير أو محطة لحام متخصصة دون رفع الأطراف المحيطة.",
      "ثبّت المنفذ الجديد واتأكد من محاذاة الأطراف (pins) بدقة.",
      "أعد تجميع الجهاز واختبر الشحن ونقل البيانات.",
    ],
    tips: "لا تحرك المكواة أكثر من اللازم؛ الحرارة الزائدة تضر بالطبقات الداخلية للبورد.",
  },
  {
    icon: Cpu,
    title: "الفلاش وإعادة تنصيب النظام",
    level: "متقدم",
    summary:
      "تحضير الفيرموير، الدخول لوضع Download/Fastboot، وتفادي أخطاء الفلاش الشائعة.",
    requirements: [
      "فيرموير رسمي مطابق للطراز والمنطقة (Model + CSC/Region).",
      "كيبل USB أصلي ومنفذ USB خلفي بالكومبيوتر (أكثر استقراراً).",
      "بطارية الجهاز مشحونة فوق 50%.",
      "تعريفات USB المطلوبة مثبتة على الكومبيوتر.",
      "نسخة احتياطية من البيانات المهمة قبل البدء.",
    ],
    tools: ["كومبيوتر بنظام Windows", "كيبل USB أصلي", "برنامج Odin / SP Flash / Mi Flash حسب الطراز", "فيرموير رسمي متوافق"],
    steps: [
      "حمّل الفيرموير الرسمي لطراز الجهاز بالضبط (Model + Region/CSC).",
      "ثبّت تعريفات USB الخاصة بالشركة (Samsung / Xiaomi / Qualcomm / MTK).",
      "أطفئ الجهاز، ثم ادخل وضع Download (Samsung) أو Fastboot (Xiaomi/Google) بالضغط على مفاتيح التشغيل + الصوت.",
      "افتح برنامج الفلاش وتحقق من ظهور المنفذ (COM أو PORT).",
      "حمّل ملفات الفلاش (AP/BL/CP/CSC أو scatter) بالترتيب الصحيح.",
      "اضغط Start/Flash وانتظر حتى تظهر رسالة PASS أو Done.",
      "لا تفصل الكيبل أثناء الفلاش. بعد الانتهاء، سيُعيد الجهاز التشغيل تلقائياً.",
    ],
    tips: "تأكد من شحن البطارية فوق 50%. استخدم كيبل USB أصلياً لتجنب انقطاع الاتصال أثناء الفلاش.",
  },
  {
    icon: Wifi,
    title: "أعطال الشبكة والواي فاي",
    level: "متقدم",
    summary:
      "تشخيص فقدان الشبكة، فحص هوائي الاستقبال، ومعالجة أعطال IMEI بعد الفلاش.",
    requirements: [
      "جهاز مرجعي سليم من نفس الطراز للمقارنة.",
      "نسخة احتياطية من ملفات NV/EFS إن وجدت.",
      "تأكد أن المشكلة ليست برمجية (تحديث أو إعادة ضبط الشبكة).",
      "عدم تغيير IMEI إلا بموجب قانوني رسمي.",
    ],
    tools: ["مجهر أو مكبر", "مكواة لحام دقيقة", "ملفات NV/EFS احتياطية", "بوكسات Z3X/UFS حسب الحاجة"],
    steps: [
      "تأكد أولاً أن المشكلة ليست برمجية: جرّب إعادة ضبط الشبكة أو تحديث النظام.",
      "افحص الهوائيات الداخلية (Antenna connectors) وتأكد من توصيلها.",
      "إذا فُقد IMEI بعد الفلاش، راجع قسم EFS/NV واستعد نسخة احتياطية موثوقة.",
      "افحص دوائر RF Power Amplifier وTransceiver بالقرب من الهوائي.",
      "إذا كان العطل في IC الشبكة، استخدم محطة تسخين متخصصة لإعادة اللحام (Reball).",
      "اختبر الإشارة بعد كل خطوة وقارن القراءات بجهاز سليم من نفس الطراز.",
    ],
    tips: "لا تكتب IMEI عشوائياً؛ قد يؤدي ذلك لحظر الجهاز قانونياً في بعض الدول.",
  },
  {
    icon: Droplets,
    title: "إنقاذ الهاتف بعد تعرضه للماء",
    level: "متوسط",
    summary:
      "خطوات الطوارئ الأولى، تنظيف البورد بالألتراسونيك، ومعالجة التأكسد قبل فقدان الجهاز.",
    requirements: [
      "لا تحاول تشغيل الجهاز أو شحنه بعد دخول الماء.",
      "افصل البطارية فوراً إن أمكن.",
      "جهاز مجهز بتهوية جيدة وكمية كافية من كحول 99%.",
      "تجنب استخدام مجفف الشعر الساخن المباشر على البورد.",
    ],
    tools: ["مفكات دقيقة", "كحول إيزوبروبيلي 99%", "حمام ألتراسونيك", "فرشاة أسنان ناعمة", "سليكا جل أو أرز (مؤقت)"],
    steps: [
      "أطفئ الجهاز فوراً ولا تحاول تشغيله مرة أخرى.",
      "أخرج الشريحة وكارت الذاكرة (إن وجد) وجففهم جانباً.",
      "لا تضع الجهاز في أرز؛ الأرز لا يمتص الرطوبة من الداخل بكفاءة.",
      "افكّ الجهاز بأسرع وقت ممكن وافصل البطارية.",
      "انزع البورد وضعه في حمام ألتراسونيك مع كحول 99% لمدة 5-10 دقائق.",
      "نظف التآكل والأوساخ حول الموصلات بفرشاة ناعمة.",
      "جفف البورد بالهواء الساخن المنخفض (40-50 درجة) لمدة 30 دقيقة.",
      "أعد التجميع وشغّل الجهاز. إذا لم يعمل، افحص دوائر الشحن والباور.",
    ],
    tips: "كل دقيقة تمر تزيد من احتمالية التأكسد. السرعة في الفك والتنظيف هي العامل الأهم.",
  },
  {
    icon: HardDrive,
    title: "حرق الفلاش (Firmware Flash) على الهاتف",
    level: "متقدم",
    summary:
      "كيفية تحميل الفيرموير الصحيح، إعداد الفلاش، وحرقه على الهاتف عبر وضع Download أو Fastboot أو باستخدام بوكسات متخصصة.",
    requirements: [
      "فيرموير رسمي مطابق للطراز والمنطقة (Model + CSC/Region).",
      "كيبل USB أصلي ومنفذ USB خلفي بالكومبيوتر.",
      "بطارية الجهاز مشحونة فوق 60%.",
      "تعريفات USB المناسبة مثبتة (Samsung / Xiaomi / Qualcomm / MTK).",
      "تعطيل برامج الحماية مؤقتاً حتى لا تقاطع برنامج الفلاش.",
    ],
    tools: ["كومبيوتر بنظام Windows", "كيبل USB أصلي", "برنامج Odin / SP Flash / Mi Flash / QPST", "فيرموير رسمي متوافق", "بوكس UFI / Z3X / Chimera (اختياري)"],
    steps: [
      "تأكد من طراز الجهاز بالضبط (Model Number) والمنطقة (CSC/Region) قبل تحميل أي ملف.",
      "حمّل الفيرموير الرسمي من موقع الشركة أو سيرفر موثوق، وتأكد من سلامة الملف (MD5/SHA1).",
      "ثبّت التعريفات المناسبة: Samsung USB Driver، Xiaomi USB Driver، Qualcomm Driver، أو MTK Driver.",
      "أدخل الجهاز بوضع الفلاش: Download Mode (Samsung: Vol Down + Home + Power)، Fastboot (Xiaomi/Google: Vol Down + Power)، أو EDL (Qualcomm: Vol Up + Vol Down).",
      "افتح برنامج الفلاش وتحقق من ظهور المنفذ (COMx أو PORT).",
      "حمّل ملفات الفلاش بالترتيب الصحيح: AP/BL/CP/CSC لسامسونج، أو scatter لـ MTK.",
      "اضغط Start/Flash ولا تفصل الكيبل حتى تظهر رسالة PASS أو Done.",
      "انتظر إعادة التشغيل التلقائية، ثم ابدأ الإعداد الأولي (Setup Wizard).",
    ],
    tips: "لا تستخدم فيرموير من طراز آخر حتى لو كان شبيهاً؛ قد يتسبب ذلك في فقدان IMEI أو تلف IMEI/EFS. شحن البطارية فوق 60% قبل الفلاش.",
  },
  {
    icon: Tv,
    title: "تثبيت Android TV أو Google TV على فلاشة",
    level: "متوسط",
    summary:
      "تحويل أي تلفزيون عادي أو TV Box لنظام Android TV / Google TV عبر تثبيت الصورة على فلاشة USB وتشغيلها من الجهاز.",
    requirements: [
      "فلاشة USB 8GB على الأقل (يفضل USB 3.0) وبدون ملفات مهمة (سيتم مسحها).",
      "صورة Android TV / Google TV متوافقة مع معالج الجهاز (Amlogic/Rockchip/PC x86).",
      "كومبيوتر بنظام Windows أو Linux.",
      "كيبل HDMI وماوس أو ريموت للتحكم أولاً.",
      "تأكد من قدرة الجهاز على الإقلاع من USB.",
    ],
    tools: ["فلاشة USB 8GB على الأقل", "كومبيوتر بنظام Windows/Linux", "برنامج Rufus أو balenaEtcher", "صورة Android TV / Google TV (ISO/img) متوافقة مع الجهاز", "كيبل HDMI وماوس/ريموت"],
    steps: [
      "حمّل صورة Android TV أو Google TV المناسبة لجهازك (مثلاً صورة خاصة بـ TV Box معالج Amlogic أو Raspberry Pi أو PC x86).",
      "أدخل الفلاشة في الكومبيوتر وافتح برنامج Rufus (Windows) أو balenaEtcher (كل الأنظمة).",
      "اختر الفلاشة، ثم اختر ملف الصورة (ISO أو IMG أو IMG.GZ).",
      "اضغط Start/Flash وانتظر حتى ينتهي الكتابة. لا تفصل الفلاشة أثناء العملية.",
      "بعد الانتهاء، أدخل الفلاشة في جهاز TV Box أو التلفزيون الذكي.",
      "شغّل الجهاز مع الضغط على زر Recovery أو Boot Menu (غالباً زر Reset أو مفتاح معين على الريموت).",
      "اختر Boot from USB أو Apply update from external storage، ثم اتبع التعليمات الظاهرة على الشاشة.",
      "بعد إعادة التشغيل، أكمل إعداد حساب Google وتحديث التطبيقات.",
    ],
    tips: "تأكد أن صورة Android TV متوافقة مع معالج الجهاز (Amlogic S905X/W، Rockchip، إلخ). صورة خاطئة قد تتسبب في boot loop أو عدم إقلاع الجهاز.",
  },
];

function GuidesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-extrabold md:text-4xl">
        <span className="text-gradient">شروحات</span> صيانة الهواتف
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        مجموعة شروحات عملية موجهة للفنيين والمبتدئين، مرتبة حسب نوع العطل ومستوى
        الصعوبة. اضغط على أي شرح لعرض الخطوات التفصيلية.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((g, i) => {
          const isOpen = openIndex === i;
          return (
            <article
              key={g.title}
              className={`panel p-0 transition-all duration-300 ${isOpen ? "ring-1 ring-primary/40" : ""}`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full p-6 text-right"
                aria-expanded={isOpen}
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                    <g.icon className="size-5" />
                  </span>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs ${levelBadge[g.level]}`}
                  >
                    {g.level}
                  </span>
                </div>
                <h2 className="mt-4 text-lg font-bold">{g.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {g.summary}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-primary">
                  <span className="flex items-center gap-1 font-medium">
                    <Wrench className="size-3.5" />
                    عرض الخطوات
                  </span>
                  <ChevronDown
                    className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </div>
              </button>

              {isOpen && (
                <div className="border-t border-border/70 px-6 pb-6 pt-4">
                  <div className="mb-4">
                    <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-primary">
                      متطلبات قبل البدء
                    </h3>
                    <ul className="space-y-2">
                      {g.requirements.map((req, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm leading-relaxed text-foreground"
                        >
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      الأدوات المطلوبة
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {g.tools.map((tool) => (
                        <li
                          key={tool}
                          className="rounded-lg border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                        >
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    خطوات العمل
                  </h3>
                  <ol className="space-y-2.5">
                    {g.steps.map((step, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-sm leading-relaxed text-foreground"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                          {idx + 1}
                        </span>
                        <span className="pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-3 text-sm leading-relaxed text-primary-foreground/90">
                    <strong className="text-primary">نصيحة:</strong> {g.tips}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
