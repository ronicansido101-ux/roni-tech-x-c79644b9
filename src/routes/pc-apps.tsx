import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Laptop, Cpu } from "lucide-react";

export const Route = createFileRoute("/pc-apps")({
  head: () => ({
    meta: [
      { title: "برامج أساسية بعد شراء لابتوب جديد | RONI TECH X" },
      {
        name: "description",
        content:
          "قائمة برامج الكمبيوتر الأساسية بعد شراء لابتوب جديد: VPN، ألعاب، مشغلات وسائط، تطبيقات ذكاء اصطناعي، موسيقى، ومحاكيات أندرويد مع متطلبات التشغيل وروابط رسمية.",
      },
      { property: "og:title", content: "PC Apps | RONI TECH X" },
      {
        property: "og:description",
        content: "أفضل البرامج الأساسية للابتوب الجديد مع المتطلبات والروابط الرسمية.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PcAppsPage,
});

type App = { name: string; desc: string; req: string; url: string };
type Category = { title: string; apps: App[] };

const categories: Category[] = [
  {
    title: "VPN",
    apps: [
      {
        name: "Proton VPN",
        desc: "شبكة VPN موثوقة مع خطة مجانية غير محدودة الاستهلاك وتشفير قوي.",
        req: "Windows 10/11 (64-bit) • 2 GB RAM • اتصال إنترنت",
        url: "https://protonvpn.com/download-windows",
      },
      {
        name: "Cloudflare WARP (1.1.1.1)",
        desc: "خدمة مجانية لتسريع وتأمين الاتصال عبر شبكة Cloudflare.",
        req: "Windows 10/11 (64-bit) • 1 GB RAM",
        url: "https://one.one.one.one/",
      },
      {
        name: "Windscribe",
        desc: "VPN بواجهة بسيطة مع 10GB مجانية شهرياً وأدوات حجب إعلانات.",
        req: "Windows 8.1/10/11 • 2 GB RAM",
        url: "https://windscribe.com/download",
      },
    ],
  },
  {
    title: "Gaming",
    apps: [
      {
        name: "Steam",
        desc: "أكبر متجر ألعاب للكمبيوتر مع مكتبة وتحديثات تلقائية ولعب جماعي.",
        req: "Windows 10/11 • 2 GB RAM • كرت شاشة يدعم DirectX 11 • مساحة حسب الألعاب",
        url: "https://store.steampowered.com/about/",
      },
      {
        name: "Epic Games Launcher",
        desc: "متجر ألعاب يقدّم لعبة مجانية أسبوعياً ومحرك Unreal Engine.",
        req: "Windows 10/11 (64-bit) • 4 GB RAM",
        url: "https://store.epicgames.com/en-US/download",
      },
      {
        name: "Discord",
        desc: "محادثة صوتية ونصية أثناء اللعب مع مشاركة الشاشة.",
        req: "Windows 10/11 • 2 GB RAM • مايك للاتصال الصوتي",
        url: "https://discord.com/download",
      },
      {
        name: "MSI Afterburner",
        desc: "مراقبة أداء كرت الشاشة والحرارة وعرض FPS أثناء اللعب.",
        req: "Windows 10/11 • كرت شاشة NVIDIA أو AMD",
        url: "https://www.msi.com/Landing/afterburner/graphics-cards",
      },
    ],
  },
  {
    title: "Media Player",
    apps: [
      {
        name: "VLC Media Player",
        desc: "مشغل وسائط مفتوح المصدر يشغّل تقريباً كل صيغ الفيديو والصوت بدون كودكات.",
        req: "Windows 7/10/11 • 1 GB RAM • 200 MB مساحة",
        url: "https://www.videolan.org/vlc/",
      },
      {
        name: "MPC-HC (clsid2)",
        desc: "مشغل خفيف جداً مناسب للأجهزة الضعيفة مع دعم تسريع الهاردوير.",
        req: "Windows 7/10/11 • 512 MB RAM",
        url: "https://github.com/clsid2/mpc-hc/releases",
      },
      {
        name: "PotPlayer",
        desc: "مشغل غني بالإعدادات مع دعم الترجمة و3D وتسريع GPU.",
        req: "Windows 10/11 • 1 GB RAM",
        url: "https://potplayer.daum.net/",
      },
    ],
  },
  {
    title: "AI Apps",
    apps: [
      {
        name: "ChatGPT for Windows",
        desc: "تطبيق رسمي للمحادثة مع الذكاء الاصطناعي وتحليل الملفات والصور.",
        req: "Windows 10 (v1809) أو أحدث • 4 GB RAM • إنترنت",
        url: "https://openai.com/chatgpt/download/",
      },
      {
        name: "Microsoft Copilot",
        desc: "مساعد Microsoft الذكي المدمج مع Windows وتطبيقات Office.",
        req: "Windows 10/11 • حساب Microsoft • إنترنت",
        url: "https://www.microsoft.com/en-us/microsoft-copilot",
      },
      {
        name: "LM Studio",
        desc: "تشغيل نماذج ذكاء اصطناعي محلياً بدون إنترنت على جهازك.",
        req: "Windows 10/11 (64-bit) • 16 GB RAM مستحسن • كرت شاشة بذاكرة 6 GB+",
        url: "https://lmstudio.ai/",
      },
      {
        name: "Ollama",
        desc: "أداة لتشغيل النماذج اللغوية محلياً عبر أوامر بسيطة.",
        req: "Windows 10/11 (64-bit) • 8 GB RAM كحد أدنى",
        url: "https://ollama.com/download",
      },
    ],
  },
  {
    title: "Music Apps",
    apps: [
      {
        name: "Spotify",
        desc: "أشهر خدمة بث موسيقي مع قوائم تشغيل وبودكاست.",
        req: "Windows 10/11 • 2 GB RAM • إنترنت",
        url: "https://www.spotify.com/download/windows/",
      },
      {
        name: "foobar2000",
        desc: "مشغل موسيقى خفيف واحترافي مع دعم صيغ عالية الجودة وتنظيم المكتبة.",
        req: "Windows 7/10/11 • 512 MB RAM",
        url: "https://www.foobar2000.org/download",
      },
      {
        name: "Audacity",
        desc: "تسجيل وتحرير الصوت مجاناً مع مؤثرات وتنظيف الضوضاء.",
        req: "Windows 10/11 • 4 GB RAM مستحسن",
        url: "https://www.audacityteam.org/download/windows/",
      },
    ],
  },
  {
    title: "Android Emulator",
    apps: [
      {
        name: "BlueStacks",
        desc: "أشهر محاكي أندرويد لتشغيل التطبيقات والألعاب على الكمبيوتر.",
        req: "Windows 10/11 • 8 GB RAM مستحسن • تفعيل Virtualization (VT-x/AMD-V) • 10 GB مساحة",
        url: "https://www.bluestacks.com/download.html",
      },
      {
        name: "LDPlayer",
        desc: "محاكي خفيف موجّه للألعاب مع دعم لوحة المفاتيح وتعدد النوافذ.",
        req: "Windows 10/11 • 8 GB RAM • Virtualization مفعّل • 8 GB مساحة",
        url: "https://www.ldplayer.net/",
      },
      {
        name: "Android Studio Emulator",
        desc: "محاكي أندرويد الرسمي من Google للمطورين والاختبار.",
        req: "Windows 10/11 (64-bit) • 8 GB RAM • 16 GB مساحة • Virtualization مفعّل",
        url: "https://developer.android.com/studio",
      },
      {
        name: "Windows Subsystem for Android (WSA)",
        desc: "تشغيل تطبيقات أندرويد داخل Windows 11 مباشرة (حسب توفّر الدعم في منطقتك).",
        req: "Windows 11 • 8 GB RAM • SSD • Virtual Machine Platform مفعّل",
        url: "https://learn.microsoft.com/en-us/windows/android/wsa/",
      },
    ],
  },
];

function PcAppsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12">
      <span className="badge">
        <Laptop className="size-3.5" /> PC APPS
      </span>
      <h1 className="mt-4 text-3xl font-extrabold md:text-4xl">
        برامج أساسية بعد شراء لابتوب جديد
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        قائمة مختارة من البرامج المهمة لأي جهاز جديد، مقسّمة حسب الاستخدام. كل برنامج مع وصف
        مختصر، متطلبات التشغيل، ورابط التحميل من المصدر الرسمي فقط.
      </p>

      {categories.map((cat) => (
        <section key={cat.title} className="mt-10">
          <h2 className="text-xl font-bold" dir="ltr">
            {cat.title}
          </h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cat.apps.map((a) => (
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
                    <ExternalLink className="size-4 shrink-0 text-primary opacity-70 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                  <p className="mt-auto flex items-start gap-2 pt-2 text-xs leading-relaxed text-muted-foreground">
                    <Cpu className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    <span dir="auto">{a.req}</span>
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
