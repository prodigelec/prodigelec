import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { accentClasses } from "./data";

export default function ServiceCard({ service }) {
  const { title, icon: Icon, iconClassName, accent, image, imageAlt, description, bullets, href, cta, ariaLabel } = service;
  const c = accentClasses[accent];

  return (
    <div
      className={`rounded-3xl border border-white/10 ring-1 ring-white/10 bg-linear-to-b from-white/10 via-white/5 to-black/30 ${c.border} transition-all duration-300 group overflow-hidden relative flex flex-col h-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_12px_30px_rgba(0,0,0,0.45)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.35),0_16px_40px_rgba(0,0,0,0.55)]`}
    >
      <div className="relative w-full h-40 sm:h-44 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/30 to-transparent" />
      </div>

      <div className="p-6 md:p-8 flex flex-col grow relative">
        <div className={`absolute inset-0 bg-linear-to-br ${c.gradient} via-transparent to-accent/10 opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${c.iconBg} ring-1 ring-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.35)] flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-all mx-auto md:mx-0 relative z-10`}
        >
          <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${iconClassName}`} />
        </div>

        <h3 className={`text-lg md:text-2xl font-bold mb-3 sm:mb-4 text-center md:text-left text-foreground ${c.titleHover} transition-all relative z-10`}>
          {title}
        </h3>

        <p className="text-gray-100 leading-relaxed text-sm md:text-base text-center md:text-left relative z-10 group-hover:text-white mb-5 grow">
          {description}
        </p>

        <div className="relative z-10 mb-6">
          <ul className="grid grid-cols-1 gap-2 text-xs md:text-sm text-gray-100">
            {bullets.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full ${c.bullet}`} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 text-center md:text-left mt-auto">
          <Link
            href={href}
            aria-label={ariaLabel}
            className="inline-flex items-center text-xs md:text-sm font-semibold text-primary hover:text-primary-light transition-colors group/link"
          >
            {cta}
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
