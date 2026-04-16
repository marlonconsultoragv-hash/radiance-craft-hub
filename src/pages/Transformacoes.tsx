import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Lightbox from "@/components/Lightbox";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

const WHATSAPP_URL = "https://wa.me/5565992191416?text=Olá%20vim%20do%20site!%20Gostaria%20de%20saber%20mais%20sobre%20";

const categories = [
  {
    name: "Remoção de verrugas e tratamento de queloides",
    slug: "verrugas",
    whatsappText: "Remoção%20de%20Verrugas%20e%20Queloides",
    count: 6,
  },
  {
    name: "Toxina botulínica (Botox Full Face)",
    slug: "botox",
    whatsappText: "Toxina%20Botulínica%20(Botox%20Full%20Face)",
    count: 10,
  },
  {
    name: "Preenchimento Facial (Full Face)",
    slug: "preenchimento",
    whatsappText: "Preenchimento%20Facial%20(Full%20Face)",
    count: 10,
  },
  {
    name: "Criomodelagem corporal",
    slug: "criomodelagem",
    whatsappText: "Criomodelagem%20Corporal",
    count: 7,
  },
];


const PhotoCarousel = ({ slug, count }: { slug: string; count: number }) => {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const images = Array.from({ length: count }, (_, i) => `/photos/${slug}/${i + 1}.jpeg`);

  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (lightboxOpen) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next, lightboxOpen]);

  return (
    <>
      <div className="relative group">
        <div
          className="overflow-hidden rounded-xl aspect-[4/3] bg-background cursor-pointer"
          onClick={() => setLightboxOpen(true)}
        >
          <img
            src={images[current]}
            alt={`Resultado ${current + 1}`}
            className="w-full h-full object-contain transition-opacity duration-500"
            loading="lazy"
          />
        </div>

        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-brand/70 text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-brand/70 text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand"
          aria-label="Próximo"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-gold-light w-5" : "bg-primary-foreground/50"
              }`}
              aria-label={`Foto ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={images}
          current={current}
          onClose={() => setLightboxOpen(false)}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
};

const Transformacoes = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen scroll-smooth bg-background">
      <Header />

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

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.slug} delay={i * 100}>
                <div className="bg-cream rounded-2xl border border-border/50 overflow-hidden hover:shadow-elegant transition-all duration-500 group">
                  <div className="p-6 pb-4">
                    <h2 className="font-heading text-xl md:text-2xl font-semibold text-brand mb-2">
                      {cat.name}
                    </h2>
                  </div>

                  <div className="px-6 pb-4">
                    <PhotoCarousel slug={cat.slug} count={cat.count} />
                  </div>

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