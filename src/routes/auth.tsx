import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { LogIn, UserPlus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { useAuth } from "@/hooks/use-auth";

function safePath(value: unknown): string {
  return typeof value === "string" && value.startsWith("/") && !value.startsWith("//")
    ? value
    : "/roni-ai";
}

export const Route = createFileRoute("/auth")({
  validateSearch: (search: Record<string, unknown>) => ({
    redirect: safePath(search["redirect"]),
  }),
  head: () => ({
    meta: [
      { title: "تسجيل الدخول | RONI TECH X" },
      {
        name: "description",
        content:
          "سجّل الدخول إلى RONI TECH X لحفظ محادثات RONI AI ونشر ملاحظاتك واقتراحاتك في المجتمع.",
      },
      { property: "og:title", content: "تسجيل الدخول | RONI TECH X" },
      { property: "og:description", content: "حساب RONI TECH X: RONI AI والمجتمع." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const [mode, setMode] = useState<"in" | "up">("in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { redirect } = Route.useSearch();

  // Already signed in (or just signed in): never ask again.
  useEffect(() => {
    if (!loading && user) navigate({ to: redirect, replace: true });
  }, [user, loading, redirect, navigate]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "in") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("تم تسجيل الدخول");
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/roni-ai` },
        });
        if (error) throw error;
        toast.success("تم إنشاء الحساب");
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "تعذّر إتمام العملية");
    } finally {
      setBusy(false);
    }
  }

  async function google() {
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      toast.error("تعذّر تسجيل الدخول عبر Google");
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/roni-ai" });
  }

  return (
    <div className="mx-auto w-full max-w-md px-4 py-16">
      <h1 className="text-2xl font-extrabold md:text-3xl">
        <span className="text-gradient">تسجيل الدخول</span> إلى RONI TECH X
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        الحساب يحفظ محادثات RONI AI ويتيح نشر الملاحظات في المجتمع.
      </p>

      <div className="panel mt-8 p-6">
        <div className="mb-5 flex rounded-xl border border-border bg-secondary p-1">
          {(["in", "up"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={`flex-1 rounded-lg px-3 py-2 text-sm font-bold transition-colors ${
                mode === m ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              {m === "in" ? "دخول" : "حساب جديد"}
            </button>
          ))}
        </div>

        <form onSubmit={submit} className="space-y-3">
          <input
            type="email"
            required
            dir="ltr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            aria-label="البريد الإلكتروني"
            className="w-full rounded-xl border border-border bg-secondary px-3 py-2.5 text-sm outline-none focus:border-primary/60"
          />
          <input
            type="password"
            required
            minLength={6}
            dir="ltr"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            aria-label="كلمة المرور"
            className="w-full rounded-xl border border-border bg-secondary px-3 py-2.5 text-sm outline-none focus:border-primary/60"
          />
          <button
            type="submit"
            disabled={busy}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {mode === "in" ? <LogIn className="size-4" /> : <UserPlus className="size-4" />}
            {mode === "in" ? "دخول" : "إنشاء حساب"}
          </button>
        </form>

        <div className="my-4 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="h-px flex-1 bg-border" /> أو <span className="h-px flex-1 bg-border" />
        </div>

        <button
          type="button"
          onClick={google}
          className="w-full rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm font-bold transition-colors hover:bg-accent"
        >
          المتابعة عبر Google
        </button>
      </div>
    </div>
  );
}
