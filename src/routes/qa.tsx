import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export const Route = createFileRoute("/qa")({
  head: () => ({
    meta: [
      { title: "أسئلة وأجوبة تقنية | RONI TECH X" },
      {
        name: "description",
        content:
          "إجابات على أكثر أسئلة صيانة الهواتف شيوعاً: التعريفات، وضع الفاست بوت، الفلاش، وأعطال الشحن.",
      },
      { property: "og:title", content: "أسئلة وأجوبة تقنية | RONI TECH X" },
      {
        property: "og:description",
        content: "حلول سريعة لأكثر المشاكل التقنية تكراراً في صيانة الهواتف.",
      },
    ],
  }),
  component: QaPage,
});

const faqs = [
  {
    q: "الكمبيوتر لا يتعرف على الهاتف، ما الحل؟",
    a: "ثبّت تعريف USB الخاص بالشركة (Samsung أو Xiaomi)، جرّب كيبل أصلي ومنفذ USB 2.0، وفعّل تصحيح USB من خيارات المطوّر.",
  },
  {
    q: "كيف أدخل الهاتف إلى وضع Fastboot أو Download؟",
    a: "أطفئ الجهاز ثم اضغط زر خفض الصوت + الباور معاً لأجهزة شاومي (Fastboot)، وزر خفض الصوت + الباور + الهوم لأجهزة سامسونج (Download Mode).",
  },
  {
    q: "ما الفرق بين ADB و Fastboot؟",
    a: "ADB يعمل والنظام مُقلع ويُستخدم لإدارة الملفات والأوامر، بينما Fastboot يعمل قبل إقلاع النظام ويُستخدم لتفليش الأقسام والريكفري.",
  },
  {
    q: "الهاتف يشحن ببطء أو ينقطع الشحن، أين المشكلة؟",
    a: "افحص الكيبل والشاحن أولاً، ثم نظّف منفذ الشحن، وبعدها قِس البطارية ودائرة الشحن على البورد باستخدام مصدر تغذية (Power Supply).",
  },
  {
    q: "هل الفلاش يمسح بيانات الهاتف؟",
    a: "نعم في أغلب الحالات، خصوصاً عند استخدام الفيرموير الكامل. خذ نسخة احتياطية قبل البدء إن كان الجهاز يعمل.",
  },
  {
    q: "كيف أتأكد من سلامة الشاشة بعد الاستبدال؟",
    a: "استخدم أدوات الفحص (Phone Testing Tools) لاختبار اللمس، البكسلات، الحساسات، والسطوع قبل تركيب الغطاء الخلفي.",
  },
  {
    q: "ما هو TWRP ولماذا أحتاجه؟",
    a: "TWRP ريكفري مخصص يتيح أخذ نسخة احتياطية كاملة (Nandroid)، تركيب ملفات ZIP مثل الرومات والوحدات، ومسح الأقسام. يجب فتح البوتلودر أولاً، ويُنصح بتحميل نسخة مطابقة تماماً لموديل جهازك من الموقع الرسمي.",
  },
  {
    q: "ما هي الـ Custom ROMs وهل هي آمنة؟",
    a: "روم بديل عن نظام الشركة مثل LineageOS، يقدّم تحديثات أحدث وأداء أخف. آمنة إذا حمّلتها من المصدر الرسمي وتأكدت أنها مخصصة لموديل جهازك بالضبط، مع أخذ نسخة احتياطية قبل التركيب.",
  },
  {
    q: "هل تركيب روم مخصص يلغي الضمان؟",
    a: "غالباً نعم، لأن فتح البوتلودر يُسجَّل على الجهاز في أغلب الشركات. يمكن العودة للفيرموير الرسمي لاحقاً لكن حالة البوتلودر قد تبقى ظاهرة.",
  },
  {
    q: "من أين أحمّل الأدوات والبرامج؟",
    a: "من صفحة الملفات في الموقع، حيث كل أداة مرتبطة بمصدرها الرسمي الخارجي مباشرة بدون استضافة محلية.",
  },
];

function QaPage() {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return faqs;
    return faqs.filter(
      (f) => f.q.toLowerCase().includes(term) || f.a.toLowerCase().includes(term),
    );
  }, [q]);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-extrabold md:text-4xl">
        <span className="text-gradient">أسئلة</span> وأجوبة
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        أكثر الأسئلة تكراراً في عالم صيانة الهواتف مع إجابات مختصرة ومباشرة.
      </p>

      <div className="relative mt-6">
        <Search className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="ابحث في الأسئلة..."
          aria-label="بحث في الأسئلة"
          className="w-full rounded-xl border border-border bg-secondary py-2.5 pr-10 pl-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/60"
        />
      </div>

      {results.length === 0 ? (
        <p className="panel mt-8 p-8 text-center text-sm text-muted-foreground">
          لا توجد نتائج مطابقة لبحثك.
        </p>
      ) : (
        <Accordion type="single" collapsible className="panel mt-6 divide-y divide-border px-5">
          {results.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-0">
              <AccordionTrigger className="text-right text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );

}
