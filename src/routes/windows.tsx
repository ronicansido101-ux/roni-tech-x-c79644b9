import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, ExternalLink, Monitor, Sparkles, Terminal, Trash2, Wrench } from "lucide-react";
import { CommandRow } from "@/components/copy-button";

export const Route = createFileRoute("/windows")({
  head: () => ({
    meta: [
      { title: "WINDOWS — تخصيص وأدوات وأوامر | RONI TECH X" },
      {
        name: "description",
        content:
          "Rainmeter و TranslucentTB و Lively Wallpaper، تفعيل Windows و Office الرسمي، حلول مشاكل Windows، أدوات SFC و DISM، أوامر التنظيف وقائمة Win + R مع أزرار نسخ.",
      },
      { property: "og:title", content: "WINDOWS | RONI TECH X" },
      {
        property: "og:description",
        content: "تخصيص Windows، مساعدة رسمية، أدوات صيانة، أوامر تنظيف و Win + R.",
      },
    ],
  }),
  component: WindowsPage,
});

const customization = [
  {
    name: "Rainmeter",
    info: "أداة مجانية مفتوحة المصدر لعرض ويدجت على سطح المكتب: الساعة، استهلاك المعالج والرام، الطقس ومساحة القرص.",
    source: "https://www.rainmeter.net/",
    install: [
      "نزّل المثبّت من الموقع الرسمي rainmeter.net.",
      "اختر Standard Install ثم أكمل التثبيت.",
      "شغّل البرنامج وسيظهر Skin الافتراضي illustro على سطح المكتب.",
    ],
    usage: [
      "انقر يمين على أي ويدجت ثم Settings لتغيير الشفافية أو تثبيت الموقع.",
      "لتثبيت Skin جديد: افتح ملف .rmskin بنقرة مزدوجة ثم Install.",
      "من نافذة Manage تفعّل أو تعطّل كل Skin على حدة.",
    ],
    fix: [
      "لا تظهر الويدجت: تأكد أن Rainmeter يعمل من شريط المهام المخفي، أو فعّل Launch on startup.",
      "ويدجت الطقس لا تعمل: بعض السكنات القديمة تعتمد خدمات متوقفة — استخدم سكن محدّث.",
      "استهلاك عالٍ للمعالج: قلّل عدد السكنات وارفع مدة التحديث Update rate.",
    ],
  },
  {
    name: "TranslucentTB",
    info: "أداة مجانية من متجر Microsoft تجعل شريط المهام شفافاً أو ضبابياً مع حالات مختلفة حسب وضع النوافذ.",
    source: "https://apps.microsoft.com/detail/9pf4kz2vn4w9",
    install: [
      "افتح Microsoft Store وابحث عن TranslucentTB.",
      "اضغط Get / تثبيت ثم شغّل التطبيق.",
      "فعّل Open at boot من قائمة الأيقونة في شريط المهام.",
    ],
    usage: [
      "انقر يمين على الأيقونة > Desktop لاختيار Clear أو Blur أو Acrylic.",
      "Maximised window: اجعل الشريط معتماً عند تكبير أي نافذة لتحسين الوضوح.",
      "Start opened: تحكم بمظهر الشريط عند فتح قائمة Start.",
    ],
    fix: [
      "الشريط يعود معتماً: عطّل تأثيرات الشفافية المتعارضة من Settings > Personalization > Colors.",
      "لا يعمل بعد التحديث: أعد تشغيل Explorer من Task Manager أو أعد تثبيت التطبيق.",
    ],
  },
  {
    name: "Lively Wallpaper",
    info: "برنامج مجاني مفتوح المصدر لتشغيل خلفيات متحركة (فيديو، GIF، صفحات ويب) على سطح المكتب.",
    source: "https://www.rocksdanister.com/lively/",
    install: [
      "نزّل من الموقع الرسمي أو من Microsoft Store.",
      "أكمل التثبيت ثم افتح التطبيق واختر خلفية من المكتبة.",
      "لإضافة خلفيتك: اضغط + ثم اختر ملف فيديو أو رابط.",
    ],
    usage: [
      "من Settings فعّل Pause when fullscreen لتوفير الأداء أثناء الألعاب.",
      "اضبط جودة العرض ومعدل الإطارات حسب قوة الجهاز.",
      "يمكن اختيار خلفية مختلفة لكل شاشة في أنظمة متعددة الشاشات.",
    ],
    fix: [
      "استهلاك رام أو بطارية عالٍ: فعّل الإيقاف التلقائي عند وضع الطاقة أو ملء الشاشة.",
      "الخلفية لا تظهر: تأكد من تثبيت مكوّنات الفيديو المطلوبة وأعد تشغيل البرنامج كمسؤول.",
    ],
  },
];

