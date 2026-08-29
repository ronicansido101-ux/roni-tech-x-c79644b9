import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyButton({ value, label }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        void navigator.clipboard.writeText(value).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        });
      }}
      aria-label={`نسخ ${label ?? value}`}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-2.5 py-1.5 text-xs font-bold text-primary transition-colors hover:bg-primary/20"
    >
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      {copied ? "تم النسخ" : "نسخ"}
    </button>
  );
}

export function CommandRow({ cmd, desc }: { cmd: string; desc: string }) {
  return (
    <li className="flex flex-col gap-2 rounded-xl border border-border bg-secondary/60 p-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <code dir="ltr" className="block text-sm font-bold text-foreground">
          {cmd}
        </code>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{desc}</p>
      </div>
      <CopyButton value={cmd} label={cmd} />
    </li>
  );
}
