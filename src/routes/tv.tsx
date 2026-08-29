import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Tv } from "lucide-react";

export const Route = createFileRoute("/tv")({
  head: () => ({
    meta: [
      { title: "TV — تطبيقات وأدوات التلفزيون | RONI TECH X" },
      {
        name: "description",
        content:
          "تطبيقات Android TV مختارة مع وصف ورابط المصدر، وشرح إرسال شاشة الهاتف إلى التلفزيون.",
      },
      { property: "og:title", content: "TV | RONI TECH X" },
      {
        property: "og:description",
        content: "تطبيقات وأدوات التلفزيون وشرح Screen Mirroring من الهاتف.",
      },
    ],
  }),
  component: TvPage,
});

const apps = [
  {
    name: "File Manager for FTP",
    desc: "مدير ملفات لأجهزة Android TV مع دعم FTP والشبكة لنقل الملفات بدون فلاشة.",
    url: "https://play.google.com/store/search?q=file%20manager%20ftp&c=apps",
  },
  {
    name: "YouWindo",
    desc: "تطبيق تشغيل محتوى بواجهة مصممة للتحكم بالريموت.",
    url: "https://play.google.com/store/search?q=YouWindo&c=apps",
  },
  {
    name: "DramaLive",
    desc: "تطبيق مشاهدة محتوى الدراما على شاشة التلفزيون.",
    url: "https://play.google.com/store/search?q=DramaLive&c=apps",
  },
  {
    name: "Zeus Browser",
    desc: "متصفح إنترنت مخصص لأجهزة Android TV يعمل بالريموت.",
    url: "https://play.google.com/store/search?q=Zeus%20Browser%20TV&c=apps",
  },
  {
    name: "Shamna Ultra",
    desc: "تطبيق تشغيل محتوى بواجهة مناسبة للتلفزيون.",
    url: "https://play.google.com/store/search?q=Shamna%20Ultra&c=apps",
  },
  {
    name: "Pigeon Cast",
    desc: "تطبيق بث ومشاركة المحتوى بين الهاتف والتلفزيون.",
    url: "https://play.google.com/store/search?q=Pigeon%20Cast&c=apps",
  },
];

const castSteps = [
  "تأكد أن الهاتف والتلفزيون على نفس شبكة Wi-Fi.",
  "على أندرويد: افتح لوحة الإعدادات السريعة واختر Cast أو Smart View أو Screen Mirroring.",
  "اختر اسم التلفزيون من القائمة ووافق على طلب الاتصال الظاهر على الشاشة.",
  "على iPhone: افتح مركز التحكم واختر Screen Mirroring ثم جهاز AirPlay المدعوم.",
  "لبث فيديو فقط: افتح YouTube واضغط أيقونة Cast داخل التطبيق.",
  "إذا لم يظهر التلفزيون: أعد تشغيل الراوتر، وفعّل Google Cast أو Miracast من إعدادات التلفزيون.",
];

function TvPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12">
      <span className="badge">
        <Tv className="size-3.5" /> TV
      </span>
      <h1 className="mt-4 text-3xl font-extrabold md:text-4xl">قسم التلفزيون</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        تطبيقات وأدوات مختارة لأجهزة Android TV — الروابط تشير إلى مصادرها الخارجية بدون
        استضافة أي ملف APK محلياً.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-bold">Apps & Tools</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((a) => (
            <li key={a.name}>
              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="panel group flex h-full flex-col gap-2 p-5 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-bold" dir="ltr">
                    {a.name}
                  </p>
                  <ExternalLink className="size-4 shrink-0 text-primary" />
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">{a.desc}</p>
                <span className="mt-auto pt-2 text-xs font-semibold text-primary">
                  زيارة المصدر ←
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">إرسال شاشة الهاتف إلى التلفزيون</h2>
        <div className="panel mt-4 p-6">
          <ol className="space-y-3">
            {castSteps.map((s, i) => (
              <li key={s} className="flex gap-3 text-sm leading-relaxed">
                <span className="grid size-6 shrink-0 place-items-center rounded-lg bg-primary/15 text-xs font-bold text-primary">
                  {i + 1}
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
