import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  AlertCircle,
  Battery,
  ChevronDown,
  Keyboard,
  Monitor,
  MousePointer,
  Printer,
  RefreshCw,
  Wifi,
  Volume2,
  Lock,
  AppWindow,
} from "lucide-react";

export const Route = createFileRoute("/general-guides")({
  head: () => ({
    meta: [
      { title: "شروحات تقنية عامة | RONI TECH X" },
      {
        name: "description",
        content:
          "حلول عملية لمشاكل التقنية اليومية: لابتوب، ويندوز، إنترنت، طابعة، صوت، بلوتوث، ونسيان كلمة المرور.",
      },
      { property: "og:title", content: "شروحات تقنية عامة | RONI TECH X" },
      {
        property: "og:description",
        content:
          "خطوات بسيطة وآمنة لحل أشهر مشاكل الأجهزة والبرامج بدون فك أو صيانة عميقة.",
      },
    ],
  }),
  component: GeneralGuidesPage,
});

const categoryBadge: Record<string, string> = {
  ويندوز: "border-blue-500/30 bg-blue-500/10 text-blue-400",
  إنترنت: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
  هاردوير: "border-amber-500/30 bg-amber-500/10 text-amber-400",
  برامج: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
};

const generalGuides = [
  {
    icon: Monitor,
    title: "شاشة اللابتوب سوداء ويظهر فقط الماوس",
    category: "ويندوز",
    summary:
      "حل مشكلة الشاشة السوداء في Windows مع ظهور مؤشر الماوس فقط بعد تشغيل الجهاز.",
    steps: [
      "اضغط على Ctrl + Alt + Delete لفتح شاشة الخيارات الأمنية.",
      "اختر Task Manager. إذا لم يفتح، انتظر قليلاً ثم أعد المحاولة.",
      "من قائمة File > Run new task، اكتب explorer.exe واضغط OK لإعادة تشغيل مستكشف الملفات.",
      "إذا عادت الشاشة سوداء بعد ذلك، اضغط Win + Ctrl + Shift + B لإعادة تعيين كارت الشاشة.",
      "أعد تشغيل الجهاز بالكامل وافصل أي كابل HDMI أو DP خارجي مؤقتاً.",
      "إذا استمرت المشكلة، ادخل إلى الوضع الآمن (Safe Mode) وحدّث تعريف كارت الشاشة من موقع الشركة المصنعة.",
    ],
    tip: "غالباً ما يكون السبب تعريف كارت الشاشة معطل أو Windows Explorer توقف عن العمل، وليس تلف شاشة.",
  },
  {
    icon: Keyboard,
    title: "مفاتيح Ctrl + Alt + Delete وما فائدتها",
    category: "ويندوز",
    summary:
      "شرح سريع لأهم اختصار أمان في Windows وكيفية استخدامه لإغلاق البرامج أو إعادة التشغيل.",
    steps: [
      "اضغط Ctrl + Alt + Delete معاً لفتح شاشة خاصة لا يمكن لأي برنامج تقليدها.",
      "من هناك يمكنك اختيار Lock لتأمين الجهاز، أو Switch user لتغيير المستخدم.",
      "اختر Task Manager لإغلاق أي برنامج علّق أو استهلك ذاكرة/معالج.",
      "إذا لم يستجب الجهاز نهائياً، اضغط مطولاً على زر Power حتى يطفئ، ثم شغّله من جديد.",
      "لإعادة التشغيل بأمان من الشاشة السوداء، استخدم Ctrl + Alt + Delete ثم انقر على أيقونة Power أسفل اليمين.",
    ],
    tip: "Task Manager مفيد جداً: افتحه بـ Ctrl + Shift + Esc بسرعة بدون المرور بشاشة الأمان.",
  },
  {
    icon: Wifi,
    title: "الواي فاي متصل لكن الإنترنت لا يعمل",
    category: "إنترنت",
    summary:
      "خطوات تشخيصية بسيطة لفصل وإعادة الاتصال بالإنترنت عند ظهور علامة التعجب على الواي فاي.",
    steps: [
      "شغّل وضع الطيران (Airplane mode) لمدة 10 ثوانٍ ثم أطفئه.",
      "افصل الراوتر من الكهرباء لمدة 30 ثانية، ثم أعد توصيله وانتظر حتى يستقر.",
      "جرّب فتح موقع آخر أو تطبيق آخر للتأكد أن المشكلة ليست في الموقع فقط.",
      "افتح Command Prompt كمسؤول وشغّل الأوامر: ipconfig /release ثم ipconfig /renew ثم ipconfig /flushdns.",
      "إذا كان المشكلة على جهاز واحد فقط، أنسِخ شبكة الواي فاي من إعدادات Network & Internet ثم أضفها من جديد.",
    ],
    tip: "إذا كان الإنترنت يعمل على الهاتف لكن لا يعمل على اللابتوب، فالمشكلة غالباً في تعريفات الشبكة أو DNS.",
  },
  {
    icon: Battery,
    title: "الهاتف لا يشحن أو الشحن بطيء جداً",
    category: "هاردوير",
    summary:
      "حلول عامة آمنة لمشاكل الشحن البطيء أو انقطاع الشحن بدون فك الجهاز.",
    steps: [
      "تأكد أولاً من الشاحن والكيبل باستخدامهما على جهاز آخر.",
      "نظف منفذ الشحن بقطعة بلاستيك ناعمة أو بالهواء المضغوط؛ أزِل الغبار والأوساخ برفق.",
      "أعد تشغيل الهاتف (Power off/on) لإعادة ضبط إدارة البطارية.",
      "فعّل وضع الطيران أثناء الشحن لزيادة السرعة، خاصة إذا كانت الإشارة ضعيفة.",
      "افحص البطارية من الإعدادات > Battery > Battery Health؛ إذا كانت الصحة أقل من 80% فقد تحتاج استبدالها لاحقاً.",
    ],
    tip: "تجنب شحن الجهاز من منافذ السيارة أو الكمبيوتر لأنها أقل استقراراً من شاحن الحائط الأصلي.",
  },
  {
    icon: Volume2,
    title: "لا يوجد صوت على اللابتوب أو الهاتف",
    category: "هاردوير",
    summary:
      "خطوات فحص سريعة للصوت: التأكد من كتم الصوت، تعريفات الصوت، واختيار جهاز التشغيل الصحيح.",
    steps: [
      "تأكد أن الصوت ليس مكتوماً من أيقونة الصوت في شريط المهام أو مفتاح Fn + Mute.",
      "افتح Sound settings واختار السماعات الصحيحة Output device.",
      "شغّل مستكشف أخطاء Windows: Settings > System > Troubleshoot > Playing Audio.",
      "افتح Device Manager، ابحث عن Sound, video and game controllers، وحدّث تعريف الصوت.",
      "على الهاتف، تأكد من عدم توصيل سماعة Bluetooth قديمة أو كابل AUX.",
    ],
    tip: "إذا اختفى الصوت فجأة بعد تحديث Windows، قم باسترجاع تعريف الصوت من Device Manager > Roll Back Driver.",
  },
  {
    icon: Printer,
    title: "الطابعة تظهر Offline أو لا تطبع",
    category: "هاردوير",
    summary:
      "حلول عامة لمشكلة الطابعة المتصلة لكن لا تستجيب أو تظهر حالتها Offline.",
    steps: [
      "تأكد من تشغيل الطابعة وتوصيل الكيبل أو شبكة الواي فاي بنجاح.",
      "افتح Settings > Bluetooth & devices > Printers & scanners، ثم اضغط Open print queue.",
      "إذا وجدت أي وظيفة معلقة، احذفها من قائمة الطابعة بزر Cancel.",
      "من خصائص الطابعة، ألغِ تحديد Use Printer Offline.",
      "أعد تشغيل خدمة Print Spooler: اضغط Win + R واكتب services.msc، ابحث عن Print Spooler، ثم Restart.",
      "أعد تثبيت تعريف الطابعة من موقع الشركة المصنعة إذا استمرت المشكلة.",
    ],
    tip: "لا تنسَ مطابقة نوع الورق وحجمه في إعدادات الطباعة، لأن ذلك قد يوقف مهام الطباعة.",
  },
  {
    icon: Lock,
    title: "نسيت كلمة مرور Windows أو حساب Google",
    category: "برامج",
    summary:
      "طرق آمنة لاستعادة الوصول إلى حساب Windows أو حساب Google بدون برامج مجهولة.",
    steps: [
      "على شاشة تسجيل الدخول لـ Windows، اضغط على I forgot my PIN/Password واتبع الأسئلة الأمنية.",
      "إذا كان الحساب مرتبطاً بحساب Microsoft، استخدم هاتفاً آخر لإعادة تعيين كلمة المرور من account.microsoft.com.",
      "لحساب Google، ادخل إلى google.com/accounts/recovery من متصفح آمن واتبع الخطوات.",
      "إذا لم تنجح الطرق، يمكنك إنشاء مستخدم جديد Admin باستخدام Command Prompt من الوضع الآمن.",
      "احفظ كلمة المرور الجديدة في مدير كلمات مرور موثوق لتجنب تكرار المشكلة.",
    ],
    tip: "فعّل التحقق بخطوتين (2-Step Verification) بعد استعادة الحساب لمنع الاختراق مستقبلاً.",
  },
  {
    icon: AppWindow,
    title: "تطبيق لا يفتح أو يتوقف عن العمل فجأة",
    category: "برامج",
    summary:
      "حلول عامة لتطبيقات Windows أو الهاتف التي تغلق أو تعلق عند الفتح.",
    steps: [
      "أغلق التطبيق من Task Manager (Windows) أو من Recent apps (الهاتف).",
      "أعد تشغيل الجهاز بالكامل لتفريغ الذاكرة المؤقتة.",
      "تحقق من وجود تحديثات للتطبيق في متجر التطبيقات وثبّتها.",
      "امسح بيانات التطبيق المؤقتة: Windows > Settings > Apps > Repair/Reset؛ الهاتف > Storage > Clear cache.",
      "إذا استمرت المشكلة، ألغِ تثبيت التطبيق ثم ثبّته من جديد من المصدر الرسمي.",
    ],
    tip: "لا تحمّل التطبيقات من متاجر غير موثوقة؛ قد تكون مصدراً للفيروسات أو عدم الاستقرار.",
  },
  {
    icon: MousePointer,
    title: "الماوس أو لوحة اللمس لا تستجيب",
    category: "هاردوير",
    summary:
      "خطوات تشخيص سريعة للماوس السلكي أو اللاسلكي أو لوحة اللمس على اللابتوب.",
    steps: [
      "جرّب توصيل الماوس بمنفذ USB آخر أو استبدل البطاريات إذا كان لاسلكياً.",
      "تأكد من عدم وجود غبار على مستشعر الماوس السفلي.",
      "افتح Device Manager وحدّث تعريف Mouse and other pointing devices.",
      "لوحة اللمس: تأكد من عدم تعطيلها بمفتاح Fn (مثل F5 أو F9 حسب الطراز).",
      "أعد تشغيل الجهاز وفصل أي أجهزة USB أخرى مؤقتاً لتجنب التعارض.",
    ],
    tip: "بعض اللابتوبات تحتوي على مفتاح خاص لتعطيل لوحة اللمس؛ ابحث عن رمز مستطيل بخط يشبه الماوس على صف لوحة المفاتيح.",
  },
  {
    icon: RefreshCw,
    title: "تحديث Windows عالق أو يتكرر الفشل",
    category: "ويندوز",
    summary:
      "كيفية إنهاء تحديث عالق أو إصلاح أخطاء التحديث المتكررة بدون فقدان الملفات.",
    steps: [
      "لا تطفئ الجهاز أثناء التحديث إلا بعد انتظار 30 دقيقة على الأقل.",
      "افتح Windows Update > Advanced options > Run troubleshooter واتبع الإرشادات.",
      "افتح Command Prompt كمسؤول وشغّل: sfc /scannow ثم DISM /Online /Cleanup-Image /RestoreHealth.",
      "امسح ذاكرة التحديث المؤقتة: توقف خدمتي Windows Update و BITS، ثم احذف محتوى C:\\Windows\\SoftwareDistribution\\Download.",
      "أعد تشغيل الخدمات وحاول التحديث من جديد.",
    ],
    tip: "تأكد من توفر مساحة كافية على القرص C: (على الأقل 10 GB) لأن قلة المساحة سبب شائع لفشل التحديث.",
  },
];

function GeneralGuidesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-extrabold md:text-4xl">
        <span className="text-gradient">شروحات</span> تقنية عامة
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        حلول عملية لمشاكل التقنية اليومية على اللابتوب والهاتف والشبكة، بدون فك
        أجهزة أو صيانة عميقة. اضغط على أي شرح لعرض الخطوات.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {generalGuides.map((g, i) => {
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
                    className={`rounded-full border px-3 py-1 text-xs ${categoryBadge[g.category]}`}
                  >
                    {g.category}
                  </span>
                </div>
                <h2 className="mt-4 text-lg font-bold">{g.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {g.summary}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-primary">
                  <span className="font-medium">عرض الخطوات</span>
                  <ChevronDown
                    className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </div>
              </button>

              {isOpen && (
                <div className="border-t border-border/70 px-6 pb-6 pt-4">
                  <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    خطوات الحل
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
                    <strong className="text-primary">نصيحة:</strong> {g.tip}
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
