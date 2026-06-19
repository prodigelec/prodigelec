import { Suspense } from "react";
import FlyerContent from "./FlyerContent";

export const metadata = {
  title: "Flyer Social — Présentation | PRODIGELEC",
  description: "Visuel carré 1080×1080 de présentation PRODIGELEC pour publication Facebook & Instagram.",
  robots: { index: false, follow: false },
};

export default function FlyerSocialPresentationPage() {
  return (
    <Suspense fallback={null}>
      <FlyerContent />
    </Suspense>
  );
}
