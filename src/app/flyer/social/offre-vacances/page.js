import { Suspense } from "react";
import FlyerContent from "./FlyerContent";

export const metadata = {
  title: "Flyer Social — Offre Vacances | PRODIGELEC",
  description: "Éditeur de flyer carré 1080×1080 pour publication Facebook & Instagram — offre vacances PRODIGELEC.",
  robots: { index: false, follow: false },
};

export default function FlyerSocialOffreVacancesPage() {
  return (
    <Suspense fallback={null}>
      <FlyerContent />
    </Suspense>
  );
}
