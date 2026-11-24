import { Suspense } from "react";
import FlyerContent from "./FlyerContent";

export const metadata = {
  title: "Affiche Offre Vacances - PRODIGELEC",
  description: "Générateur et visualiseur d'affiche promotionnelle pour l'offre vacances de PRODIGELEC.",
  robots: { index: false, follow: false },
};

export default function FlyerPage() {
  return (
    <Suspense fallback={null}>
      <FlyerContent />
    </Suspense>
  );
}
