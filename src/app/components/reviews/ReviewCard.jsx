import { Star } from "lucide-react";

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} étoiles sur 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          className={i <= rating ? "fill-[#fbbc04] text-[#fbbc04]" : "text-white/20"}
        />
      ))}
    </div>
  );
}

export default function ReviewCard({ review, clamp = false }) {
  const initials = review.author
    .split(" ")
    .map((s) => s[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <article
      className="rounded-2xl p-5 flex flex-col gap-3 h-full"
      style={{ background: "var(--card)", border: "1px solid var(--border)" }}
    >
      <header className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
          style={{ background: "rgba(201,162,39,0.15)", color: "var(--primary)" }}
          aria-hidden
        >
          {initials || "★"}
        </div>
        <div className="flex flex-col leading-tight min-w-0">
          <span className="text-sm font-semibold text-white truncate">{review.author}</span>
          <div className="flex items-center gap-2 mt-0.5">
            <Stars rating={review.rating} />
            <span className="text-xs" style={{ color: "var(--foreground-subtle)" }}>
              {review.relativeDate}
            </span>
          </div>
        </div>
      </header>

      <p
        className={`text-sm leading-relaxed whitespace-pre-line ${clamp ? "line-clamp-6" : ""}`}
        style={{ color: "var(--foreground-subtle)" }}
      >
        {review.text}
      </p>

      <footer className="mt-auto pt-2 text-[10px] uppercase tracking-widest" style={{ color: "var(--foreground-subtle)" }}>
        Avis Google
      </footer>
    </article>
  );
}
