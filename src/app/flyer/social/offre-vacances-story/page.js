import { Suspense } from "react";
import FlyerContent from "./FlyerContent";

export const metadata = {
  title: "Story — Offre Vacances | PRODIGELEC",
  description: "Story verticale 1080×1920 pour Facebook & Instagram — offre vacances PRODIGELEC.",
  robots: { index: false, follow: false },
};

export default function FlyerSocialOffreVacancesStoryPage() {
  return (
    <Suspense fallback={null}>
      <FlyerContent />
    </Suspense>
  );
}
