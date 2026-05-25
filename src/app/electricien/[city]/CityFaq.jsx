"use client";
import { m } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { buildCityFaqs } from "@/app/data/cityFaqs";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

export default function CityFaq({ city }) {
  const faqs = buildCityFaqs(city);

  return (
    <section id="faq" className="max-w-5xl mx-auto px-6 mb-10 md:mb-20">
      <m.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--primary)" }}>
          Questions fréquentes
        </p>
        <h2 className="text-3xl font-bold">
          Vos questions à <span style={{ color: "var(--primary)" }}>{city.name}</span>
        </h2>
      </m.div>

      <div className="space-y-3">
        {faqs.map(({ question, answer }, i) => (
          <m.details
            key={question}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className="group rounded-2xl p-5 transition-colors"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <summary className="flex items-start gap-3 cursor-pointer list-none font-bold text-base">
              <HelpCircle size={18} className="shrink-0 mt-0.5" style={{ color: "var(--primary)" }} />
              <span className="flex-1">{question}</span>
              <span
                className="ml-2 text-xl shrink-0 transition-transform group-open:rotate-45"
                style={{ color: "var(--primary)" }}
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mt-3 ml-7 text-sm leading-relaxed" style={{ color: "var(--foreground-subtle)" }}>
              {answer}
            </p>
          </m.details>
        ))}
      </div>
    </section>
  );
}
