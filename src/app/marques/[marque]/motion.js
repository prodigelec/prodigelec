// Partagé par les sections de la page marque. Les pages villes redéfinissent
// cette variante dans chaque fichier ; ici elles sont six à s'en servir, ça
// ne valait plus le copier-coller.
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};
