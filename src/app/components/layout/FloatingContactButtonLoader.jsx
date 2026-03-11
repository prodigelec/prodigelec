"use client";
import dynamic from "next/dynamic";

const FloatingContactButton = dynamic(
  () => import("@/app/components/layout/FloatingContactButton"),
  { ssr: false, loading: () => null }
);

export default function FloatingContactButtonLoader() {
  return <FloatingContactButton />;
}
