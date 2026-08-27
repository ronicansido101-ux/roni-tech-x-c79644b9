import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, FolderDown, MessagesSquare, ShieldCheck, Wrench, Zap } from "lucide-react";
import heroImage from "@/assets/hero-repair.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RONI TECH X | مركز التقنية والصيانة" },
      {
        name: "description",
        content:
          "منصة احترافية لصيانة الهواتف: شروحات مصورة، ملفات وتعريفات، أدوات أندرويد وأسئلة وأجوبة تقنية.",
      },
      { property: "og:title", content: "RONI TECH X | مركز التقنية والصيانة" },
      {
        property: "og:description",
        content: "شروحات صيانة الهواتف، تعريفات، أدوات، وملفات فلاش في مكان واحد.",
      },
    ],
  }),
  component: Home,
});

const features = [
  {
    icon: BookOpen,
    title: "شروحات الصيانة",
    text: "خطوات عملية مفصّلة لحل أعطال الهواتف من الهاردوير إلى السوفتوير.",
    to: "/guides" as const,
  },
  {
    icon: FolderDown,
    title: "الملفات والأدوات",
    text: "تعريفات USB، أدوات أندرويد، ADB و Fastboot، وبرامج الصيانة.",
    to: "/files" as const,
  },
  {
    icon: MessagesSquare,
    title: "أسئلة وأجوبة",
    text: "إجابات سريعة لأكثر المشاكل التقنية شيوعاً بين الفنيين.",
    to: "/qa" as const,
  },
];

const stats = [
  { value: "+120", label: "شرح تقني" },
  { value: "+80", label: "ملف وأداة" },
  { value: "+500", label: "سؤال تمت الإجابة عليه" },
  { value: "24/7", label: "دعم فني" },
];

function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Zap className="size-3.5" /> منصة تقنية متخصصة بصيانة الهواتف
            </span>
            <h1 className="space-y-4 text-3xl font-extrabold leading-[1.2] md:text-4xl">
              <img
                src={logoAsset.url}
                alt="شعار RONI TECH X"
                width={682}
                height={62}
                className="h-10 w-auto max-w-full brightness-0 invert drop-shadow-[0_0_20px_color-mix(in_oklab,var(--primary)_55%,transparent)] sm:h-12 md:h-14"
              />
              <span className="block">مركز التقنية والصيانة</span>
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
              كل ما يحتاجه الفني المحترف: شروحات دقيقة، تعريفات وأدوات موثوقة، وملفات
              صيانة منظمة — بواجهة عربية حديثة وسريعة.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/guides"
                className="glow inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                <Wrench className="size-4" /> ابدأ بالشروحات
              </Link>
              <Link
                to="/files"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-5 py-3 text-sm font-bold text-secondary-foreground transition-colors hover:bg-accent"
              >
                <FolderDown className="size-4" /> تصفح الملفات
              </Link>
            </div>
          </div>
          <div className="panel glow overflow-hidden">
            <img
              src={heroImage}
              alt="طاولة صيانة هاتف ذكي بإضاءة زرقاء وأدوات دقيقة"
              width={1536}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="panel grid grid-cols-2 gap-6 p-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-extrabold text-primary md:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold md:text-3xl">ماذا نقدّم؟</h2>
        <p className="mt-2 text-sm text-muted-foreground">أقسام المنصة الأساسية.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {features.map((f) => (
            <Link
              key={f.title}
              to={f.to}
              className="panel group p-6 transition-transform hover:-translate-y-1"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                <f.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                اذهب للقسم ←
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-8">
        <div className="panel flex flex-col items-center gap-4 p-8 text-center md:flex-row md:justify-between md:text-right">
          <div className="flex items-center gap-3">
            <ShieldCheck className="size-8 text-primary" />
            <div>
              <h3 className="text-lg font-bold">هل تحتاج مساعدة في عطل معيّن؟</h3>
              <p className="text-sm text-muted-foreground">
                راسلنا وسنساعدك في تشخيص المشكلة خطوة بخطوة.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"
          >
            تواصل معنا
          </Link>
        </div>
      </section>
    </div>
  );
}
