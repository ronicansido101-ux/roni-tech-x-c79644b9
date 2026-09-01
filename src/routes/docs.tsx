import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Compass, Search, Bot, Download, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "دليل الاستخدام (Documentation) | RONI TECH X" },
      {
        name: "description",
        content:
          "دليل استخدام RONI TECH X: كيفية التنقل بين أقسام PHONE و TV و WINDOWS، استخدام البحث، تشغيل الأوامر، تحميل الملفات، والاستفادة من RONI AI.",
      },
      { property: "og:title", content: "دليل الاستخدام | RONI TECH X" },
      {
        property: "og:description",
        content: "كل ما تحتاجه لاستخدام منصة RONI TECH X خطوة بخطوة.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Docs,
});

const sections = [
  {
    icon: Compass,
    title: "التنقل بين الأقسام",
    steps: [
      "PHONE: Custom ROM، TWRP، أوامر ADB & Fastboot والتعريفات.",
      "TV: تطبيقات Android TV وشرح إرسال شاشة الهاتف.",
      "WINDOWS: التخصيص، المساعدة الرسمية، الأدوات، أوامر Win + R.",
      "الشروحات وشروحات عامة: خطوات صيانة وحلول مشاكل يومية.",
    ],
  },
  {
    icon: Search,
    title: "استخدام البحث الشامل",
    steps: [
      "افتح الصفحة الرئيسية واستخدم شريط البحث في الأعلى.",
      "اكتب اسم أداة أو مشكلة أو Custom ROM.",
      "اضغط على النتيجة للانتقال مباشرة إلى القسم المناسب.",
    ],
  },
  {
    icon: Download,
    title: "صفحة الملفات",
    steps: [
      "الملفات مقسّمة إلى PHONE و WINDOWS و PC DRIVERS و ANDROID و TOOLS.",
      "كل عنصر رابط لمصدره الرسمي الخارجي — لا نستضيف أي ملف محلياً.",
      "استخدم البحث داخل الصفحة لتصفية الأدوات بسرعة.",
    ],
  },
  {
    icon: Bot,
    title: "RONI AI — مساعد الدعم التقني",
    steps: [
      "افتح صفحة RONI AI واكتب سؤالك بالعربية أو الإنجليزية أو التركية.",
      "المساعد يجيب حسب اللغة المختارة من شريط اللغات.",
      "سجّل الدخول لحفظ محادثاتك والرجوع إليها لاحقاً.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "قواعد الاستخدام الآمن",
    steps: [
      "خذ نسخة احتياطية قبل أي تفليش أو روت.",
      "استخدم كابل ووصلة أصليين وبطارية فوق 50%.",
      "لا نوفّر أدوات تفعيل غير رسمية أو تجاوز حماية الأجهزة.",
    ],
  },
];

function Docs() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-14">
      <h1 className="flex items-center gap-2 text-3xl font-extrabold md:text-4xl">
        <BookOpen className="size-7 text-primary" />
        <span className="text-gradient">دليل</span> الاستخدام
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        وثائق مختصرة تشرح كل ما تقدّمه منصة RONI TECH X وكيفية استخدامها بالشكل الصحيح.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {sections.map((s) => (
          <section key={s.title} className="panel p-6">
            <h2 className="flex items-center gap-2 text-lg font-bold">
              <s.icon className="size-5 text-primary" />
              {s.title}
            </h2>
            <ol className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {s.steps.map((step, i) => (
                <li key={step} className="flex gap-2">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-md bg-primary/12 text-[11px] font-bold text-primary">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>

      <div className="panel mt-8 flex flex-wrap items-center justify-between gap-4 p-6">
        <p className="text-sm text-muted-foreground">لم تجد ما تبحث عنه؟</p>
        <div className="flex flex-wrap gap-2">
          <Link
            to="/roni-ai"
            className="rounded-xl bg-primary px-4 py-2 text-sm font-bold text-primary-foreground"
          >
            اسأل RONI AI
          </Link>
          <Link
            to="/community"
            className="rounded-xl border border-border bg-secondary px-4 py-2 text-sm font-bold"
          >
            اقترح تحسيناً
          </Link>
        </div>
      </div>
    </div>
  );
}
