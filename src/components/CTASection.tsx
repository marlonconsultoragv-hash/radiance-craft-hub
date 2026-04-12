import { MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const WHATSAPP_URL = "https://wa.me/5565992191416?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20na%20Body%20Soul.";

const CTASection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-brand p-12 md:p-20 text-center">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-beige/5 blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary-foreground mb-6 leading-tight">
                Sua transformação{" "}
                <span className="italic text-gold-light">começa agora</span>
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Agende sua avaliação gratuita e descubra o tratamento ideal para
                você. Estamos prontas para cuidar da sua beleza.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-lg font-semibold shadow-elegant transition-all duration-300 hover:scale-105 bg-[#25D366] text-primary-foreground"
              >
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Agendar avaliação gratuita
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
