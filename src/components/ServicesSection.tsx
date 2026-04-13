import { Zap, Syringe, Sparkles, Snowflake } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const WHATSAPP_URL = "https://wa.me/5565992191416?text=Olá%20vim%20do%20site!%20Gostaria%20de%20saber%20mais%20sobre%20";

const services = [
  {
    icon: Zap,
    name: "Remoção de Verrugas e Queloide",
    desc: "Remoção precisa com tecnologia de plasma, sem cortes e com recuperação rápida, para todos os tipos e tamanhos.",
    whatsappText: "Remoção%20de%20Verrugas%20e%20Queloide",
  },
  {
    icon: Syringe,
    name: "Botox Full Face",
    desc: "Tratamento completo de harmonização facial com toxina botulínica para rejuvenescimento global e natural.",
    whatsappText: "Botox%20Full%20Face",
  },
  {
    icon: Sparkles,
    name: "Preenchimento Full Face",
    desc: "Restauração de volumes e redefinição de contornos com ácido hialurônico para um rosto mais jovem e harmônico.",
    whatsappText: "Preenchimento%20Full%20Face",
  },
  {
    icon: Snowflake,
    name: "Crio Modelagem Corporal",
    desc: "Tecnologia de resfriamento controlado que elimina gordura localizada de forma definitiva e não invasiva.",
    whatsappText: "Crio%20Modelagem%20Corporal",
  },
];

const ServicesSection = () => {
  return (
    <section id="procedimentos" className="section-padding bg-background">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="badge-label mb-4 block w-fit mx-auto">Nossos Serviços</span>
            <h2 className="heading-section">
              Tratamentos que{" "}
              <span className="italic text-gold">transformam</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.name} delay={i * 80}>
              <a
                href={`${WHATSAPP_URL}${service.whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 rounded-2xl bg-cream border border-border/50 hover:shadow-elegant hover:border-gold/30 transition-all duration-500 hover:-translate-y-1 h-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="font-heading text-xl font-semibold text-brand mb-3">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.desc}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-brand-light group-hover:text-brand transition-colors">
                  Saiba mais
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
