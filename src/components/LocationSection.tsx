import { MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import fachadaImg from "@/assets/fachada.jpg";

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-gold-light uppercase tracking-[0.2em] text-sm font-medium">
              Onde estamos
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-brand mt-3">
              Nossa Localização
            </h2>
            <div className="w-16 h-[2px] bg-gold-light mx-auto mt-4" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info + Photo */}
          <ScrollReveal>
            <div className="space-y-6">
              <img
                src={fachadaImg}
                alt="Fachada da clínica Body Soul Estética Avançada"
                className="w-full h-72 object-cover rounded-2xl shadow-lg"
              />
              <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-light shrink-0 mt-0.5" />
                  <p className="font-semibold text-brand">
                    Av. Presidente Afonso Pena, nº 1032 – Quilombo, Cuiabá – MT
                  </p>
                </div>
                <p>
                  A Body Soul Estética está situada em um dos pontos mais acessíveis de Cuiabá, na Avenida Presidente Afonso Pena, nº 1032, bairro Quilombo.
                </p>
                <p>
                  Estamos localizados próximos à Igreja Guadalupe, com fácil acesso tanto pela Avenida Miguel Sutil — logo após o Parque Mãe Bonifácia — quanto pelo Centro, subindo a Avenida Mato Grosso.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Google Maps */}
          <ScrollReveal>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.5!2d-56.0836!3d-15.5847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1b5a5e7d5a7%3A0x0!2sAv.+Pres.+Afonso+Pena%2C+1032+-+Quilombo%2C+Cuiab%C3%A1+-+MT!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 400 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Body Soul Estética Avançada"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/uATrUGH7xtfug2EEA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-brand/90 transition-colors text-sm"
              >
                <MapPin className="w-4 h-4" />
                Abrir no Google Maps
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
