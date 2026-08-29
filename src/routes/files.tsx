import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ExternalLink, Search, Smartphone, Tv, Monitor } from "lucide-react";

export const Route = createFileRoute("/files")({
  head: () => ({
    meta: [
      { title: "الملفات والبرامج | RONI TECH X" },
      {
        name: "description",
        content:
          "روابط رسمية لأدوات وبرامج الهواتف والتلفزيونات والويندوز: Platform Tools، TWRP، Custom ROMs، Rufus، Ventoy وغيرها.",
      },
      { property: "og:title", content: "الملفات والبرامج | RONI TECH X" },
      {
        property: "og:description",
        content: "مكتبة روابط خارجية موثوقة مقسّمة إلى PHONE و TV و WINDOWS.",
      },
    ],
  }),
  component: FilesPage,
});

type Cat = "PHONE" | "TV" | "WINDOWS";

const categories: { id: Cat; label: string; icon: typeof Smartphone }[] = [
  { id: "PHONE", label: "PHONE", icon: Smartphone },
  { id: "TV", label: "TV", icon: Tv },
  { id: "WINDOWS", label: "WINDOWS", icon: Monitor },
];

const items: { cat: Cat; name: string; desc: string; url: string }[] = [
  // PHONE
  {
    cat: "PHONE",
    name: "SDK Platform Tools (ADB & Fastboot)",
    desc: "الأدوات الرسمية من Google لأوامر ADB و Fastboot.",
    url: "https://developer.android.com/tools/releases/platform-tools",
  },
  {
    cat: "PHONE",
    name: "Android OEM USB Drivers",
    desc: "صفحة Google الرسمية لتعريفات USB لكل الشركات في مكان واحد.",
    url: "https://developer.android.com/studio/run/oem-usb",
  },
  {
    cat: "PHONE",
    name: "TWRP Recovery",
    desc: "الريكفري المخصص الرسمي — اختر جهازك من قائمة الأجهزة المدعومة.",
    url: "https://twrp.me/Devices/",
  },
  {
    cat: "PHONE",
    name: "LineageOS (Custom ROM)",
    desc: "أشهر روم مخصص مفتوح المصدر مع تحديثات أمنية منتظمة.",
    url: "https://lineageos.org/",
  },
  {
    cat: "PHONE",
    name: "Magisk",
    desc: "أداة الروت وإدارة الوحدات (Modules) الرسمية على GitHub.",
    url: "https://github.com/topjohnwu/Magisk/releases",
  },
  {
    cat: "PHONE",
    name: "MediaTek SP Flash Tool",
    desc: "أداة تفليش أجهزة MediaTek.",
    url: "https://spflashtool.com/",
  },
  {
    cat: "PHONE",
    name: "Qualcomm QPST & QFIL",
    desc: "أدوات تفليش وإصلاح أجهزة Qualcomm.",
    url: "https://qpsttool.com/",
  },
  {
    cat: "PHONE",
    name: "Mi Flash Tool",
    desc: "أداة تفليش فيرموير Fastboot لأجهزة Xiaomi.",
    url: "https://xiaomiflashtool.com/",
  },
  {
    cat: "PHONE",
    name: "Odin",
    desc: "أداة تفليش فيرموير أجهزة Samsung عبر Download Mode.",
    url: "https://odindownload.com/",
  },
  {
    cat: "PHONE",
    name: "Firmware Files",
    desc: "أرشيف فيرموير رسمي بحسب موديل الجهاز.",
    url: "https://samfw.com/",
  },
  {
    cat: "PHONE",
    name: "Phone Testing Tools",
    desc: "أدوات فحص الشاشة واللمس والحساسات بعد الصيانة.",
    url: "https://play.google.com/store/apps/details?id=com.ledblinker",
  },

  // TV
  {
    cat: "TV",
    name: "Rufus",
    desc: "إنشاء فلاشة إقلاعية بسرعة ومرونة عالية.",
    url: "https://rufus.ie/",
  },
  {
    cat: "TV",
    name: "balenaEtcher",
    desc: "حرق ملفات IMG و ISO على الفلاشة بواجهة بسيطة.",
    url: "https://etcher.balena.io/",
  },
  {
    cat: "TV",
    name: "Amlogic USB Burning Tool",
    desc: "أداة حرق صور الأنظمة لأجهزة Amlogic TV Box.",
    url: "https://androidmtk.com/download-amlogic-usb-burning-tool",
  },
  {
    cat: "TV",
    name: "PhoenixSuit / PhoenixUSBPro",
    desc: "أداة تفليش أجهزة Allwinner.",
    url: "https://androidmtk.com/download-phoenixsuit",
  },
  {
    cat: "TV",
    name: "Android TV / Google TV Images",
    desc: "صور أنظمة Android TV الجاهزة للحرق على الفلاشة.",
    url: "https://konstakang.com/",
  },
  {
    cat: "TV",
    name: "LineageOS for Android TV",
    desc: "نسخة LineageOS المخصصة لأجهزة التلفزيون.",
    url: "https://wiki.lineageos.org/devices/",
  },

  // WINDOWS
  {
    cat: "WINDOWS",
    name: "Windows 11 Media Creation Tool",
    desc: "الأداة الرسمية من Microsoft لتحميل وإنشاء وسائط التثبيت.",
    url: "https://www.microsoft.com/software-download/windows11",
  },
  {
    cat: "WINDOWS",
    name: "Windows 10 Download",
    desc: "صفحة تحميل Windows 10 الرسمية.",
    url: "https://www.microsoft.com/software-download/windows10",
  },
  {
    cat: "WINDOWS",
    name: "Ventoy",
    desc: "فلاشة واحدة تحمل عدة ملفات ISO بدون إعادة حرق.",
    url: "https://www.ventoy.net/",
  },
  {
    cat: "WINDOWS",
    name: "Microsoft Office Setup",
    desc: "تثبيت وتفعيل Office رسمياً عبر حساب Microsoft.",
    url: "https://setup.office.com/",
  },
  {
    cat: "WINDOWS",
    name: "Windows Activation Help",
    desc: "الدعم الرسمي لحل مشاكل تفعيل Windows.",
    url: "https://support.microsoft.com/windows/activate-windows-c39005d4-95ee-b91e-b399-2820fda32227",
  },
  {
    cat: "WINDOWS",
    name: "7-Zip",
    desc: "برنامج فك وضغط الملفات مفتوح المصدر.",
    url: "https://www.7-zip.org/",
  },
];

