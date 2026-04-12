import { Shield, Sparkles, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: Shield,
    title: "Segurança",
    desc: "Protocolos rigorosos e produtos de alta qualidade",
  },
  {
    icon: Sparkles,
    title: "Inovação",
    desc: "Tecnologia de ponta em todos os tratamentos",
  },
  {
    icon: Heart,
    title: "Cuidado",
    desc: "Atendimento humanizado e personalizado",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-cream">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <span className="badge-label mb-4 block w-fit">Sobre Nós</span>
            <h2 className="heading-section mb-6">
              Sua beleza merece o{" "}
              <span className="italic text-gold">melhor cuidado</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              A Body Soul é referência em estética avançada em Cuiabá. Combinamos
              tecnologia de última geração com profissionais altamente qualificados
              para entregar resultados que transformam.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cada tratamento é desenvolvido de forma personalizada, respeitando a
              individualidade de cada cliente. Nosso compromisso é com sua
              satisfação e bem-estar.
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 100}>
                <div className="flex gap-5 p-6 rounded-2xl bg-background shadow-soft hover:shadow-medium transition-all duration-300 group cursor-default">
                  <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <f.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-brand mb-1">{f.title}</h3>
                    <p className="text-muted-foreground text-sm">{f.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
