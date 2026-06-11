import { Suspense } from "react";
import FlyerContent from "./FlyerContent";

export const metadata = {
  title: "Affiche Borne de Recharge VE - PRODIGELEC",
  description: "Générateur d'affiche promotionnelle pour les solutions de recharge VE (prise Green'Up et borne connectée) de PRODIGELEC.",
  robots: { index: false, follow: false },
};

export default function BorneRechargePage() {
  return (
    <Suspense fallback={null}>
      <FlyerContent />
    </Suspense>
  );
}
