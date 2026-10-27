import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterForm({
  dark = false,
  compact = false,
}: {
  dark?: boolean;
  compact?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm ${
          dark ? "bg-(--color-canvas)/10 text-(--color-canvas)" : "bg-(--color-ink)/5 text-(--color-ink)"
        }`}
      >
        <Check size={16} />
        <span>You're on the list — check your inbox.</span>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`flex gap-2 ${compact ? "flex-col sm:flex-row" : "flex-col sm:flex-row"}`}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        className={`w-full min-w-0 rounded-full border px-5 py-3 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-(--color-accent) ${
          dark
            ? "border-(--color-canvas)/20 bg-(--color-canvas)/5 text-(--color-canvas) placeholder:text-(--color-canvas)/40"
            : "border-(--color-line) bg-(--color-canvas) text-(--color-ink) placeholder:text-(--color-ink-soft)/50"
        }`}
      />
      <button
        type="submit"
        data-cursor="grow"
        className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 ${
          dark
            ? "bg-(--color-canvas) text-(--color-ink) hover:bg-(--color-gold)"
            : "bg-(--color-ink) text-(--color-canvas) hover:bg-(--color-accent)"
        }`}
      >
        Subscribe <ArrowRight size={15} />
      </button>
    </form>
  );
}
