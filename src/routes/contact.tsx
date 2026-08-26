import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا | RONI TECH X" },
      {
        name: "description",
        content:
          "تواصل مع فريق RONI TECH X للاستفسار عن أعطال الهواتف، الملفات، أو طلب شرح تقني مخصص.",
      },
      { property: "og:title", content: "تواصل معنا | RONI TECH X" },
      {
        property: "og:description",
        content: "راسل فريق مركز التقنية والصيانة للحصول على دعم فني.",
      },
    ],
  }),
  component: ContactPage,
});

const info = [
  { icon: Mail, label: "البريد الإلكتروني", value: "info@ronitechx.com" },
  { icon: Phone, label: "الهاتف", value: "+964 000 000 0000" },
  { icon: Send, label: "تيليجرام", value: "@ronitechx" },
  { icon: MapPin, label: "الموقع", value: "مركز التقنية والصيانة" },
  { icon: Clock, label: "أوقات العمل", value: "السبت - الخميس · 10:00 - 20:00" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-extrabold md:text-4xl">
        <span className="text-gradient">تواصل</span> معنا
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        اكتب لنا تفاصيل العطل أو استفسارك وسنرد عليك في أقرب وقت.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <form
          className="panel space-y-4 p-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            toast.success("تم إرسال رسالتك بنجاح، سنتواصل معك قريباً.");
            (e.target as HTMLFormElement).reset();
          }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block space-y-2 text-sm">
              <span className="font-semibold">الاسم</span>
              <input
                required
                name="name"
                className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="اسمك الكامل"
              />
            </label>
            <label className="block space-y-2 text-sm">
              <span className="font-semibold">البريد الإلكتروني</span>
              <input
                required
                type="email"
                name="email"
                dir="ltr"
                className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="block space-y-2 text-sm">
            <span className="font-semibold">الموضوع</span>
            <input
              name="subject"
              className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              placeholder="نوع الجهاز أو العطل"
            />
          </label>
          <label className="block space-y-2 text-sm">
            <span className="font-semibold">الرسالة</span>
            <textarea
              required
              name="message"
              rows={6}
              className="w-full resize-none rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              placeholder="اشرح المشكلة بالتفصيل..."
            />
          </label>
          <button
            type="submit"
            className="glow inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            <Send className="size-4" /> إرسال الرسالة
          </button>
          {sent && (
            <p className="text-sm text-primary">شكراً لتواصلك! تم استلام رسالتك.</p>
          )}
        </form>

        <div className="panel space-y-5 p-6">
          <h2 className="text-lg font-bold">معلومات التواصل</h2>
          {info.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                <item.icon className="size-4" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-sm font-semibold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
