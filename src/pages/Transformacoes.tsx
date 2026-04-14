import { useState } from "react";
import { ArrowLeft, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

const WHATSAPP_URL = "https://wa.me/5565992191416?text=Olá%20vim%20do%20site!%20Gostaria%20de%20saber%20mais%20sobre%20";

const categories = [
  {
    name: "Remoção de verrugas e tratamento de queloides",
    slug: "verrugas-queloides",
    whatsappText: "Remoção%20de%20Verrugas%20e%20Queloides",
    placeholder: true,
  },
  {
    name: "Toxina botulínica (Botox Full Face)",
    slug: "botox",
    whatsappText: "Toxina%20Botulínica%20(Botox%20Full%20Face)",
    placeholder: true,
  },
  {
    name: "Preenchimento Facial (Full Face)",
    slug: "preenchimento",
    whatsappText: "Preenchimento%20Facial%20(Full%20Face)",
    placeholder: true,
  },
  {
    name: "Criomodelagem corporal",
    slug: "criomodelagem",
    whatsappText: "Criomodelagem%20Corporal",
    placeholder: true,
  },
];

const Transformacoes = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen scroll-smooth bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-brand text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-beige/80 hover:text-beige mb-6 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </button>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Transformações
          </h1>
          <p className="text-beige/80 text-lg max-w-2xl mx-auto">
            Confira os resultados reais dos nossos tratamentos — antes e depois que falam por si.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.slug} delay={i * 100}>
                <div className="bg-cream rounded-2xl border border-border/50 overflow-hidden hover:shadow-elegant transition-all duration-500 group">
                  {/* Card Header */}
                  <div className="p-6 pb-4">
                    <h2 className="font-heading text-xl md:text-2xl font-semibold text-brand mb-2">
                      {cat.name}
                    </h2>
                  </div>

                  {/* Placeholder for before/after photos */}
                  <div className="px-6 pb-6">
                    <div className="bg-background rounded-xl border-2 border-dashed border-border/60 p-12 flex flex-col items-center justify-center text-center min-h-[220px]">
                      <Camera className="w-12 h-12 text-muted-foreground/40 mb-4" />
                      <p className="text-muted-foreground text-sm font-medium mb-1">
                        Fotos em breve
                      </p>
                      <p className="text-muted-foreground/60 text-xs">
                        Estamos preparando os registros de antes e depois
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="px-6 pb-6">
                    <a
                      href={`${WHATSAPP_URL}${cat.whatsappText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-3 rounded-xl bg-gradient-brand text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                    >
                      Agende sua consulta
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Transformacoes;
