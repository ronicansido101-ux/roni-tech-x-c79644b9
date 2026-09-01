import { createFileRoute } from "@tanstack/react-router";
import { Activity, CheckCircle2, CircleDashed, Loader2 } from "lucide-react";

export const Route = createFileRoute("/status")({
  head: () => ({
    meta: [
      { title: "حالة المشروع والميزات | RONI TECH X" },
      {
        name: "description",
        content:
          "حالة مشروع RONI TECH X: الميزات المنجزة، قيد التطوير، والمخطط لها — من أقسام PHONE و TV و WINDOWS إلى RONI AI والمجتمع.",
      },
      { property: "og:title", content: "حالة المشروع | RONI TECH X" },
      { property: "og:description", content: "خارطة طريق وميزات منصة RONI TECH X." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Status,
});

const states = {
  done: { label: "منجز", icon: CheckCircle2, cls: "text-primary bg-primary/12" },
  progress: { label: "قيد التطوير", icon: Loader2, cls: "text-amber-600 bg-amber-500/12" },
  planned: { label: "مخطط", icon: CircleDashed, cls: "text-muted-foreground bg-muted" },
} as const;

const features: { name: string; desc: string; state: keyof typeof states }[] = [
  { name: "قسم PHONE", desc: "Custom ROM، TWRP، ADB & Fastboot، تعريفات.", state: "done" },
  { name: "قسم TV", desc: "تطبيقات Android TV وإرسال الشاشة.", state: "done" },
  { name: "قسم WINDOWS", desc: "تخصيص، أدوات، أوامر وWin + R.", state: "done" },
  { name: "الملفات والبرامج", desc: "روابط رسمية مصنّفة مع بحث.", state: "done" },
  { name: "الشروحات وشروحات عامة", desc: "خطوات صيانة وحلول مشاكل يومية.", state: "done" },
  { name: "RONI AI", desc: "مساعد دعم تقني بثلاث لغات مع حفظ المحادثات.", state: "done" },
  { name: "الحسابات وتسجيل الدخول", desc: "بريد وكلمة مرور + Google.", state: "done" },
  { name: "المجتمع والملاحظات", desc: "نشر الاقتراحات وبلاغات الأخطاء.", state: "done" },
  { name: "دليل الاستخدام", desc: "وثائق المنصة خطوة بخطوة.", state: "done" },
  { name: "الترجمة الكاملة AR / EN / TR", desc: "ترجمة محتوى كل الأقسام.", state: "progress" },
  { name: "تقييمات ومناقشات مضمّنة", desc: "ردود على ملاحظات المجتمع.", state: "planned" },
  { name: "مكتبة فيديو للشروحات", desc: "فيديوهات مدمجة داخل كل شرح.", state: "planned" },
];

const stats = [
  { k: "الأقسام الرئيسية", v: "9" },
  { k: "الأدوات والروابط", v: "25+" },
  { k: "اللغات المدعومة", v: "3" },
  { k: "الاستضافة المحلية للملفات", v: "0" },
];

function Status() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-14">
      <h1 className="flex items-center gap-2 text-3xl font-extrabold md:text-4xl">
        <Activity className="size-7 text-primary" />
        <span className="text-gradient">حالة</span> المشروع
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        نظرة شفافة على ميزات RONI TECH X وما يجري العمل عليه حالياً.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.k} className="panel p-5">
            <p className="text-2xl font-extrabold text-primary">{s.v}</p>
            <p className="mt-1 text-xs text-muted-foreground">{s.k}</p>
          </div>
        ))}
      </div>

      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {features.map((f) => {
          const st = states[f.state];
          return (
            <li key={f.name} className="panel flex items-start gap-3 p-5">
              <st.icon className={`mt-0.5 size-5 shrink-0 ${st.cls.split(" ")[0]}`} />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-bold">{f.name}</h2>
                  <span className={`rounded-md px-2 py-0.5 text-[11px] font-bold ${st.cls}`}>
                    {st.label}
                  </span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
