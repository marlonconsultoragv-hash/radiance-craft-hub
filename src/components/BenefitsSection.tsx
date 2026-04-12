import { Eye, Crown, Cpu, GraduationCap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const benefits = [
  {
    icon: Eye,
    title: "Resultados Visíveis",
    desc: "Transformações reais já nas primeiras sessões com protocolos comprovados.",
  },
  {
    icon: Crown,
    title: "Atendimento Exclusivo",
    desc: "Cada cliente recebe atenção individual e um plano personalizado.",
  },
  {
    icon: Cpu,
    title: "Equipamentos Modernos",
    desc: "Investimos nas melhores tecnologias do mercado de estética.",
  },
  {
    icon: GraduationCap,
    title: "Profissionais Qualificados",
    desc: "Equipe com formação especializada e atualização constante.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-gradient-brand text-primary-foreground overflow-hidden relative">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-beige/5 blur-3xl" />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] mb-4 border border-primary-foreground/20 text-primary-foreground/80">
              Por que nos escolher
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight text-primary-foreground">
              Excelência em cada{" "}
              <span className="italic text-gold-light">detalhe</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 100}>
              <div className="text-center group">
                <div className="w-20 h-20 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-foreground/20 group-hover:scale-110 transition-all duration-300">
                  <b.icon className="w-8 h-8 text-gold-light" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-primary-foreground">
                  {b.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
