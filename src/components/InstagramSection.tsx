import { Instagram } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useEffect } from "react";

const INSTAGRAM_URL = "https://www.instagram.com/bodysoulesteticaavancada";

const InstagramSection = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="section-padding bg-cream">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="badge-label mb-4 block w-fit mx-auto">Instagram</span>
            <h2 className="heading-section">
              Acompanhe nosso{" "}
              <span className="italic text-gold">dia a dia</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Siga-nos no Instagram e fique por dentro das novidades, dicas e resultados dos nossos tratamentos.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex justify-center">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={`${INSTAGRAM_URL}/`}
              data-instgrm-version="14"
              style={{
                background: "transparent",
                border: 0,
                margin: "0 auto",
                maxWidth: 540,
                width: "100%",
                minWidth: 326,
              }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="text-center mt-10">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-brand text-primary-foreground font-medium hover:opacity-90 transition-opacity text-base"
            >
              <Instagram className="w-5 h-5" />
              Seguir @bodysoulesteticaavancada
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default InstagramSection;
