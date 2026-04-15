import { Phone, MapPin, Clock, MessageCircle, Instagram } from "lucide-react";
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <ScrollReveal delay={0}>
            <div className="bg-background rounded-2xl p-8 text-center border border-border/50 hover:shadow-elegant transition-all duration-500 h-full">
              <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center mx-auto mb-5">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-brand mb-2">Telefone / WhatsApp</h3>
              <p className="text-muted-foreground text-sm">(65) 99219-1416</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="bg-background rounded-2xl p-8 text-center border border-border/50 hover:shadow-elegant transition-all duration-500 h-full">
              <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center mx-auto mb-5">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-brand mb-2">Endereço</h3>
              <p className="text-muted-foreground text-sm">Av. Pres. Afonso Pena, 1032 – Quilombo, Cuiabá – MT</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-background rounded-2xl p-8 text-center border border-border/50 hover:shadow-elegant transition-all duration-500 h-full">
              <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center mx-auto mb-5">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-brand mb-2">Horário</h3>
              <p className="text-muted-foreground text-sm">Seg–Sex: 8h às 18h<br />Sáb: 8h às 13h</p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300}>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-primary-foreground font-medium hover:opacity-90 transition-opacity text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Fale pelo WhatsApp
            </a>
            <a
              href="https://www.instagram.com/bodysoulesteticaavancada"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-brand text-primary-foreground font-medium hover:opacity-90 transition-opacity text-base"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