const help = [
  {
    title: "تفعيل Windows الرسمي",
    steps: [
      "افتح Settings > System > Activation لمعرفة حالة التفعيل.",
      "لإدخال مفتاح أصلي: Change product key ثم أدخل مفتاح المنتج الذي اشتريته.",
      "اربط الترخيص بحساب Microsoft من Add an account ليصبح ترخيصاً رقمياً قابلاً للاسترجاع.",
      "بعد تغيير قطع الجهاز: استخدم Troubleshoot > I changed hardware on this device recently.",
      "لشراء ترخيص أصلي أو الدعم: تواصل مع Microsoft Support أو موزّع معتمد.",
    ],
  },
  {
    title: "تفعيل Office الرسمي",
    steps: [
      "سجّل الدخول بحساب Microsoft الذي يملك ترخيص Office.",
      "أو أدخل مفتاح المنتج عبر setup.office.com ثم ثبّت النسخة المرتبطة بالحساب.",
      "للتحقق: افتح Word > File > Account وراجع Product Information.",
      "إذا ظهرت رسالة Unlicensed Product: سجّل الخروج من الحساب وأعد الدخول، ثم شغّل Online Repair من Apps & Features.",
    ],
  },
  {
    title: "Windows Update ومشاكل التحديث",
    steps: [
      "Settings > Windows Update > Check for updates لفحص التحديثات الرسمية.",
      "أعد التشغيل بعد التحديث وتأكد من وجود مساحة فارغة لا تقل عن 20 غيغابايت.",
      "عند تعليق التحديث: شغّل Troubleshoot > Other troubleshooters > Windows Update.",
      "إن استمر الخطأ: أوقف خدمة التحديث، احذف محتويات مجلد SoftwareDistribution\\Download، ثم أعد تشغيل الخدمة.",
    ],
  },
  {
    title: "الشاشة السوداء مع ظهور الماوس",
    steps: [
      "اضغط Ctrl + Alt + Delete ثم Task Manager.",
      "من File > Run new task اكتب explorer.exe واضغط OK لإعادة تشغيل الواجهة.",
      "اضغط Win + Ctrl + Shift + B لإعادة تهيئة برنامج تشغيل الشاشة.",
      "افصل الأجهزة الخارجية غير الضرورية وأعد التشغيل.",
      "إن تكرّرت المشكلة: ادخل Safe Mode وحدّث أو أعد تثبيت تعريف كرت الشاشة.",
    ],
  },
  {
    title: "مشاكل Wi-Fi",
    steps: [
      "فعّل ثم عطّل وضع الطيران، وأعد تشغيل الراوتر لمدة 30 ثانية.",
      "Settings > Network & Internet > Advanced > Network reset عند فشل الاتصال بكل الشبكات.",
      "انسَ الشبكة ثم أعد الاتصال بكلمة المرور من جديد.",
      "حدّث تعريف كرت الشبكة من Device Manager > Network adapters.",
    ],
  },
  {
    title: "مشاكل الصوت",
    steps: [
      "انقر على أيقونة الصوت واختر جهاز الإخراج الصحيح.",
      "انقر يمين على أيقونة الصوت > Troubleshoot sound problems.",
      "Device Manager > Sound, video and game controllers > Update driver.",
      "تأكد أن خدمة Windows Audio تعمل من services.msc.",
    ],
  },
  {
    title: "الماوس أو Touchpad لا يستجيب",
    steps: [
      "تأكد أن Touchpad مفعّل من Settings > Bluetooth & devices > Touchpad أو زر Fn المخصص.",
      "جرّب منفذ USB آخر أو استبدل بطارية الماوس اللاسلكي.",
      "Device Manager > Mice and other pointing devices > Update driver أو Uninstall ثم أعد التشغيل.",
      "عطّل خيار السماح بإيقاف الجهاز لتوفير الطاقة من Power Management.",
    ],
  },
];

const tools = [
  { cmd: "sfc /scannow", desc: "فحص ملفات النظام وإصلاح التالف منها. شغّل موجّه الأوامر كمسؤول." },
  {
    cmd: "DISM /Online /Cleanup-Image /RestoreHealth",
    desc: "إصلاح صورة النظام عندما يفشل SFC في الإصلاح.",
  },
  { cmd: "chkdsk C: /f", desc: "فحص أخطاء القرص وإصلاحها بعد إعادة التشغيل." },
  { cmd: "cleanmgr", desc: "فتح Disk Cleanup لتنظيف الملفات المؤقتة وملفات التحديث." },
  { cmd: "taskmgr", desc: "Task Manager — تبويب Startup apps للتحكم ببرامج بدء التشغيل." },
];

const cleanup = [
  { cmd: "cleanmgr /sageset:1", desc: "اختيار أنواع الملفات التي سيتم تنظيفها وحفظها كإعداد جاهز." },
  { cmd: "cleanmgr /sagerun:1", desc: "تشغيل التنظيف بالإعداد المحفوظ مسبقاً." },
  { cmd: "del /q /f /s %temp%\\*", desc: "حذف ملفات المستخدم المؤقتة." },
  { cmd: "ipconfig /flushdns", desc: "تفريغ ذاكرة DNS لحل مشاكل فتح المواقع." },
  {
    cmd: "DISM /Online /Cleanup-Image /StartComponentCleanup",
    desc: "تنظيف مكوّنات التحديثات القديمة وتحرير مساحة.",
  },
  {
    cmd: "Clear-RecycleBin -Force",
    desc: "إفراغ سلة المحذوفات من PowerShell.",
  },
  {
    cmd: "Get-AppxPackage | Select Name | Out-String",
    desc: "PowerShell: عرض قائمة التطبيقات المثبّتة قبل اتخاذ قرار الحذف.",
  },
];

