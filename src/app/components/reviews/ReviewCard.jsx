import Image from "next/image";
import { Star } from "lucide-react";

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} étoiles sur 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={15}
          className={i <= rating ? "fill-[#fbbc04] text-[#fbbc04] drop-shadow-[0_0_4px_rgba(251,188,4,0.5)]" : "text-white/15"}
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
      className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
      style={{ background: "linear-gradient(160deg, var(--card) 0%, var(--card-elevated) 100%)", border: "1px solid var(--border)" }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] scale-x-0 bg-linear-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />
      <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      <span
        aria-hidden
        className="pointer-events-none absolute right-4 top-2 select-none font-serif text-7xl leading-none opacity-10 transition-opacity duration-500 group-hover:opacity-20"
        style={{ color: "var(--primary)" }}
      >
        &rdquo;
      </span>

      <header className="relative z-10 flex items-center justify-between gap-3">
        <Stars rating={review.rating} />
        <span
          className="shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", color: "var(--foreground-subtle)" }}
        >
          {review.relativeDate}
        </span>
      </header>

      <p
        className={`relative z-10 text-sm leading-relaxed whitespace-pre-line ${clamp ? "line-clamp-5" : ""}`}
        style={{ color: "var(--foreground-subtle)" }}
      >
        {review.text}
      </p>

      <footer className="relative z-10 mt-auto flex items-center justify-between gap-3 pt-3" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="flex min-w-0 items-center gap-3">
          {review.profilePhoto ? (
            <Image
              src={review.profilePhoto}
              alt={review.author}
              width={36}
              height={36}
              className="h-9 w-9 shrink-0 rounded-full object-cover ring-1"
              style={{ "--tw-ring-color": "rgba(201,162,39,0.4)" }}
              unoptimized
            />
          ) : (
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold"
              style={{ background: "rgba(201,162,39,0.15)", color: "var(--primary)" }}
              aria-hidden
            >
              {initials || "★"}
            </div>
          )}
          <span className="truncate text-sm font-semibold text-white">{review.author}</span>
        </div>

        <div
          className="flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)" }}
        >
          <img src="/google-logo.svg" alt="" aria-hidden className="h-3 w-3" onError={(e) => { e.target.style.display = "none"; }} />
          <span className="text-[11px] font-semibold" style={{ color: "var(--foreground-subtle)" }}>Google</span>
        </div>
      </footer>
    </article>
  );
}
