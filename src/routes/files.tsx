import { createFileRoute } from "@tanstack/react-router";
import { FileArchive } from "lucide-react";

export const Route = createFileRoute("/files")({
  head: () => ({
    meta: [
      { title: "الملفات والتعريفات | RONI TECH X" },
      {
        name: "description",
        content:
          "قائمة ملفات وتعريفات صيانة الهواتف: تعريفات سامسونج وشاومي، أدوات أندرويد، ADB و Fastboot، وملفات الفلاش.",
      },
      { property: "og:title", content: "الملفات والتعريفات | RONI TECH X" },
      {
        property: "og:description",
        content: "تعريفات وأدوات وبرامج صيانة الهواتف في قائمة منظمة.",
      },
    ],
  }),
  component: FilesPage,
});

const files = [
  "Samsung USB Driver",
  "Xiaomi USB Driver",
  "Android Tools",
  "ADB & Fastboot Tools",
  "Firmware Files",
  "Phone Repair Programs",
  "PC Drivers",
  "Phone Testing Tools",
];

function FilesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-extrabold md:text-4xl">
        <span className="text-gradient">الملفات</span> والتعريفات
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        قائمة الملفات المتوفرة حالياً في المنصة. روابط التحميل ستُضاف قريباً.
      </p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {files.map((name, i) => (
          <li key={name} className="panel flex items-center gap-4 p-5">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
              <FileArchive className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="truncate font-semibold" dir="ltr">
                {name}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                ملف رقم {String(i + 1).padStart(2, "0")} — قريباً
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
