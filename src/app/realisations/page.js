import RealisationsContent from "./RealisationsContent";

export const metadata = {
  title: "Réalisations — Chantiers électricité & sécurité | PRODIGELEC",
  description: "Découvrez les réalisations de PRODIGELEC : installation électrique, sécurité électronique et automatismes en Eure-et-Loir, Eure et Yvelines.",
  alternates: { canonical: "https://www.prodigelec.fr/realisations" },
  openGraph: {
    title: "Réalisations PRODIGELEC — Électricité & Sécurité",
    description: "Photos de chantiers réels : tableaux électriques, sonnettes, four, prises — interventions en 27, 28 et 78.",
    url: "https://www.prodigelec.fr/realisations",
  },
};

export default function RealisationsPage() {
  return <RealisationsContent />;
}
