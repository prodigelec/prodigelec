function formatSiret(raw) {
  if (!raw) return "SIRET À COMPLÉTER";
  const digits = raw.replace(/\D/g, "");
  if (digits.length !== 14) return raw;
  return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 9)} ${digits.slice(9)}`;
}

export const contact = {
  phone: "06 38 19 47 52",
  email: "contact@prodigelec.fr",
  website: "www.prodigelec.fr",
  facebook: "prodigelec",
  defaultQrUrl: "https://www.prodigelec.fr",
  city: "Marolles",
  siret: formatSiret(process.env.NEXT_PUBLIC_SIRET),
};

export const interventionZone = {
  label: "Intervention locale",
  artisan: "Artisan de proximité",
  lines: [
    { name: "EURE-ET-LOIR", code: "28" },
    { name: "EURE", code: "27", andName: "YVELINES", andCode: "78" },
  ],
};

export const poles = ["Électricité", "Sécurité", "Automatismes"];
