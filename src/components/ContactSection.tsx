import { MessageCircle, Instagram } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const WHATSAPP_URL = "https://wa.me/5565992191416?text=Olá%20vim%20do%20site!%20Gostaria%20de%20agendar%20uma%20avaliação%20na%20Body%20Soul.";

const ContactSection = () => {
  return (
    <section id="contato" className="section-padding bg-cream">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="badge-label mb-4 block w-fit mx-auto">Contato</span>
            <h2 className="heading-section">
              Fale <span className="italic text-gold">conosco</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Entre em contato e agende sua consulta. Estamos prontas para cuidar de você.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
          <ScrollReveal delay={0}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background rounded-2xl p-8 text-center border border-border/50 hover:shadow-elegant transition-all duration-500 block w-64"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center mx-auto mb-5">
                <MessageCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-brand mb-2">WhatsApp</h3>
              <p className="text-muted-foreground text-sm">(65) 99219-1416</p>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <a
              href="https://www.instagram.com/bodysoulesteticaavancada"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background rounded-2xl p-8 text-center border border-border/50 hover:shadow-elegant transition-all duration-500 block w-64"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center mx-auto mb-5">
                <Instagram className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-brand mb-2">Instagram</h3>
              <p className="text-muted-foreground text-sm">@bodysoulesteticaavancada</p>
            </a>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
