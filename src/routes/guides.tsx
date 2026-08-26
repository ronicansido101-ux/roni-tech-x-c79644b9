import { createFileRoute } from "@tanstack/react-router";
import { BatteryCharging, Cpu, Droplets, Smartphone, Usb, Wifi } from "lucide-react";

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

const guides = [
  {
    icon: Smartphone,
    title: "استبدال شاشة الهاتف",
    level: "متوسط",
    text: "فك الجهاز بأمان، فصل الفليت، تركيب الشاشة الجديدة واختبار اللمس.",
  },
  {
    icon: BatteryCharging,
    title: "تغيير البطارية وحل مشاكل الشحن",
    level: "مبتدئ",
    text: "قياس استهلاك البطارية، فحص دائرة الشحن، واستبدال البطارية بشكل صحيح.",
  },
  {
    icon: Usb,
    title: "إصلاح منفذ الشحن (Charging Port)",
    level: "متوسط",
    text: "تنظيف المنفذ، فحص خطوط البيانات، وطريقة لحام المنفذ الجديد.",
  },
  {
    icon: Cpu,
    title: "الفلاش وإعادة تنصيب النظام",
    level: "متقدم",
    text: "تحضير الفيرموير، الدخول لوضع Download/Fastboot، وتفادي أخطاء الفلاش.",
  },
  {
    icon: Wifi,
    title: "أعطال الشبكة والواي فاي",
    level: "متقدم",
    text: "تشخيص فقدان الشبكة، فحص هوائي الاستقبال، ومعالجة أعطال IMEI.",
  },
  {
    icon: Droplets,
    title: "إنقاذ الهاتف بعد تعرضه للماء",
    level: "متوسط",
    text: "خطوات الطوارئ، تنظيف البورد بالألتراسونيك، ومعالجة التأكسد.",
  },
];

function GuidesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-extrabold md:text-4xl">
        <span className="text-gradient">شروحات</span> صيانة الهواتف
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        مجموعة شروحات عملية موجهة للفنيين والمبتدئين، مرتبة حسب نوع العطل ومستوى
        الصعوبة.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => (
          <article key={g.title} className="panel p-6">
            <div className="flex items-center justify-between">
              <span className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                <g.icon className="size-5" />
              </span>
              <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground">
                {g.level}
              </span>
            </div>
            <h2 className="mt-4 text-lg font-bold">{g.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
