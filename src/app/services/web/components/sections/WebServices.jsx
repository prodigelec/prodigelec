"use client";
import { motion } from "framer-motion";
import { Check, Users, Settings, HardDrive, ShoppingBag, Globe } from "lucide-react";

export default function WebServices() {
  const features = [
    {
      icon: Users,
      title: "Assistance & Formation",
      description: "Vous avez du mal avec l'informatique ? Je vous accompagne avec patience pour maîtriser vos outils numériques.",
      items: [
        "Initiation à l'informatique",
        "Aide aux démarches administratives",
        "Utilisation smartphone & tablette",
        "Gestion des emails et mots de passe"
      ]
    },
    {
      icon: Settings,
      title: "Maintenance & Logiciels",
      description: "Votre ordinateur est lent ou plante ? Je remets votre système à neuf pour retrouver fluidité et sécurité.",
      items: [
        "Installation Windows, Linux, MacOS",
        "Mises à jour pilotes & logiciels",
        "Suppression de virus & malwares",
        "Récupération de données"
      ]
    },
    {
      icon: HardDrive,
      title: "Matériel & Performance",
      description: "Améliorez votre PC sans en racheter un neuf. J'installe de nouveaux composants pour booster ses performances.",
      items: [
        "Installation disque dur SSD",
        "Ajout de mémoire vive (RAM)",
        "Changement carte mère / processeur",
        "Nettoyage physique (poussière)"
      ]
    },
    {
      icon: ShoppingBag,
      title: "Vente & Conseil",
      description: "Besoin d'un nouvel ordinateur ? Je vous propose du matériel fiable (neuf ou reconditionné) adapté à votre budget.",
      items: [
        "Vente PC Reconditionnés & Neufs",
        "Assemblage PC sur mesure",
        "Conseil avant achat",
        "Préparation & Transfert de données"
      ]
    },
    {
      icon: Globe,
      title: "Création Sites Internet",
      description: "Développez votre visibilité locale avec un site vitrine moderne, rapide et optimisé pour Google.",
      items: [
        "Site Vitrine sur-mesure",
        "Référencement SEO Local",
        "Compatible Mobile & Tablette",
        "Hébergement & Maintenance"
      ]
    }
  ];

  return (
    <div className="mb-24">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Mes Services</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.33rem)]"
          >
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
              <feature.icon className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 min-h-[64px] flex items-center">{feature.title}</h3>
            <p className="text-gray-400 mb-8 flex-grow">
              {feature.description}
            </p>
            <ul className="space-y-3">
              {feature.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                  <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
