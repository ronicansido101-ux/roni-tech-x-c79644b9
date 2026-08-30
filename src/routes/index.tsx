import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Monitor, Search, Smartphone, Tv } from "lucide-react";
import logoAsset from "@/assets/ronitechx-logo.png.asset.json";
import { searchItems, latest } from "@/lib/site-data";
import { usePrefs } from "@/lib/prefs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RONI TECH X | مركز التقنية والصيانة" },
      {
        name: "description",
        content:
          "منصة RONI TECH X: أدوات وشروحات الهواتف و Custom ROM، تطبيقات TV، تخصيص وأوامر Windows، وملفات بروابط رسمية.",
      },
      { property: "og:title", content: "RONI TECH X | مركز التقنية والصيانة" },
      {
        property: "og:description",
        content: "PHONE و TV و WINDOWS — أدوات، شروحات، ملفات وأوامر في مكان واحد.",
      },
    ],
  }),
  component: Home,
});

const cards = [
  {
    to: "/phone" as const,
    icon: Smartphone,
    title: "PHONE",
    text: "Custom ROM، TWRP، ADB & Fastboot، وتعريفات أندرويد.",
  },
  {
    to: "/tv" as const,
    icon: Tv,
    title: "TV",
    text: "تطبيقات وأدوات Android TV وشرح إرسال شاشة الهاتف.",
  },
  {
    to: "/windows" as const,
    icon: Monitor,
    title: "WINDOWS",
    text: "تخصيص، مساعدة رسمية، أدوات، أوامر تنظيف و Win + R.",
  },
];

function Home() {
  const { t } = usePrefs();
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    return searchItems
      .filter(
        (i) => i.title.toLowerCase().includes(s) || i.desc.toLowerCase().includes(s),
      )
      .slice(0, 8);
  }, [q]);

  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-4 py-14 md:py-20">
        <img
          src={logoAsset.url}
          alt="RONI TECH X"
          width={682}
          height={62}
          className="h-10 w-auto max-w-full brightness-0 dark:invert sm:h-12 md:h-14"
        />
        <h1 className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl">
          RONI TECH X | مركز التقنية والصيانة
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          منصة عربية خفيفة واحترافية تجمع أدوات وشروحات الهواتف والتلفزيونات والويندوز،
          مع روابط مصادر رسمية وأوامر جاهزة للنسخ.
        </p>

        <div className="panel mt-8 p-4">
          <label className="flex items-center gap-3">
            <Search className="size-5 shrink-0 text-primary" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </label>
          {q.trim() && (
            <ul className="mt-4 space-y-2 border-t border-border pt-4">
              {results.length === 0 && (
                <li className="text-sm text-muted-foreground">{t("noResults")}</li>
              )}
              {results.map((r) => (
                <li key={`${r.section}-${r.title}`}>
                  <Link
                    to={r.to}
                    className="flex flex-col gap-1 rounded-xl border border-border bg-secondary/60 p-3 transition-colors hover:border-primary/40"
                  >
                    <span className="flex items-center gap-2 text-sm font-bold">
                      {r.title}
                      <span className="rounded-md bg-primary/12 px-2 py-0.5 text-[11px] font-bold text-primary">
                        {r.section} · {r.kind}
                      </span>
                    </span>
                    <span className="text-xs leading-relaxed text-muted-foreground">
                      {r.desc}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4">
        <h2 className="text-xl font-bold">{t("sections")}</h2>
        <div className="mt-4 grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <Link
              key={c.title}
              to={c.to}
              className="panel group p-6 transition-transform hover:-translate-y-1"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/25">
                <c.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14">
        <h2 className="text-xl font-bold">{t("latest")}</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {latest.map((l) => (
            <li key={l.title}>
              <Link
                to={l.to}
                className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card/70 p-4 text-sm transition-colors hover:border-primary/40"
              >
                <span className="font-semibold">{l.title}</span>
                <span className="rounded-md bg-primary/12 px-2 py-0.5 text-[11px] font-bold text-primary">
                  {l.section}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
