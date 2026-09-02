import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { MessageSquare, Send, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "المجتمع والملاحظات | RONI TECH X" },
      {
        name: "description",
        content:
          "شارك ملاحظاتك واقتراحاتك وبلاغات الأخطاء مع مجتمع RONI TECH X، وتابع ما يقترحه بقية المستخدمين.",
      },
      { property: "og:title", content: "المجتمع والملاحظات | RONI TECH X" },
      {
        property: "og:description",
        content: "اقتراحات، بلاغات أخطاء وتجارب المستخدمين في مكان واحد.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Community,
});

type Row = {
  id: string;
  user_id: string;
  author_name: string;
  kind: string;
  title: string;
  body: string;
  created_at: string;
};

const kinds = [
  { id: "suggestion", label: "اقتراح" },
  { id: "bug", label: "بلاغ خطأ" },
  { id: "question", label: "سؤال" },
  { id: "feedback", label: "رأي" },
];

function Community() {
  const { user } = useAuth();
  const [rows, setRows] = useState<Row[]>([]);
  const [kind, setKind] = useState("suggestion");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    const { data, error } = await supabase
      .from("feedback")
      .select("id,user_id,author_name,kind,title,body,created_at")
      .order("created_at", { ascending: false })
      .limit(50);
    if (error) return;
    setRows((data ?? []) as Row[]);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;
    setBusy(true);
    const { error } = await supabase.from("feedback").insert({
      user_id: user.id,
      author_name: user.email?.split("@")[0] ?? "User",
      kind,
      title: title.trim(),
      body: body.trim(),
    });
    setBusy(false);
    if (error) {
      toast.error("تعذّر إرسال الملاحظة");
      return;
    }
    toast.success("تم النشر، شكراً لمشاركتك");
    setTitle("");
    setBody("");
    void load();
  }

  async function remove(id: string) {
    const { error } = await supabase.from("feedback").delete().eq("id", id);
    if (error) {
      toast.error("تعذّر الحذف");
      return;
    }
    setRows((r) => r.filter((x) => x.id !== id));
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-14">
      <h1 className="flex items-center gap-2 text-3xl font-extrabold md:text-4xl">
        <MessageSquare className="size-7 text-primary" />
        <span className="text-gradient">المجتمع</span> والملاحظات
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        اقترح ميزة، بلّغ عن خطأ، أو شارك تجربتك. الملاحظات تساعد في تطوير RONI TECH X.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[380px_1fr]">
        <div className="panel h-fit p-5">
          {user ? (
            <form onSubmit={submit} className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {kinds.map((k) => (
                  <button
                    key={k.id}
                    type="button"
                    onClick={() => setKind(k.id)}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-bold transition-colors ${
                      kind === k.id
                        ? "border-primary/50 bg-primary/15 text-primary"
                        : "border-border bg-secondary text-muted-foreground"
                    }`}
                  >
                    {k.label}
                  </button>
                ))}
              </div>
              <input
                required
                maxLength={90}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="العنوان"
                aria-label="العنوان"
                className="w-full rounded-xl border border-border bg-secondary px-3 py-2.5 text-sm outline-none focus:border-primary/60"
              />
              <textarea
                required
                rows={5}
                maxLength={1200}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="التفاصيل..."
                aria-label="التفاصيل"
                className="w-full rounded-xl border border-border bg-secondary px-3 py-2.5 text-sm outline-none focus:border-primary/60"
              />
              <button
                type="submit"
                disabled={busy}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground disabled:opacity-60"
              >
                <Send className="size-4" /> نشر
              </button>
            </form>
          ) : (
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>سجّل الدخول لتتمكن من نشر ملاحظة أو اقتراح.</p>
              <Link
                to="/auth"
                search={{ redirect: "/community" }}
                className="inline-flex rounded-xl bg-primary px-4 py-2 text-sm font-bold text-primary-foreground"
              >
                تسجيل الدخول
              </Link>
            </div>
          )}
        </div>

        <div>
          {rows.length === 0 ? (
            <p className="panel p-8 text-center text-sm text-muted-foreground">
              لا توجد ملاحظات بعد — كن أول من يشارك.
            </p>
          ) : (
            <ul className="space-y-4">
              {rows.map((r) => (
                <li key={r.id} className="panel p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="rounded-md bg-primary/12 px-2 py-0.5 text-[11px] font-bold text-primary">
                        {kinds.find((k) => k.id === r.kind)?.label ?? r.kind}
                      </span>
                      <h2 className="mt-2 font-bold">{r.title}</h2>
                    </div>
                    {user?.id === r.user_id && (
                      <button
                        type="button"
                        aria-label="حذف"
                        onClick={() => remove(r.id)}
                        className="text-muted-foreground transition-colors hover:text-destructive"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    )}
                  </div>
                  <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
                    {r.body}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    {r.author_name} — {new Date(r.created_at).toLocaleDateString()}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
