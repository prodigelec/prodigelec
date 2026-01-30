"use client";
import { motion } from "framer-motion";
import { Wrench, Code, Award, Briefcase } from "lucide-react";

export default function AboutStory() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-white mb-6">
          Une double compétence <span className="text-primary">unique</span>
        </h2>
        <div className="text-gray-300 space-y-4 leading-relaxed text-lg">
          <p>
            Mon parcours est loin d'être linéaire, et c'est ce qui fait aujourd'hui ma force. Pendant plus de <strong className="text-white">20 ans</strong>, j'ai sillonné les routes en tant qu'artisan électricien et serrurier.
          </p>
          <p>
            J'ai appris sur le terrain la valeur du travail bien fait, l'importance de la réactivité et le sens du service client. Ces années m'ont forgé une rigueur technique et une capacité d'adaptation à toute épreuve.
          </p>
          <p>
            Passionné par la technologie, j'ai décidé d'ajouter une nouvelle corde à mon arc en me formant au développement web. J'ai obtenu mon titre professionnel de <strong className="text-cyan-400">Développeur Web et Web Mobile</strong> (DWWM), me permettant aujourd'hui de lier le monde physique et numérique.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <Wrench className="w-8 h-8 text-amber-500 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Artisan Expert</h3>
          <p className="text-gray-400 text-sm">20 ans d'expérience terrain en électricité et serrurerie.</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <Code className="w-8 h-8 text-cyan-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Développeur</h3>
          <p className="text-gray-400 text-sm">Certification DWWM. Sites vitrines et applications web.</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <Award className="w-8 h-8 text-purple-500 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Certifié</h3>
          <p className="text-gray-400 text-sm">Diplômé d'État et assurances décennales à jour.</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <Briefcase className="w-8 h-8 text-green-500 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Entrepreneur</h3>
          <p className="text-gray-400 text-sm">Une vision globale de vos besoins, du chantier au web.</p>
        </div>
      </motion.div>
    </div>
  );
}
