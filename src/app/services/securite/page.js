import SecuriteContent from "./SecuriteContent";
import ServicePageJsonLd from "@/app/components/ServicePageJsonLd";

export const metadata = {
  title: "Sécurité Électronique 27, 28 & 78 - Digicode, Alarme, Vidéosurveillance | PRODIGELEC",
  description: "Digicode, vidéophonie, alarme et vidéosurveillance en Eure (27), Eure-et-Loir (28) et Yvelines (78). Installation sur mesure. Devis gratuit.",
  keywords: [
    "Digicode Broué", "Digicode Dreux", "Digicode Chartres", "Digicode Évreux",
    "Digicode Anet", "Digicode Nonancourt", "Digicode Nogent-le-Roi", "Digicode Houdan",
    "Alarme Broué", "Alarme Dreux", "Alarme Chartres", "Alarme Évreux",
    "Alarme Anet", "Alarme Nonancourt", "Alarme Nogent-le-Roi", "Alarme Houdan",
    "Alarme maison Eure-et-Loir", "Alarme maison Eure", "Alarme maison Yvelines",
    "Vidéosurveillance Broué", "Vidéosurveillance Dreux", "Vidéosurveillance Chartres", "Vidéosurveillance Évreux",
    "Vidéosurveillance Anet", "Vidéosurveillance Nonancourt", "Vidéosurveillance Nogent-le-Roi", "Vidéosurveillance Houdan",
    "Caméra surveillance Dreux", "Caméra surveillance 28", "Caméra surveillance 78",
    "Visiophone Broué", "Visiophone Dreux", "Visiophone Chartres", "Visiophone Évreux",
    "Visiophone Anet", "Visiophone Nonancourt", "Visiophone Nogent-le-Roi", "Visiophone Houdan",
    "Vidéophonie Broué", "Vidéophonie Dreux", "Vidéophonie Chartres", "Vidéophonie Évreux",
    "Vidéophonie Anet", "Vidéophonie Nonancourt", "Vidéophonie Nogent-le-Roi", "Vidéophonie Houdan",
    "Interphonie Broué", "Interphonie Dreux", "Interphonie Chartres", "Interphonie Évreux",
    "Contrôle accès badge Dreux", "Contrôle accès badge Chartres", "Contrôle accès badge Houdan",
    "Sécurité électronique 27", "Sécurité électronique 28", "Sécurité électronique 78",
    "Dépannage digicode Dreux", "Dépannage visiophone Chartres", "Dépannage digicode Houdan"
  ],
  alternates: {
    canonical: "https://www.prodigelec.fr/services/securite",
  },
  openGraph: {
    title: "Sécurité Électronique 27, 28 & 78 - PRODIGELEC",
    description: "Digicode, vidéophonie, alarme et vidéosurveillance en Eure (27), Eure-et-Loir (28) et Yvelines (78). Installation sur mesure. Devis gratuit.",
    url: "https://www.prodigelec.fr/services/securite",
    images: [{ url: "https://www.prodigelec.fr/img_carousel_securite_page/videophonie_digicode.jpg", width: 1200, height: 630, alt: "Vidéophonie et digicode PRODIGELEC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sécurité Électronique 27, 28 & 78 - PRODIGELEC",
    description: "Digicode, vidéophonie, alarme et vidéosurveillance. Installation sur mesure. Devis gratuit.",
    images: ["https://www.prodigelec.fr/img_carousel_securite_page/videophonie_digicode.jpg"],
  },
};

const faqs = [
  {
    question: "Qu'est-ce que le contrôle d'accès par digicode ?",
    answer: "Un digicode permet de sécuriser l'entrée de votre domicile ou local professionnel par code, badge ou carte. Il remplace la clé mécanique tout en offrant plus de flexibilité : codes temporaires, accès à distance, historique des entrées. Je me charge de l'installation et de la configuration complète."
  },
  {
    question: "La vidéophonie fonctionne-t-elle sur smartphone ?",
    answer: "Oui, les systèmes que j'installe sont compatibles avec votre smartphone. Vous pouvez voir et parler à vos visiteurs depuis n'importe où, et déverrouiller à distance si vous le souhaitez."
  },
  {
    question: "Proposez-vous l'installation d'alarmes ?",
    answer: "Oui, j'installe des systèmes d'alarme pour particuliers et professionnels : centrale d'alarme, détecteurs de mouvement, alertes smartphone. Je vous conseille sur la solution adaptée à votre configuration."
  },
  {
    question: "Proposez-vous la vidéosurveillance ?",
    answer: "Oui, j'installe des caméras HD pour surveiller votre propriété à distance, en intérieur comme en extérieur. Les systèmes sont accessibles via smartphone avec enregistrement continu et vision nocturne."
  },
  {
    question: "Intervenez-vous en urgence ?",
    answer: "Oui, j'interviens en dépannage sur les équipements que j'installe et entretiens : digicodes, visiophones, interphones, alarmes, caméras. Le tarif est annoncé avant tout déplacement."
  }
];

export default function SecuritePage() {
  return (
    <>
      <ServicePageJsonLd
        service={{
          name: "Sécurité Électronique",
          description: "Installation de digicode, vidéophonie, alarme et vidéosurveillance pour particuliers et professionnels en Eure-et-Loir, Eure et Yvelines."
        }}
        breadcrumbName="Sécurité Électronique"
        pageUrl="https://www.prodigelec.fr/services/securite"
        faqs={faqs}
      />
      <SecuriteContent />
    </>
  );
}
