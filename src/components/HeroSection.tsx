import { MessageCircle, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";

const WHATSAPP_URL = "https://wa.me/5565992191416?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20na%20Body%20Soul.";
const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375312138/SwPWPBchFuFewecT.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Body Soul Clínica de Estética"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand/70 via-brand/50 to-brand/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gold/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-beige/10 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-20">
        <img
          src={LOGO_URL}
          alt="Body Soul Estética Avançada"
          className="h-24 md:h-36 w-auto object-contain mx-auto mb-8 drop-shadow-lg animate-fade-up"
          style={{ filter: "brightness(0) invert(1)" }}
        />

        <div className="animate-fade-up-delay-1">
          <span className="inline-block px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] mb-8 border border-gold-light/30 text-primary-foreground/80 bg-gold/10 backdrop-blur-sm">
            Estética Avançada em Cuiabá – MT
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-primary-foreground animate-fade-up-delay-1">
          Realce sua beleza com{" "}
          <span className="text-gold-light italic">tecnologia avançada</span>
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-primary-foreground/80 font-light animate-fade-up-delay-2">
          Tratamentos estéticos personalizados com os melhores equipamentos do mercado.
          Resultados visíveis, naturais e duradouros.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold shadow-elegant transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-[#25D366] text-primary-foreground"
          >
            <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
            Agendar avaliação no WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center">
          <ChevronDown className="w-4 h-4 text-primary-foreground/60" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;
