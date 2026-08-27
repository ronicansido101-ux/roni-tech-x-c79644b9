import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Mail, Send, Phone } from "lucide-react";
import logoAsset from "@/assets/ronitechx-logo.png.asset.json";

const navItems = [
  { to: "/", label: "الرئيسية" },
  { to: "/guides", label: "شروحات الصيانة" },
  { to: "/files", label: "الملفات" },
  { to: "/qa", label: "أسئلة وأجوبة" },
  { to: "/contact", label: "تواصل معنا" },
] as const;

export function Logo({ className = "h-8 md:h-9" }: { className?: string }) {
  return (
    <Link to="/" className="flex items-center" aria-label="RONI TECH X">
      <img
        src={logoAsset.url}
        alt="شعار RONI TECH X"
        width={682}
        height={62}
        className={`w-auto ${className} brightness-0 invert drop-shadow-[0_0_12px_color-mix(in_oklab,var(--primary)_60%,transparent)]`}
      />
    </Link>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div dir="rtl" lang="ar" className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
          <Logo />
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "bg-primary/15 text-primary" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            aria-label="القائمة"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-lg border border-border text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-border/70 bg-background/95 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col p-3">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground"
                  activeProps={{ className: "bg-primary/15 text-primary" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-20 border-t border-border/70 bg-card/40">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
          <div className="space-y-3">
            <Logo />
            <p className="text-sm leading-relaxed text-muted-foreground">
              مركز التقنية والصيانة — شروحات، ملفات، وأدوات احترافية لصيانة الهواتف
              الذكية.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-bold text-foreground">روابط سريعة</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-bold text-foreground">تواصل</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-primary" /> info@ronitechx.com
              </li>
              <li className="flex items-center gap-2">
                <Send className="size-4 text-primary" /> @ronitechx
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-primary" /> ‎+964 000 000 0000
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/70 py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} RONI TECH X — جميع الحقوق محفوظة.
        </div>
      </footer>
    </div>
  );
}
