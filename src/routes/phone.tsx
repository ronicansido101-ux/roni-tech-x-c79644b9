import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Smartphone } from "lucide-react";
import { CommandRow } from "@/components/copy-button";

export const Route = createFileRoute("/phone")({
  head: () => ({
    meta: [
      { title: "PHONE — Custom ROM و TWRP و ADB | RONI TECH X" },
      {
        name: "description",
        content:
          "قسم الهاتف: روم مخصص، ريكفري TWRP، أوامر ADB و Fastboot مع زر نسخ، وتعريفات أندرويد الرسمية.",
      },
      { property: "og:title", content: "PHONE | RONI TECH X" },
      {
        property: "og:description",
        content: "Custom ROM و TWRP و ADB & Fastboot وتعريفات أندرويد من مصادرها الرسمية.",
      },
    ],
  }),
  component: PhonePage,
});

const roms = [
  {
    name: "LineageOS",
    desc: "أشهر روم مفتوح المصدر، تحديثات أمنية منتظمة ودعم واسع للأجهزة.",
    url: "https://wiki.lineageos.org/devices/",
  },
  {
    name: "Pixel Experience",
    desc: "تجربة أندرويد نقية قريبة من هواتف Google Pixel.",
    url: "https://get.pixelexperience.org/devices",
  },
  {
    name: "crDroid",
    desc: "روم يركّز على التخصيص والأداء مع ثبات جيد.",
    url: "https://crdroid.net/",
  },
  {
    name: "Evolution X",
    desc: "خيارات تخصيص واسعة وواجهة قريبة من Pixel.",
    url: "https://evolution-x.org/",
  },
];

const twrpSteps = [
  "تأكد من دعم جهازك رسمياً في صفحة أجهزة TWRP، ونزّل ملف img المطابق لموديلك بالضبط.",
  "فعّل خيارات المطور ثم OEM Unlocking و USB Debugging من إعدادات الهاتف.",
  "افتح البوت لودر: fastboot flashing unlock (يمسح بيانات الجهاز بالكامل).",
  "ادخل وضع Fastboot ثم فلّش الريكفري: fastboot flash recovery twrp.img",
  "أقلع مباشرة إلى الريكفري بعد التفليش حتى لا يستبدله النظام.",
  "من TWRP خذ نسخة احتياطية كاملة (Backup) قبل أي تعديل.",
];

const adbCommands = [
  { cmd: "adb devices", desc: "عرض الأجهزة المتصلة والتأكد من التعريف." },
  { cmd: "adb reboot bootloader", desc: "إعادة التشغيل إلى وضع Fastboot." },
  { cmd: "adb reboot recovery", desc: "إعادة التشغيل إلى الريكفري." },
  { cmd: "adb sideload rom.zip", desc: "تثبيت ملف روم عبر وضع Sideload من الريكفري." },
  { cmd: "fastboot devices", desc: "التأكد من رؤية الجهاز في وضع Fastboot." },
  { cmd: "fastboot flash recovery twrp.img", desc: "تفليش ملف الريكفري المخصص." },
  { cmd: "fastboot reboot", desc: "إعادة تشغيل الجهاز بعد انتهاء العملية." },
];

function PhonePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12">
      <span className="badge">
        <Smartphone className="size-3.5" /> PHONE
      </span>
      <h1 className="mt-4 text-3xl font-extrabold md:text-4xl">قسم الهاتف</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        روم مخصص، ريكفري TWRP، أوامر ADB و Fastboot، وتعريفات أندرويد — كل الروابط تشير
        إلى مصادرها الرسمية.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-bold">Custom ROM</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {roms.map((r) => (
            <li key={r.name}>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="panel group flex h-full flex-col gap-2 p-5 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-bold" dir="ltr">
                    {r.name}
                  </p>
                  <ExternalLink className="size-4 shrink-0 text-primary" />
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">{r.desc}</p>
                <span className="mt-auto pt-2 text-xs font-semibold text-primary">
                  المصدر الرسمي ←
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">TWRP Recovery</h2>
        <div className="panel mt-4 p-6">
          <ol className="space-y-3">
            {twrpSteps.map((s, i) => (
              <li key={s} className="flex gap-3 text-sm leading-relaxed">
                <span className="grid size-6 shrink-0 place-items-center rounded-lg bg-primary/15 text-xs font-bold text-primary">
                  {i + 1}
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
          <a
            href="https://twrp.me/Devices/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground"
          >
            <ExternalLink className="size-4" /> صفحة أجهزة TWRP الرسمية
          </a>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">ADB & Fastboot</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          نزّل SDK Platform Tools الرسمية ثم شغّل الأوامر من داخل مجلدها.
        </p>
        <ul className="mt-4 space-y-3">
          {adbCommands.map((c) => (
            <CommandRow key={c.cmd} cmd={c.cmd} desc={c.desc} />
          ))}
        </ul>
        <a
          href="https://developer.android.com/tools/releases/platform-tools"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary"
        >
          <ExternalLink className="size-4" /> تحميل SDK Platform Tools
        </a>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">Android Drivers</h2>
        <a
          href="https://developer.android.com/studio/run/oem-usb"
          target="_blank"
          rel="noopener noreferrer"
          className="panel mt-4 flex items-center justify-between gap-3 p-5"
        >
          <div>
            <p className="font-bold" dir="ltr">
              Android OEM USB Drivers
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              صفحة Google الرسمية التي تجمع تعريفات USB لكل الشركات في مكان واحد.
            </p>
          </div>
          <ExternalLink className="size-4 shrink-0 text-primary" />
        </a>
      </section>
    </div>
  );
}
