"use client";
import { services } from "./services/data";
import ServiceCard from "./services/ServiceCard";

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 md:py-20 px-4 sm:px-6 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[140px]" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-8 sm:mb-12 text-center md:text-left text-foreground">
          Nos Domaines d&apos;Intervention
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.key} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
