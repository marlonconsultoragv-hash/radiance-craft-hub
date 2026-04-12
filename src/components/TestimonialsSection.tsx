import { Star, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Ana Paula M.",
    text: "Atendimento maravilhoso! Fiz o Botox Full Face e o resultado foi incrível, muito natural. Super recomendo a Body Soul!",
    date: "Janeiro 2025",
    initials: "AP",
  },
  {
    name: "Fernanda S.",
    text: "Profissionais extremamente capacitadas e atenciosas. O ambiente é lindo e acolhedor. Resultados perfeitos!",
    date: "Dezembro 2024",
    initials: "FS",
  },
  {
    name: "Juliana R.",
    text: "Já faço tratamentos na Body Soul há 2 anos. A qualidade dos serviços é excepcional e os resultados sempre superam as expectativas!",
    date: "Fevereiro 2025",
    initials: "JR",
  },
  {
    name: "Camila T.",
    text: "A melhor clínica de estética de Cuiabá! Tecnologia de ponta e um cuidado incrível com cada detalhe. Amei!",
    date: "Março 2025",
    initials: "CT",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="resultados" className="section-padding bg-cream">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="badge-label mb-4 block w-fit mx-auto">Depoimentos</span>
            <h2 className="heading-section">
              O que nossas clientes{" "}
              <span className="italic text-gold">dizem</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 80}>
              <div className="bg-background rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 h-full flex flex-col group">
                <Quote className="w-8 h-8 text-gold/40 mb-4 group-hover:text-gold/60 transition-colors" />

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-primary-foreground text-xs font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.date}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
