"use client";
import { motion } from "framer-motion";
import { Wrench, Zap, Award, Briefcase } from "lucide-react";
import BrandName from "@/app/public/components/ui/BrandName";

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
          Une expertise <span className="text-primary">de terrain</span>
        </h2>
        <div className="text-gray-300 space-y-4 leading-relaxed text-lg">
          <p>
            L&apos;artisanat est pour moi une histoire de famille. J&apos;ai
            travaillé pendant <strong className="text-white">23 ans</strong> aux
            côtés de mes parents et de mes frères au sein de notre société
            familiale à Paris. En tant qu&apos;aîné, c&apos;est auprès de mon
            père que j&apos;ai appris l&apos;exigence du terrain et
            l&apos;excellence technique.
          </p>
          <p>
            Aujourd&apos;hui, fort de ces années d&apos;expérience,
            j&apos;interviens en{" "}
            <strong className="text-primary">
              Eure (27) et Eure-et-Loir (28)
            </strong>{" "}
            avec <BrandName />. Je poursuis cette tradition familiale avec la
            même exigence et le même savoir-faire qui ont fait nos succès.
          </p>
          <p>
            Nous unissons régulièrement nos compétences sur le terrain pour vous
            offrir une réactivité exemplaire et un savoir-faire complet,
            héritage direct de notre formation familiale.
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
          <p className="text-gray-400 text-sm">
            23 ans d&apos;expérience terrain en électricité et serrurerie.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <Zap className="w-8 h-8 text-amber-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Électricité</h3>
          <p className="text-gray-400 text-sm">
            Dépannage, mise aux normes et installations sécurisées.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <Award className="w-8 h-8 text-purple-500 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Qualifié</h3>
          <p className="text-gray-400 text-sm">
            CAP Électrotechnique et assurances décennales à jour.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <Briefcase className="w-8 h-8 text-green-500 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Entrepreneur</h3>
          <p className="text-gray-400 text-sm">
            Un interlocuteur unique pour vos besoins en électricité et
            serrurerie.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
