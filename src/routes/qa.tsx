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
];

function QaPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-extrabold md:text-4xl">
        <span className="text-gradient">أسئلة</span> وأجوبة
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        أكثر الأسئلة تكراراً في عالم صيانة الهواتف مع إجابات مختصرة ومباشرة.
      </p>

      <Accordion type="single" collapsible className="panel mt-8 divide-y divide-border px-5">
        {faqs.map((f, i) => (
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
    </div>
  );
}
