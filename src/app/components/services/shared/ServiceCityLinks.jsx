"use client";
import Link from "next/link";
import { m } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { cities } from "@/app/data/cities";

export default function ServiceCityLinks({ theme = "electricite" }) {
  const color =
    theme === "electricite" ? "var(--accent)" :
    theme === "borne" ? "#10b981" :
    "var(--primary)";

  return (
    <m.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-8 md:mb-16"
    >
      <div className="flex items-center gap-3 mb-6">
        <MapPin size={20} style={{ color }} className="shrink-0" />
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color }}>
            Zones d&apos;intervention
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-white">
            Je me déplace près de chez vous
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {cities.map((city, i) => (
          <m.div
            key={city.slug}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
          >
            <Link
              href={`/electricien/${city.slug}`}
              className="group flex items-center justify-between gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all hover:scale-[1.02]"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                color: "var(--foreground-subtle)",
              }}
            >
              <span className="flex flex-col leading-tight">
                <span className="text-white font-semibold text-sm group-hover:text-[color:var(--color)] transition-colors" style={{ "--color": color }}>
                  {city.name}
                </span>
                <span className="text-xs" style={{ color: "var(--foreground-subtle)" }}>
                  {city.postalCode}
                </span>
              </span>
              <ArrowRight
                size={13}
                className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color }}
              />
            </Link>
          </m.div>
        ))}
      </div>
    </m.section>
  );
}
