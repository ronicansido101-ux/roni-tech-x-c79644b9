import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ar" | "en" | "tr";
export type Theme = "light" | "dark";

const dict = {
  ar: {
    home: "الرئيسية",
    phone: "PHONE",
    tv: "TV",
    windows: "WINDOWS",
    files: "الملفات",
    qa: "أسئلة وأجوبة",
    contact: "تواصل معنا",
    menu: "القائمة",
    quickLinks: "روابط سريعة",
    contactTitle: "تواصل",
    tagline: "مركز التقنية والصيانة — شروحات، ملفات، وأدوات احترافية.",
    rights: "جميع الحقوق محفوظة.",
    searchPlaceholder: "ابحث عن أداة، شرح، تطبيق أو Custom ROM...",
    noResults: "لا توجد نتائج مطابقة.",
    latest: "آخر الإضافات",
    sections: "الأقسام",
    heroTitle: "RONI TECH X | مركز التقنية والصيانة",
    heroDesc:
      "منصة خفيفة واحترافية تجمع أدوات وشروحات الهواتف والتلفزيونات والويندوز، مع روابط مصادر رسمية وأوامر جاهزة للنسخ.",
    phoneText: "Custom ROM، TWRP، ADB & Fastboot، وتعريفات أندرويد.",
    tvText: "تطبيقات وأدوات Android TV وشرح إرسال شاشة الهاتف.",
    windowsText: "تخصيص، مساعدة رسمية، أدوات، أوامر تنظيف و Win + R.",
    theme: "المظهر",

    language: "اللغة",
  },
  en: {
    home: "Home",
    phone: "PHONE",
    tv: "TV",
    windows: "WINDOWS",
    files: "Files",
    qa: "Q & A",
    contact: "Contact",
    menu: "Menu",
    quickLinks: "Quick links",
    contactTitle: "Contact",
    tagline: "Tech & repair hub — guides, files and professional tools.",
    rights: "All rights reserved.",
    searchPlaceholder: "Search tools, guides, apps or Custom ROMs...",
    noResults: "No matching results.",
    latest: "Latest additions",
    sections: "Sections",
    heroTitle: "RONI TECH X | Tech & Repair Hub",
    heroDesc:
      "A fast, professional platform gathering phone, TV and Windows tools and guides, with official sources and ready-to-copy commands.",
    phoneText: "Custom ROM, TWRP, ADB & Fastboot, and Android drivers.",
    tvText: "Android TV apps and tools, plus phone screen casting guide.",
    windowsText: "Customization, official help, tools, cleanup commands and Win + R.",
    theme: "Theme",

    language: "Language",
  },
  tr: {
    home: "Ana Sayfa",
    phone: "PHONE",
    tv: "TV",
    windows: "WINDOWS",
    files: "Dosyalar",
    qa: "Soru & Cevap",
    contact: "İletişim",
    menu: "Menü",
    quickLinks: "Hızlı bağlantılar",
    contactTitle: "İletişim",
    tagline: "Teknoloji ve onarım merkezi — rehberler, dosyalar ve araçlar.",
    rights: "Tüm hakları saklıdır.",
    searchPlaceholder: "Araç, rehber, uygulama veya Custom ROM ara...",
    noResults: "Eşleşen sonuç yok.",
    latest: "Son eklenenler",
    sections: "Bölümler",
    theme: "Tema",
    language: "Dil",
  },
} as const;

export type TKey = keyof (typeof dict)["ar"];

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  dir: "rtl" | "ltr";
  t: (key: TKey) => string;
};

const PrefsContext = createContext<Ctx | null>(null);

export function PrefsProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const storedLang = localStorage.getItem("rtx-lang") as Lang | null;
    const storedTheme = localStorage.getItem("rtx-theme") as Theme | null;
    if (storedLang === "ar" || storedLang === "en" || storedLang === "tr") {
      setLangState(storedLang);
    }
    if (storedTheme === "light" || storedTheme === "dark") setThemeState(storedTheme);
  }, []);

  const dir: "rtl" | "ltr" = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = dir;
    root.classList.toggle("dark", theme === "dark");
  }, [lang, dir, theme]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("rtx-lang", l);
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    localStorage.setItem("rtx-theme", t);
  }, []);

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, theme, setTheme, dir, t: (k: TKey) => dict[lang][k] }),
    [lang, setLang, theme, setTheme, dir],
  );

  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>;
}

export function usePrefs() {
  const ctx = useContext(PrefsContext);
  if (!ctx) throw new Error("usePrefs must be used inside PrefsProvider");
  return ctx;
}
