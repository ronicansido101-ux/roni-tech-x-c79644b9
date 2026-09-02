import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Bot, Send, Trash2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { roniAiChat } from "@/lib/ai.functions";
import { usePrefs } from "@/lib/prefs";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/roni-ai")({
  head: () => ({
    meta: [
      { title: "RONI AI — مساعد الدعم التقني | RONI TECH X" },
      {
        name: "description",
        content:
          "RONI AI مساعد دعم تقني ذكي لأسئلة الهواتف و Custom ROM و TWRP و Android TV و Windows، بالعربية والإنجليزية والتركية.",
      },
      { property: "og:title", content: "RONI AI — مساعد الدعم التقني" },
      {
        property: "og:description",
        content: "اسأل RONI AI عن الهواتف والتلفزيونات والويندوز واحصل على خطوات عملية.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: RoniAi,
});

type Msg = { role: "user" | "assistant"; content: string };

const LS_KEY = "rtx-ai-chat";

const suggestions = [
  "كيف أفعّل وضع المطور و USB Debugging؟",
  "ما الفرق بين TWRP والريكفري الرسمي؟",
  "أمر فحص ملفات النظام في Windows؟",
  "كيف أرسل شاشة الهاتف إلى Android TV؟",
];

function RoniAi() {
  const { lang } = usePrefs();
  const { user } = useAuth();
  const send = useServerFn(roniAiChat);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const convRef = useRef<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      try {
        setMessages(JSON.parse(raw) as Msg[]);
      } catch {
        /* ignore */
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(messages.slice(-40)));
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function persist(role: Msg["role"], content: string) {
    if (!user) return;
    try {
      if (!convRef.current) {
        const { data } = await supabase
          .from("ai_conversations")
          .insert({ user_id: user.id, title: content.slice(0, 60) })
          .select("id")
          .single();
        convRef.current = data?.id ?? null;
      }
      if (convRef.current) {
        await supabase.from("ai_messages").insert({
          conversation_id: convRef.current,
          user_id: user.id,
          role,
          content,
        });
      }
    } catch {
      /* saving is best-effort */
    }
  }

  async function ask(text: string) {
    const q = text.trim();
    if (!q || busy) return;
    const next = [...messages, { role: "user" as const, content: q }];
    setMessages(next);
    setInput("");
    setBusy(true);
    void persist("user", q);
    try {
      const res = await send({ data: { messages: next.slice(-12), lang } });
      if (res.error === "rate_limit") toast.error("الطلبات كثيرة — أعد المحاولة بعد قليل.");
      else if (res.error === "credits") toast.error("رصيد الذكاء الاصطناعي غير كافٍ.");
      else if (res.error) toast.error("تعذّر الحصول على رد.");
      else if (res.reply) {
        setMessages((m) => [...m, { role: "assistant", content: res.reply as string }]);
        void persist("assistant", res.reply);
      }
    } catch {
      toast.error("خطأ في الاتصال بالمساعد.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-14">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="flex items-center gap-2 text-3xl font-extrabold md:text-4xl">
            <Bot className="size-8 text-primary" />
            <span className="text-gradient">RONI AI</span>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            مساعد الدعم التقني الرسمي لـ RONI TECH X — هواتف، Android TV، وWindows.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {messages.length > 0 && (
            <button
              type="button"
              onClick={() => {
                setMessages([]);
                convRef.current = null;
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-3 py-2 text-xs font-bold text-muted-foreground hover:text-foreground"
            >
              <Trash2 className="size-4" /> محادثة جديدة
            </button>
          )}
          {!user && (
            <Link
              to="/auth"
              search={{ redirect: "/roni-ai" }}
              className="rounded-xl bg-primary px-3 py-2 text-xs font-bold text-primary-foreground"
            >
              سجّل الدخول لحفظ المحادثات
            </Link>
          )}
        </div>
      </div>

      <div className="panel mt-8 flex min-h-[420px] flex-col p-4 md:p-6">
        {messages.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <Sparkles className="size-8 text-primary" />
            <p className="text-sm text-muted-foreground">اسأل عن أي مشكلة تقنية وابدأ من هنا:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => ask(s)}
                  className="rounded-xl border border-border bg-secondary px-3 py-2 text-xs transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <ul className="flex-1 space-y-4">
            {messages.map((m, i) => (
              <li
                key={i}
                className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "ms-auto bg-primary text-primary-foreground"
                    : "me-auto border border-border bg-secondary text-foreground"
                }`}
              >
                {m.content}
              </li>
            ))}
            {busy && (
              <li className="me-auto rounded-2xl border border-border bg-secondary px-4 py-3 text-sm text-muted-foreground">
                RONI AI يكتب…
              </li>
            )}
            <div ref={endRef} />
          </ul>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            void ask(input);
          }}
          className="mt-6 flex items-center gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="اكتب سؤالك التقني..."
            aria-label="سؤالك"
            className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm outline-none focus:border-primary/60"
          />
          <button
            type="submit"
            disabled={busy}
            aria-label="إرسال"
            className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground disabled:opacity-60"
          >
            <Send className="size-4" />
          </button>
        </form>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        RONI AI يقدّم إرشادات عامة من مصادر رسمية فقط، ولا يدعم أدوات التفعيل غير الرسمية أو تجاوز
        حماية الأجهزة.
      </p>
    </div>
  );
}
