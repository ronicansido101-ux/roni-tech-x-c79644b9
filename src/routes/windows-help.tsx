import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  AlertTriangle,
  Check,
  ChevronDown,
  Copy,
  Key,
  Layers,
  RefreshCw,
  ShieldCheck,
  Terminal,
  UserCircle,
  Wrench,
} from "lucide-react";

export const Route = createFileRoute("/windows-help")({
  head: () => ({
    meta: [
      { title: "Windows Help | RONI TECH X" },
      {
        name: "description",
        content:
          "شروحات رسمية لتفعيل Windows وOffice، تحديثات Windows 10، وأدوات النظام المفيدة مثل SFC وDISM.",
      },
      { property: "og:title", content: "Windows Help | RONI TECH X" },
      {
        property: "og:description",
        content:
          "دليل رسمي لتفعيل Windows وOffice، حل مشاكل التحديث، وأوامر صيانة النظام.",
      },
    ],
  }),
  component: WindowsHelpPage,
});

const categoryBadge: Record<string, string> = {
  تفعيل: "border-blue-500/30 bg-blue-500/10 text-blue-400",
  تحديث: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
  أدوات: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Fallback for browsers that block clipboard
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary px-2.5 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-accent"
      aria-label="نسخ الأمر"
    >
      {copied ? (
        <>
          <Check className="size-3.5 text-emerald-400" /> نُسخ
        </>
      ) : (
        <>
          <Copy className="size-3.5" /> نسخ
        </>
      )}
    </button>
  );
}

const windowsGuides = [
  {
    icon: Key,
    title: "تفعيل Windows",
    category: "تفعيل",
    summary:
      "معرفة حالة التفعيل، إدخال مفتاح المنتج الأصلي، ربط الترخيص بحساب Microsoft، وحل أشهر مشاكل التفعيل.",
    steps: [
      "افتح Settings > System > Activation لتعرف حالة التفعيل الحالية (Active أو Not active).",
      "إذا لم يكن مفعلاً، اضغط Change product key وأدخل مفتاح Windows الأصلي المكون من 25 حرفاً ورقماً.",
      "تأكد من اتصال الجهاز بالإنترنت؛ التفعيل يتطلب الاتصال بسيرفرات Microsoft.",
      "لربط الترخيص بالحساب: Settings > Accounts > Your info ثم Sign in with Microsoft account.",
      "بعد تسجيل الدخول، ارجع إلى Activation واضغط Troubleshoot إذا ظهرت مشكلة Hardware changed.",
      "إذا استمر الخطأ، اكتب الأمر slmgr /dlv في Command Prompt كمسؤول وتحقق من Reason code.",
    ],
    commands: [
      { label: "فحص حالة التفعيل التفصيلية", value: "slmgr /dlv" },
      { label: "تنشيط يدوي عبر الإنترنت", value: "slmgr /ato" },
    ],
    tip: "استخدم دائماً مفتاح المنتج الأصلي المرافق للجهاز أو الحساب. لا تستخدم أدوات تفعيل غير رسمية؛ قد تسبب عدم استقرار أو مشاكل قانونية.",
  },
  {
    icon: Layers,
    title: "تفعيل Office",
    category: "تفعيل",
    summary:
      "تفعيل Microsoft Office باستخدام حساب Microsoft أو Product Key أصلي، والتحقق من حالة الترخيص داخل التطبيق.",
    steps: [
      "افتح أي تطبيق من Office (Word أو Excel).",
      "اذهب إلى File > Account (أو Office Account في بعض الإصدارات).",
      "تحت Product Information ستظهر حالة التفعيل: ActiveProduct أو UnlicensedProduct.",
      "إذا كان لديك Product Key: اختر Change License/Activate Product > Enter a Product Key.",
      "إذا كان الترخيص مرتبطاً بحساب Microsoft: اختر Sign in وأدخل البريد وكلمة المرور.",
      "تأكد من تثبيت الإصدار الصحيح (Home/Student/Professional) المطابق للترخيص.",
      "أغلق جميع تطبيقات Office وأعد فتحها بعد التفعيل للتحقق من التحديث.",
    ],
    commands: [],
    tip: "إذا اشتريت Office رقمياً من Microsoft، فالتفعيل يتم تلقائياً بعد تسجيل الدخول بنفس الحساب. احتفظ بإيصال الشراء في حالة الحاجة للدعم.",
  },
  {
    icon: RefreshCw,
    title: "تحديثات Windows 10",
    category: "تحديث",
    summary:
      "شرح Windows Update، فحص التحديثات الرسمية، وحل مشاكل التحديث العامة بدون برامج خارجية.",
    steps: [
      "افتح Settings > Update & Security > Windows Update.",
      "اضغط Check for updates وانتظر حتى يكتمل الفحص.",
      "إذا وجدت تحديثات، اضغط Download and install ثم أعد تشغيل الجهاز عند الطلب.",
      "للتحقق من سجل التحديثات: اضغط View update history.",
      "إذا علقت التحديثات أو فشلت، شغّل مستكشف الأخطاء: Windows Update > Run the troubleshooter.",
      "امسح ذاكرة التحديث المؤقتة: افتح Command Prompt كمسؤول وشغّل أوامر إيقاف خدمات Windows Update و BITS، ثم احذف محتوى C:\\Windows\\SoftwareDistribution\\Download.",
      "أعد تشغيل الخدمات وحاول التحديث من جديد.",
    ],
    commands: [
      { label: "فحص سلامة ملفات النظام", value: "sfc /scannow" },
      { label: "إصلاح صورة النظام", value: "DISM /Online /Cleanup-Image /RestoreHealth" },
    ],
    tip: "تأكد من توفر مساحة حرة على قرص C: بحد أدنى 10 GB، وأن الجهاز متصل بمصدر طاقة ثابت أثناء تحديثات النظام الكبيرة.",
  },
  {
    icon: Wrench,
    title: "أدوات Windows مفيدة",
    category: "أدوات",
    summary:
      "شرح SFC وDISM وDisk Cleanup وإدارة Startup Apps لصيانة النظام وتحسين الأداء.",
    steps: [
      "SFC (System File Checker): يفحص ويصلح ملفات النظام التالفة. شغّله من Command Prompt كمسؤول.",
      "DISM: يصلح صورة Windows. استخدمه بعد SFC إذا استمرت المشاكل.",
      "Disk Cleanup: يحذف الملفات المؤقتة ويحرر مساحة القرص. ابحث عنه في قائمة Start.",
      "Startup Apps: اضغط Ctrl + Shift + Esc لفتح Task Manager، ثم اذهب إلى Startup وعطّل البرامج غير الضرورية.",
      "بعد تطبيق الأدوات، أعد تشغيل الجهاز لضمان تطبيق جميع الإصلاحات.",
    ],
    commands: [
      { label: "فحص ملفات النظام", value: "sfc /scannow" },
      { label: "فحص صحة صورة النظام", value: "DISM /Online /Cleanup-Image /CheckHealth" },
      { label: "فحص عميق لصورة النظام", value: "DISM /Online /Cleanup-Image /ScanHealth" },
      { label: "إصلاح صورة النظام", value: "DISM /Online /Cleanup-Image /RestoreHealth" },
      { label: "فتح Disk Cleanup", value: "cleanmgr" },
      { label: "فتح Task Manager", value: "taskmgr" },
      { label: "فتح System Configuration", value: "msconfig" },
      { label: "فتح Windows Update", value: "control /name Microsoft.WindowsUpdate" },
    ],
    tip: "شغّل SFC أولاً، ثم DISM إذا لزم الأمر. لا تستخدم أدوات تنظيف غير موثوقة قد تحذف ملفات نظام مهمة.",
  },
];

function WindowsHelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold md:text-4xl">
          <span className="text-gradient">Windows</span> Help
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          شروحات رسمية وآمنة حول تفعيل Windows وOffice، إدارة تحديثات Windows 10، واستخدام
          أدوات النظام المدمجة. كل المحتوى موجه للمستخدم العادي بدون أدوات تجاوز أو تفعيل
          غير رسمي.
        </p>
      </div>

      <div className="mb-8 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm leading-relaxed text-amber-200">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-400" />
          <div>
            <strong className="block font-bold text-amber-100">تنبيه مهم</strong>
            المحتوى هنا للتعليم الرسمي فقط. لا نقدم أدوات تفعيل غير قانونية أو طرق تجاوز
            التراخيص. استخدم دائماً مفاتيح المنتج الأصلية والحسابات الرسمية.
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {windowsGuides.map((g, i) => {
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
                  <h3 className="mb-3 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    خطوات التنفيذ
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

                  {g.commands.length > 0 && (
                    <div className="mt-5">
                      <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                        <Terminal className="size-3.5" /> أوامر مفيدة (اضغط للنسخ)
                      </h3>
                      <div className="grid gap-2">
                        {g.commands.map((cmd) => (
                          <div
                            key={cmd.value}
                            className="flex flex-col gap-2 rounded-xl border border-border bg-secondary/60 p-3 sm:flex-row sm:items-center sm:justify-between"
                          >
                            <div className="text-right">
                              <div className="text-xs text-muted-foreground">{cmd.label}</div>
                              <code className="mt-0.5 block font-mono text-sm text-primary">
                                {cmd.value}
                              </code>
                            </div>
                            <CopyButton text={cmd.value} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-3 text-sm leading-relaxed text-primary-foreground/90">
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>
                        <strong className="text-primary">نصيحة:</strong> {g.tip}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-card/40 p-6">
        <h2 className="flex items-center gap-2 text-lg font-bold">
          <UserCircle className="size-5 text-primary" /> تحتاج مساعدة إضافية؟
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          إذا استمرت مشكلة التفعيل أو التحديث، يمكنك التواصل مع دعم Microsoft الرسمي أو
          مراسلتنا من صفحة تواصل معنا وسنوجهك للحل الأنسب.
        </p>
      </div>
    </div>
  );
}
