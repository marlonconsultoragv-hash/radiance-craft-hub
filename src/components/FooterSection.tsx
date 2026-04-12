import { Instagram, MessageCircle, MapPin, Phone } from "lucide-react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375312138/SwPWPBchFuFewecT.png";
const WHATSAPP_URL = "https://wa.me/5565992191416?text=Olá%20vim%20do%20site!%20Gostaria%20de%20agendar%20uma%20avaliação%20na%20Body%20Soul.";

const FooterSection = () => {
  return (
    <footer id="localizacao" className="bg-brand text-primary-foreground">
      <div className="section-container px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img src={LOGO_URL} alt="Body Soul" className="h-14 w-auto mb-4" style={{ filter: "brightness(0) invert(1)" }} />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Especialistas em estética avançada em Cuiabá – MT. Beleza com segurança, naturalidade e excelência.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://www.instagram.com/bodysoulesteticaavancada?igsh=MWl6cGF1dm4xbzc3&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-light" />
                (65) 99219-1416
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-light shrink-0 mt-0.5" />
                Av. Pres. Afonso Pena, 1032 – Quilombo, Cuiabá – MT
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Horário</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Segunda a Sexta: 8h às 18h</li>
              <li>Sábado: 8h às 13h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Body Soul Estética Avançada. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
