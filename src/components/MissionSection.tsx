import { Target, Eye, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const values = [
  { emoji: "✨", label: "Cuidado humano", desc: "tratamos cada cliente com empatia, respeito e atenção aos detalhes." },
  { emoji: "✨", label: "Excelência", desc: "buscamos sempre os melhores resultados, com técnicas seguras e atualizadas." },
  { emoji: "✨", label: "Propósito", desc: "cada atendimento é feito com intenção e amor, valorizando o que há de único em cada pessoa." },
  { emoji: "✨", label: "Confiança", desc: "construímos relações baseadas em transparência, ética e responsabilidade." },
  { emoji: "✨", label: "Equilíbrio", desc: "acreditamos que a verdadeira beleza está na harmonia entre corpo, mente e alma." },
];

const MissionSection = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="badge-label mb-4 block w-fit mx-auto">Nosso Propósito</span>
            <h2 className="heading-section">
              Missão, Visão e{" "}
              <span className="italic text-gold">Valores</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Missão */}
          <ScrollReveal>
            <div className="p-8 rounded-2xl bg-background shadow-soft border border-border/50 h-full">
              <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-brand mb-4">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Proporcionar bem-estar, autoestima e confiança por meio de cuidados estéticos que unem técnica, sensibilidade e propósito. Nosso compromisso é oferecer resultados de qualidade, valorizando a beleza individual de cada cliente e garantindo uma experiência acolhedora, segura e transformadora.
              </p>
            </div>
          </ScrollReveal>

          {/* Visão */}
          <ScrollReveal delay={100}>
            <div className="p-8 rounded-2xl bg-background shadow-soft border border-border/50 h-full">
              <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-brand mb-4">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser referência em estética avançada e humanizada, reconhecida por transformar não apenas aparências, mas vidas — levando cada pessoa a se sentir bem no corpo e em paz com a alma.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Valores */}
        <ScrollReveal delay={200}>
          <div className="p-8 rounded-2xl bg-background shadow-soft border border-border/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-brand">Valores</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {values.map((v) => (
                <div key={v.label} className="flex items-start gap-3 p-4 rounded-xl bg-cream/50">
                  <span className="text-lg shrink-0">{v.emoji}</span>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    <strong className="text-brand">{v.label}</strong> – {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MissionSection;