function FilesPage() {
  const [cat, setCat] = useState<Cat>("PHONE");
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    return items.filter(
      (it) =>
        it.cat === cat &&
        (term === "" ||
          it.name.toLowerCase().includes(term) ||
          it.desc.toLowerCase().includes(term)),
    );
  }, [cat, q]);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-extrabold md:text-4xl">
        <span className="text-gradient">الملفات</span> والبرامج
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        جميع الأدوات مرتبطة بمصادرها الرسمية الخارجية — لا نستضيف أي ملف محلياً.
      </p>

      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCat(c.id)}
              className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-bold transition-colors ${
                cat === c.id
                  ? "border-primary/50 bg-primary/15 text-primary"
                  : "border-border bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              <c.icon className="size-4" />
              {c.label}
            </button>
          ))}
        </div>

        <div className="relative w-full md:max-w-xs">
          <Search className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="ابحث عن أداة أو برنامج..."
            aria-label="بحث في الملفات"
            className="w-full rounded-xl border border-border bg-secondary py-2.5 pr-10 pl-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/60"
          />
        </div>
      </div>

      {results.length === 0 ? (
        <p className="panel mt-8 p-8 text-center text-sm text-muted-foreground">
          لا توجد نتائج مطابقة لبحثك.
        </p>
      ) : (
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((it) => (
            <li key={it.name}>
              <a
                href={it.url}
                target="_blank"
                rel="noopener noreferrer"
                className="panel group flex h-full flex-col gap-2 p-5 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-semibold" dir="ltr">
                    {it.name}
                  </p>
                  <ExternalLink className="size-4 shrink-0 text-primary opacity-70 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">{it.desc}</p>
                <span className="mt-auto pt-2 text-xs font-semibold text-primary">
                  فتح المصدر الرسمي ←
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
