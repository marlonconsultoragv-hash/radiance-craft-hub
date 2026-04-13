import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-cream">
      <div className="section-container">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge-label mb-4 block w-fit mx-auto">Sobre Nós</span>
            <h2 className="heading-section mb-8">
              Sobre a Body Soul{" "}
              <span className="italic text-gold">Estética Avançada</span>
            </h2>

            <div className="text-muted-foreground leading-relaxed text-lg space-y-5 text-left">
              <p className="text-xl font-medium text-brand italic text-center">
                Cuidar do corpo é importante, mas cuidar da alma é essencial.
              </p>
              <p>
                Assim nasceu a Body Soul Estética Avançada — um espaço criado para transformar beleza em bem-estar, e autoestima em forma de amor-próprio.
              </p>
              <p>
                Nossa história começou em outubro de 2020, sob o nome PL Estética Avançada. Desde então, crescemos, aprendemos e evoluímos. Hoje, com uma nova identidade, reafirmamos o mesmo propósito: proporcionar resultados de qualidade com sensibilidade, técnica e cuidado humano.
              </p>
              <p>
                À frente da clínica estão <strong className="text-brand">Dra. Pollyani Santos</strong>, especialista em Harmonização Facial e Tratamentos Corporais, e <strong className="text-brand">Dr. Marlon D. Paula</strong>, especialista em remoções de verrugas e tratamentos faciais. Unidos pelo amor à estética e ao cuidado, eles conduzem cada atendimento com atenção, empatia e o compromisso de oferecer uma experiência única.
              </p>
              <p>
                Na Body Soul, acreditamos que cada pessoa carrega uma beleza singular. Por isso, nossos tratamentos faciais, corporais, Spa e relaxamento são pensados para valorizar o que há de melhor em cada cliente — homens e mulheres que buscam não apenas estética, mas equilíbrio entre corpo, mente e espírito.
              </p>
              <p className="text-brand font-semibold italic text-center text-xl mt-8">
                Body Soul Estética Avançada — onde o cuidado vai além da pele.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