const winR = [
  { cmd: "winver", desc: "عرض إصدار Windows ورقم البناء." },
  { cmd: "msconfig", desc: "إعدادات بدء التشغيل والخدمات System Configuration." },
  { cmd: "services.msc", desc: "إدارة خدمات Windows وتشغيلها أو إيقافها." },
  { cmd: "devmgmt.msc", desc: "Device Manager لإدارة التعريفات والأجهزة." },
  { cmd: "diskmgmt.msc", desc: "Disk Management لإدارة الأقسام وحروف الأقراص." },
  { cmd: "taskmgr", desc: "Task Manager لمراقبة الأداء والعمليات." },
  { cmd: "control", desc: "فتح Control Panel الكلاسيكية." },
  { cmd: "appwiz.cpl", desc: "Programs and Features لإزالة البرامج." },
  { cmd: "ncpa.cpl", desc: "Network Connections لإعدادات كروت الشبكة." },
  { cmd: "sysdm.cpl", desc: "System Properties لاسم الجهاز وإعدادات الأداء." },
  { cmd: "cleanmgr", desc: "Disk Cleanup لتحرير مساحة القرص." },
  { cmd: "dxdiag", desc: "DirectX Diagnostic Tool لمعلومات العتاد والشاشة والصوت." },
];

function WindowsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12">
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
        <Monitor className="size-3.5" /> WINDOWS
      </span>
      <h1 className="mt-4 text-3xl font-extrabold md:text-4xl">قسم Windows</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        تخصيص سطح المكتب، مساعدة رسمية لمشاكل Windows، أدوات صيانة، أوامر تنظيف وقائمة
        Win + R — كلها مع شرح وأزرار نسخ.
      </p>

      <div className="panel mt-6 flex items-start gap-3 border-destructive/30 p-4">
        <AlertTriangle className="mt-0.5 size-5 shrink-0 text-destructive" />
        <p className="text-sm leading-relaxed text-muted-foreground">
          جميع الشروحات هنا رسمية فقط. لا نوفّر ولا ندعم أي أداة لتجاوز تراخيص Windows أو
          Office.
        </p>
      </div>

      <section className="mt-12">
        <h2 className="flex items-center gap-2 text-xl font-bold">
          <Sparkles className="size-5 text-primary" /> Customization
        </h2>
        <div className="mt-4 grid gap-5 lg:grid-cols-3">
          {customization.map((app) => (
            <article key={app.name} className="panel flex flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold" dir="ltr">
                  {app.name}
                </h3>
                <a
                  href={app.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                >
                  المصدر <ExternalLink className="size-3.5" />
                </a>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{app.info}</p>
              <Block title="التثبيت" items={app.install} />
              <Block title="الاستخدام" items={app.usage} />
              <Block title="حل المشاكل" items={app.fix} />
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="flex items-center gap-2 text-xl font-bold">
          <Wrench className="size-5 text-primary" /> Windows Help
        </h2>
        <div className="mt-4 grid gap-5 md:grid-cols-2">
          {help.map((h) => (
            <article key={h.title} className="panel p-5">
              <h3 className="font-bold">{h.title}</h3>
              <ol className="mt-3 space-y-2">
                {h.steps.map((s, i) => (
                  <li key={s} className="flex gap-2 text-sm leading-relaxed">
                    <span className="grid size-5 shrink-0 place-items-center rounded-md bg-primary/15 text-[11px] font-bold text-primary">
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground">{s}</span>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="flex items-center gap-2 text-xl font-bold">
          <Terminal className="size-5 text-primary" /> Windows Tools
        </h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {tools.map((c) => (
            <CommandRow key={c.cmd} cmd={c.cmd} desc={c.desc} />
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="flex items-center gap-2 text-xl font-bold">
          <Trash2 className="size-5 text-primary" /> Windows Cleanup
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          أوامر تنظيف آمنة لتحرير المساحة وتسريع النظام — انسخ الأمر ونفّذه في موجّه الأوامر
          أو PowerShell كمسؤول.
        </p>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {cleanup.map((c) => (
            <CommandRow key={c.cmd} cmd={c.cmd} desc={c.desc} />
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="flex items-center gap-2 text-xl font-bold">
          <Terminal className="size-5 text-primary" /> Win + R
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          اضغط Win + R لفتح نافذة Run ثم الصق الأمر واضغط Enter.
        </p>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {winR.map((c) => (
            <CommandRow key={c.cmd} cmd={c.cmd} desc={c.desc} />
          ))}
        </ul>
      </section>
    </div>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-4">
      <p className="text-xs font-bold text-foreground">{title}</p>
      <ul className="mt-2 space-y-1.5">
        {items.map((i) => (
          <li key={i} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
