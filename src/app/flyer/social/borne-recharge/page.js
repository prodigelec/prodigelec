import { Suspense } from "react";
import FlyerContent from "./FlyerContent";

export const metadata = {
  title: "Flyer Social — Borne de Recharge | PRODIGELEC",
  description: "Éditeur de flyer carré 1080×1080 pour publication Facebook & Instagram — borne de recharge véhicule électrique PRODIGELEC.",
  robots: { index: false, follow: false },
};

export default function FlyerSocialBorneRechargePage() {
  return (
    <Suspense fallback={null}>
      <FlyerContent />
    </Suspense>
  );
}
