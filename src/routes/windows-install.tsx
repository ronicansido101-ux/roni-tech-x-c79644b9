import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Disc3 } from "lucide-react";

export const Route = createFileRoute("/windows-install")({
  head: () => ({
    meta: [
      { title: "دليل تثبيت Windows 10 و Windows 11 | RONI TECH X" },
      {
        name: "description",
        content:
          "شرح تثبيت Windows 10 و11: روابط مايكروسوفت الرسمية، تحميل ISO، إنشاء فلاشة إقلاع، التثبيت من USB وبدون USB، وخطوات ما بعد التثبيت.",
      },
      { property: "og:title", content: "Windows Installation | RONI TECH X" },
      {
        property: "og:description",
        content: "دليل كامل لتثبيت Windows 10 و11 من المصادر الرسمية.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WindowsInstallPage,
});

const links = [
  {
    name: "Download Windows 11 (Microsoft)",
    desc: "أداة Installation Assistant و Media Creation Tool وملف ISO الرسمي.",
    url: "https://www.microsoft.com/software-download/windows11",
  },
  {
    name: "Download Windows 10 (Microsoft)",
    desc: "Media Creation Tool وملف ISO الرسمي لنسخة Windows 10.",
    url: "https://www.microsoft.com/software-download/windows10",
  },
  {
    name: "Windows 11 System Requirements",
    desc: "متطلبات التشغيل الرسمية: TPM 2.0، Secure Boot، 4GB RAM، 64GB مساحة.",
    url: "https://www.microsoft.com/windows/windows-11-specifications",
  },
  {
    name: "PC Health Check",
    desc: "أداة مايكروسوفت للتأكد من توافق الجهاز مع Windows 11.",
    url: "https://www.microsoft.com/windows/windows-11#pchealthcheck",
  },
  {
    name: "Rufus",
    desc: "أداة إنشاء فلاشة إقلاع من ملف ISO.",
    url: "https://rufus.ie/",
  },
  {
    name: "Ventoy",
    desc: "نسخ عدة ملفات ISO على فلاشة واحدة والاختيار بينها عند الإقلاع.",
    url: "https://www.ventoy.net/",
  },
];

const sections: { title: string; steps: string[] }[] = [
  {
    title: "معلومات تحميل الـ ISO",
    steps: [
      "حمّل الـ ISO من موقع مايكروسوفت الرسمي فقط، ولا تستخدم نسخ معدّلة من مواقع غير موثوقة.",
      "اختر النسخة 64-bit (x64) لمعظم الأجهزة الحديثة، و ARM64 لأجهزة معالجات ARM.",
      "اختر Multi-edition ISO ثم اختر Home أو Pro أثناء التثبيت حسب رخصتك.",
      "اللغة: اختر Arabic أو English حسب رغبتك — يمكن إضافة لغات لاحقاً من الإعدادات.",
      "حجم الملف تقريباً 5–6 GB، لذلك احتج فلاشة 8 GB على الأقل (16 GB مستحسن).",
      "تحقق من سلامة الملف عبر مقارنة قيمة SHA-256 إن توفرت.",
    ],
  },
  {
    title: "إنشاء فلاشة إقلاع (Bootable USB)",
    steps: [
      "وصّل فلاشة 8 GB أو أكبر، وانسخ ملفاتها المهمة لأن العملية ستمسحها بالكامل.",
      "الطريقة الرسمية: شغّل Media Creation Tool واختر Create installation media (USB flash drive).",
      "الطريقة البديلة: افتح Rufus، اختر الفلاشة، ثم SELECT وحدد ملف الـ ISO.",
      "في Rufus: Partition scheme = GPT و Target system = UEFI للأجهزة الحديثة، أو MBR + BIOS للأجهزة القديمة.",
      "File system = NTFS، ثم اضغط START وانتظر حتى تظهر READY.",
      "بديل مرن: ثبّت Ventoy على الفلاشة ثم انسخ ملفات ISO إليها مباشرة بالسحب والإفلات.",
    ],
  },
  {
    title: "التثبيت من الفلاشة (USB)",
    steps: [
      "أعد تشغيل الجهاز واضغط زر Boot Menu (غالباً F12 أو F9 أو Esc) أو ادخل BIOS بـ Del / F2.",
      "من BIOS: فعّل UEFI، وعطّل Fast Boot مؤقتاً، وفعّل Secure Boot و TPM 2.0 لـ Windows 11.",
      "اختر الفلاشة من قائمة الإقلاع (يظهر اسمها مع كلمة UEFI).",
      "اختر اللغة والوقت وتخطيط الكيبورد ثم اضغط Install now.",
      "أدخل مفتاح المنتج أو اختر I don't have a product key للتفعيل لاحقاً.",
      "اختر Custom: Install Windows only لتثبيت نظيف، ثم حدد قسم النظام (عادة C).",
      "احذف أقسام النظام القديمة فقط (System / Recovery / MSR / Primary القديم) ولا تلمس أقسام بياناتك.",
      "اضغط Next وانتظر النسخ وإعادة التشغيل، ثم انزع الفلاشة عند أول إقلاع للنظام الجديد.",
    ],
  },
  {
    title: "التثبيت بدون فلاشة (Without USB)",
    steps: [
      "الترقية المباشرة: نزّل Windows 11 Installation Assistant من موقع مايكروسوفت وشغّله داخل الويندوز الحالي.",
      "من ملف ISO: اضغط بزر الفأرة الأيمن على الـ ISO واختر Mount ثم شغّل setup.exe.",
      "اختر Keep personal files and apps للترقية مع الاحتفاظ ببياناتك، أو Nothing لتثبيت نظيف.",
      "خيار إعادة الضبط: Settings ← System ← Recovery ← Reset this PC ← Cloud download لإعادة تثبيت النظام من الإنترنت.",
      "ملاحظة: التثبيت بدون فلاشة يتطلب نظاماً يعمل حالياً ومساحة فارغة لا تقل عن 20 GB.",
      "خذ نسخة احتياطية من ملفاتك المهمة قبل أي خيار من هذه الخيارات.",
    ],
  },
  {
    title: "خطوات ما بعد التثبيت",
    steps: [
      "شغّل Windows Update وثبّت كل التحديثات وأعد التشغيل حتى تنتهي القائمة.",
      "ثبّت تعريفات الجهاز من موقع الشركة المصنّعة (Chipset ثم GPU ثم Audio ثم LAN/Wi-Fi).",
      "فعّل النظام: Settings ← System ← Activation، وأدخل المفتاح أو اربط حساب Microsoft.",
      "تأكد من تشغيل Windows Security و BitLocker حسب الحاجة.",
      "غيّر إعدادات الخصوصية والتطبيقات التي تعمل عند بدء التشغيل (Startup Apps).",
      "ثبّت البرامج الأساسية: متصفح، ضاغط ملفات، مشغل وسائط، وأدوات العمل.",
      "أنشئ نقطة استعادة System Restore بعد اكتمال الإعداد.",
    ],
  },
];

function WindowsInstallPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12">
      <span className="badge">
        <Disc3 className="size-3.5" /> WINDOWS SETUP
      </span>
      <h1 className="mt-4 text-3xl font-extrabold md:text-4xl">
        دليل تثبيت Windows 10 / Windows 11
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        شرح كامل خطوة بخطوة من التحميل الرسمي حتى إعداد النظام بعد التثبيت — كل الروابط تشير
        إلى مصادر مايكروسوفت والأدوات الرسمية.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-bold">روابط رسمية</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="panel group flex h-full flex-col gap-2 p-5 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-bold" dir="ltr">
                    {l.name}
                  </p>
                  <ExternalLink className="size-4 shrink-0 text-primary opacity-70 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{l.desc}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {sections.map((s) => (
        <section key={s.title} className="mt-10">
          <h2 className="text-xl font-bold">{s.title}</h2>
          <ol className="panel mt-4 space-y-3 p-5">
            {s.steps.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
