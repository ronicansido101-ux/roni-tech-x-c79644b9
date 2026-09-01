import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Lock, Database, EyeOff, AlertTriangle, Mail } from "lucide-react";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "الأمان والخصوصية | RONI TECH X" },
      {
        name: "description",
        content:
          "سياسة الأمان والخصوصية في RONI TECH X: البيانات التي نحفظها، حماية الحساب، مصادر الملفات الرسمية، وحدود الاستخدام الآمن.",
      },
      { property: "og:title", content: "الأمان والخصوصية | RONI TECH X" },
      {
        property: "og:description",
        content: "كيف نحمي بياناتك وما الذي نحفظه ولماذا.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Security,
});

const items = [
  {
    icon: Database,
    title: "البيانات التي نحفظها",
    points: [
      "بريدك الإلكتروني عند إنشاء حساب (لتسجيل الدخول فقط).",
      "محادثات RONI AI الخاصة بك لعرضها لك لاحقاً.",
      "الملاحظات والاقتراحات التي تنشرها في المجتمع.",
      "تفضيلات اللغة والمظهر محفوظة محلياً في متصفحك.",
    ],
  },
  {
    icon: Lock,
    title: "حماية الحساب والوصول",
    points: [
      "كلمات المرور مُدارة عبر نظام مصادقة مشفّر ولا نطّلع عليها.",
      "سياسات وصول على مستوى الصف: كل مستخدم يصل إلى بياناته فقط.",
      "دعم تسجيل الدخول عبر Google دون مشاركة كلمة المرور.",
    ],
  },
  {
    icon: EyeOff,
    title: "ما لا نفعله",
    points: [
      "لا نبيع بياناتك ولا نشاركها مع أطراف إعلانية.",
      "لا نطلب أرقام IMEI أو حسابات Google أو كلمات مرور الأجهزة.",
      "لا نستضيف ملفات مُعدّلة — كل الروابط لمصادرها الرسمية.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "حدود الاستخدام الآمن",
    points: [
      "لا ندعم أدوات التفعيل غير الرسمية ولا الكراكات.",
      "لا نقدّم طرق تجاوز FRP أو أقفال الحماية.",
      "عمليات التفليش والروت على مسؤولية المستخدم وقد تُفقد الضمان.",
    ],
  },
];

function Security() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-14">
      <h1 className="flex items-center gap-2 text-3xl font-extrabold md:text-4xl">
        <ShieldCheck className="size-7 text-primary" />
        <span className="text-gradient">الأمان</span> والخصوصية
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        شفافية كاملة حول ما نحفظه وكيف نحميه، وحدود ما نقدّمه من محتوى تقني.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {items.map((it) => (
          <section key={it.title} className="panel p-6">
            <h2 className="flex items-center gap-2 text-lg font-bold">
              <it.icon className="size-5 text-primary" />
              {it.title}
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {it.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="panel mt-8 flex items-center gap-3 p-6 text-sm text-muted-foreground">
        <Mail className="size-5 shrink-0 text-primary" />
        لحذف حسابك أو بياناتك، راسلنا على{" "}
        <a dir="ltr" href="mailto:worldroni34@gmail.com" className="font-bold text-primary">
          worldroni34@gmail.com
        </a>
      </div>
    </div>
  );
}
