"use client";
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import BrandName from "@/app/components/ui/BrandName";

export default function Logo({ className = "", boxClassName = "" }) {
  return (
    <Link href="/" aria-label="PRODIGELEC - Retour à l'accueil">
      <div
        className={`flex items-center gap-3 group cursor-pointer ${className}`}
      >
        <div className={`relative w-[96px] h-[96px] overflow-hidden rounded-xl bg-linear-to-br from-[#d9d9d9] via-[#f5f5f5] to-[#9ca3af] ring-1 ring-white/30 shadow-[inset_0_2px_6px_rgba(255,255,255,0.5),inset_0_-3px_6px_rgba(0,0,0,0.25),0_8px_18px_rgba(0,0,0,0.35)] transition-colors ${boxClassName}`}>
          <Image
            src="/logo_camera.png"
            alt="PRODIGELEC Logo"
            fill
            priority
            className="object-contain object-center p-2"
          />
        </div>
        <div className="flex flex-col -gap-1 mt-3">
          <BrandName className="text-lg sm:text-xl tracking-tighter leading-tight" />
          <span className="text-xs uppercase tracking-[0.2em] text-foreground font-bold">
            Expertise Technique
          </span>
        </div>
      </div>
    </Link>
  );
}
