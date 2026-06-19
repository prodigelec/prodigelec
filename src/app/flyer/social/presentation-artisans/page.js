import { Suspense } from "react";
import FlyerContent from "./FlyerContent";

export const metadata = {
  title: "Flyer Social — Présentation Artisans 28 | PRODIGELEC",
  description: "Visuel carré 1080×1080 avec bandeau SIRET + ville pour publication dans le groupe Facebook Artisans d'Eure-et-Loir 28.",
  robots: { index: false, follow: false },
};

export default function FlyerSocialPresentationArtisansPage() {
  return (
    <Suspense fallback={null}>
      <FlyerContent />
    </Suspense>
  );
}
