import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Mail, Clock, User, Moon, Sun, Languages } from "lucide-react";
import logoAsset from "@/assets/ronitechx-logo.png.asset.json";
import { usePrefs, type Lang, type TKey } from "@/lib/prefs";

const navItems: { to: string; key: TKey }[] = [
  { to: "/", key: "home" },
  { to: "/phone", key: "phone" },
  { to: "/tv", key: "tv" },
  { to: "/windows", key: "windows" },
  { to: "/files", key: "files" },
  { to: "/qa", key: "qa" },
  { to: "/roni-ai", key: "ai" },
  { to: "/docs", key: "docs" },
  { to: "/community", key: "community" },
  { to: "/status", key: "status" },
  { to: "/security", key: "security" },
  { to: "/contact", key: "contact" },
];


const langs: Lang[] = ["ar", "en", "tr"];

export function Logo({ className = "h-8 md:h-9" }: { className?: string }) {
  return (
    <Link to="/" className="flex items-center" aria-label="RONI TECH X">
      <img
        src={logoAsset.url}
        alt="RONI TECH X"
        width={682}
        height={62}
        className={`w-auto ${className} brightness-0 dark:invert`}
      />
    </Link>
  );
}

function Controls() {
  const { lang, setLang, theme, setTheme, t } = usePrefs();
  return (
    <div className="flex items-center gap-2">
      <div
        className="flex items-center gap-0.5 rounded-lg border border-border bg-secondary p-0.5"
        aria-label={t("language")}
      >
        <Languages className="mx-1 size-3.5 text-muted-foreground" />
        {langs.map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className={`rounded-md px-2 py-1 text-xs font-bold uppercase transition-colors ${
              lang === l
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {l}
          </button>
        ))}
      </div>
      <button
        type="button"
        aria-label={t("theme")}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="grid size-9 place-items-center rounded-lg border border-border bg-secondary text-foreground transition-colors hover:bg-accent"
      >
        {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
      </button>
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { dir, lang, t } = usePrefs();

  return (
    <div dir={dir} lang={lang} className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "bg-primary/12 text-primary" }}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Controls />
          </div>
          <button
            type="button"
            aria-label={t("menu")}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-lg border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-border/70 bg-background/98 lg:hidden">
            <div className="mx-auto flex max-w-6xl flex-col p-3">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground"
                  activeProps={{ className: "bg-primary/12 text-primary" }}
                >
                  {t(item.key)}
                </Link>
              ))}
              <div className="mt-3 border-t border-border/70 pt-3">
                <Controls />
              </div>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-20 border-t border-border/70 bg-card/60">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
          <div className="space-y-3">
            <Logo />
            <p className="text-sm leading-relaxed text-muted-foreground">{t("tagline")}</p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-bold text-foreground">{t("quickLinks")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-primary">
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-bold text-foreground">{t("contactTitle")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <User className="size-4 text-primary" /> Ronican
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-primary" />
                <a
                  dir="ltr"
                  href="mailto:worldroni34@gmail.com"
                  className="transition-colors hover:text-primary"
                >
                  worldroni34@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="size-4 text-primary" /> 9:00 – 15:00
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/70 py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} RONI TECH X — {t("rights")}
        </div>
      </footer>
    </div>
  );
}
