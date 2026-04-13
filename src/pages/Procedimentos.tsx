import { useEffect, useState, useCallback } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";

import procBotox from "@/assets/proc-botox.jpg";
import procFiosPdo from "@/assets/proc-fios-pdo.jpg";
import procPdrn from "@/assets/proc-pdrn.jpg";
import procBioestimuladores from "@/assets/proc-bioestimuladores.jpg";
import procPreenchimento from "@/assets/proc-preenchimento.jpg";
import procAcne from "@/assets/proc-acne.jpg";
import procSpa from "@/assets/proc-spa.jpg";
import procVerrugas from "@/assets/proc-verrugas.jpg";
import procCelulite from "@/assets/proc-celulite.jpg";
import procQueloides from "@/assets/proc-queloides.jpg";
import procCorporal from "@/assets/proc-corporal.jpg";

const WHATSAPP_BASE = "https://wa.me/5565992191416?text=Olá%20vim%20do%20site!%20Gostaria%20de%20agendar%20";

interface ProcedureSection {
  title: string;
  content: string;
}

interface Procedure {
  name: string;
  image: string;
  whatsappText: string;
  sections: ProcedureSection[];
}

const procedures: Procedure[] = [
  {
    name: "Botox Full Face",
    image: procBotox,
    whatsappText: "Botox%20Full%20Face",
    sections: [
      {
        title: "Introdução",
        content: "O Botox Full Face é um tratamento avançado de harmonização facial que utiliza a toxina botulínica para promover um rejuvenescimento global do rosto, de forma natural e equilibrada.",
      },
      {
        title: "Como funciona",
        content: "Diferente da aplicação tradicional, que trata apenas áreas específicas como testa ou olhos, o Full Face considera toda a expressão facial, garantindo um resultado mais harmônico, leve e proporcional.",
      },
      {
        title: "Resultado",
        content: "O procedimento atua relaxando a musculatura responsável pelas linhas de expressão e prevenindo a formação de novas rugas. Além disso, melhora o aspecto da pele, suaviza marcas de cansaço e proporciona uma aparência descansada e jovial, sem alterar a identidade facial.",
      },
    ],
  },
  {
    name: "Fios de PDO",
    image: procFiosPdo,
    whatsappText: "Fios%20de%20PDO",
    sections: [
      {
        title: "Introdução",
        content: "Os Fios de PDO (Polidioxanona) são uma das técnicas mais modernas e seguras da estética facial, indicados para quem busca estimular o colágeno, melhorar a firmeza da pele e rejuvenescer sem cirurgias.",
      },
      {
        title: "Como funciona",
        content: "Esses fios são totalmente absorvíveis pelo organismo e atuam de dentro para fora: ao serem inseridos na pele, eles estimulam a produção natural de colágeno e elastina, promovendo uma melhora gradual da textura, sustentação e elasticidade da face.\n\nExistem diferentes tipos de fios — lisos, espiculados e parafina — que podem ser usados conforme o objetivo do tratamento:\n\n• Fios lisos: ideais para estimular colágeno e melhorar a qualidade da pele.\n• Fios espiculados: possuem pequenas garras que promovem efeito lifting imediato, reposicionando tecidos e contornos faciais.\n• Fios de sustentação: indicados para tratar a flacidez moderada, redefinindo linhas do rosto com naturalidade.",
      },
      {
        title: "Resultado",
        content: "O resultado é uma pele mais firme, rejuvenescida e com contornos mais definidos, sem a necessidade de cortes ou tempo de recuperação prolongado.",
      },
    ],
  },
  {
    name: "PDRN – Rejuvenescimento Facial",
    image: procPdrn,
    whatsappText: "PDRN%20Rejuvenescimento%20Facial",
    sections: [
      {
        title: "Introdução",
        content: "O PDRN (Polideoxirribonucleotídeo) é um tratamento de rejuvenescimento facial biotecnológico que vem revolucionando os cuidados com a pele.",
      },
      {
        title: "Como funciona",
        content: "Derivado do DNA do salmão, o PDRN possui altas propriedades regenerativas, atuando diretamente na reparação celular, hidratação profunda e estimulação da produção natural de colágeno e elastina.",
      },
      {
        title: "Resultado",
        content: "Quando aplicado na pele, o PDRN acelera o processo de renovação celular, melhora a textura, firmeza e luminosidade, além de reduzir linhas finas, marcas de expressão e sinais de cansaço. O resultado é uma pele mais jovem, viçosa e revitalizada, com aparência naturalmente saudável.",
      },
    ],
  },
  {
    name: "Bioestimuladores de Colágeno",
    image: procBioestimuladores,
    whatsappText: "Bioestimuladores%20de%20Colágeno",
    sections: [
      {
        title: "Introdução",
        content: "Os Bioestimuladores de Colágeno são procedimentos estéticos injetáveis que promovem um rejuvenescimento natural e duradouro, estimulando o próprio organismo a produzir colágeno — proteína essencial para a firmeza, elasticidade e sustentação da pele.",
      },
      {
        title: "Como funciona",
        content: "Com o passar do tempo, a produção de colágeno diminui, resultando em flacidez, perda de contorno facial e aspecto cansado. Os bioestimuladores agem de forma gradual e contínua, restaurando a densidade da pele e devolvendo o viço e a firmeza de forma natural.\n\nEntre as substâncias mais utilizadas estão o ácido polilático (Sculptra®) e a hidroxiapatita de cálcio (Radiesse®), aplicadas em pontos estratégicos para tratar flacidez facial e corporal, melhorar o contorno do rosto, pescoço, braços, abdômen e glúteos.",
      },
    ],
  },
  {
    name: "Preenchimento Facial",
    image: procPreenchimento,
    whatsappText: "Preenchimento%20Facial",
    sections: [
      {
        title: "Introdução",
        content: "O Preenchimento Facial é um dos tratamentos mais procurados na estética moderna para restaurar volumes, redefinir contornos e harmonizar o rosto de forma natural e segura.",
      },
      {
        title: "Como funciona",
        content: "A técnica utiliza substâncias biocompatíveis, como o ácido hialurônico, que é naturalmente presente no organismo e responsável por hidratar, preencher e dar sustentação à pele.\n\nCom o passar do tempo, a perda de colágeno e gordura facial pode causar flacidez, sulcos e aparência cansada. O preenchimento atua reposicionando volumes, corrigindo assimetrias e valorizando pontos estratégicos, como:\n\n• Maçãs do rosto (região malar)\n• Olheiras\n• Lábios\n• Queixo\n• Mandíbula\n• Sulcos nasogenianos (bigode chinês)",
      },
      {
        title: "Resultado",
        content: "O resultado é um rosto mais jovem, harmônico e com traços equilibrados, preservando a naturalidade e identidade facial.",
      },
    ],
  },
  {
    name: "Tratamentos para Acne",
    image: procAcne,
    whatsappText: "Tratamento%20para%20Acne",
    sections: [
      {
        title: "Introdução",
        content: "A acne é uma condição comum da pele que pode afetar pessoas de diferentes idades, causada pelo acúmulo de oleosidade, células mortas e inflamação das glândulas sebáceas. Além do desconforto estético, ela pode comprometer a autoestima e deixar marcas e cicatrizes se não for tratada corretamente.",
      },
      {
        title: "Como funciona",
        content: "Na Body Soul Estética, os tratamentos para acne são desenvolvidos de forma personalizada, avaliando o tipo de pele e o grau da acne de cada paciente.\n\nOs protocolos podem incluir combinações de tecnologias e ativos específicos, como:\n\n• Limpeza de pele profunda com ação anti-inflamatória e cicatrizante;\n• Peelings químicos que promovem renovação celular e controle da oleosidade;\n• Protocolos calmantes e reequilibrantes, para restaurar a saúde e a barreira de proteção da pele.",
      },
      {
        title: "Resultado",
        content: "O objetivo é controlar a oleosidade, reduzir inflamações, prevenir novas lesões e melhorar a textura e o aspecto da pele, promovendo um resultado progressivo e duradouro.\n\nCom acompanhamento profissional e cuidados contínuos, é possível conquistar uma pele mais limpa, saudável e uniforme, recuperando a confiança e o bem-estar.",
      },
    ],
  },
  {
    name: "Spa e Relaxamento",
    image: procSpa,
    whatsappText: "Spa%20e%20Relaxamento",
    sections: [
      {
        title: "Introdução",
        content: "Na Body Soul Estética, cuidamos não apenas da estética, mas também do bem-estar e equilíbrio do corpo e da mente. Nosso espaço de spa e relaxamento oferece tratamentos pensados para aliviar tensões, renovar energias e proporcionar momentos de cuidado e prazer.",
      },
      {
        title: "Benefícios",
        content: "Entre nossos serviços estão:\n\n• Massagens terapêuticas e relaxantes: reduzem o estresse, melhoram a circulação e promovem sensação de leveza e bem-estar.\n• Limpeza de pele: remove impurezas, células mortas e oleosidade, deixando a pele renovada, hidratada e saudável.\n• Cone Hindu (conehoterapia): técnica tradicional que ajuda na desobstrução de canais energéticos, promovendo relaxamento profundo e equilíbrio corporal.\n• Auriculoterapia: estimula pontos específicos da orelha para alívio de tensões, controle de ansiedade e melhora do equilíbrio físico e emocional.\n• Escalda-pés: proporciona conforto, relaxamento e ativação da circulação, sendo um cuidado completo para encerrar o dia com bem-estar.",
      },
    ],
  },
  {
    name: "Remoção de Verrugas",
    image: procVerrugas,
    whatsappText: "Remoção%20de%20Verrugas",
    sections: [
      {
        title: "Introdução",
        content: "Na Body Soul Estética, somos especialistas em remoção de verrugas utilizando a tecnologia de plasma, realizada pelo Dr. Marlon e Dra. Pollyani. Este procedimento avançado permite tratar todos os tipos e tamanhos de verrugas, em qualquer parte do corpo ou face, incluindo áreas íntimas, com resultados rápidos e precisos.",
      },
      {
        title: "Como funciona",
        content: "O plasma atua por meio de uma microdescarga de energia, que evapora o tecido da verruga sem danificar a pele ao redor. O procedimento é seguro, eficaz e praticamente indolor, realizado com anestesia local, e não requer repouso, permitindo que o paciente retome suas atividades normalmente.",
      },
      {
        title: "Benefícios",
        content: "Os benefícios do método incluem:\n\n• Remoção imediata em apenas uma sessão;\n• Precisão no tratamento, preservando a pele saudável;\n• Segurança, mesmo em áreas sensíveis ou íntimas;\n• Recuperação rápida, sem cicatrizes visíveis;\n• Conforto, com mínimo desconforto durante o procedimento.",
      },
      {
        title: "Resultado",
        content: "Na Body Soul Estética, cada remoção de verruga é realizada de forma personalizada, garantindo eficácia, segurança e resultados estéticos naturais, com total atenção ao bem-estar do paciente.",
      },
    ],
  },
  {
    name: "Subcisão de Celulite",
    image: procCelulite,
    whatsappText: "Subcisão%20de%20Celulite",
    sections: [
      {
        title: "Introdução",
        content: "A celulite é causada pela fibrose das fibras que ligam a pele ao tecido subcutâneo, criando aquelas ondulações ou \"furinhos\" característicos. Quando não respondem a tratamentos convencionais, a subcisão de celulite surge como uma solução eficaz para quebrar essas fibroses e suavizar a pele.",
      },
      {
        title: "Como funciona",
        content: "O procedimento consiste na liberação das traves fibrosas com uma microagulha ou cânula, promovendo o descolamento da pele do tecido subcutâneo. Isso melhora imediatamente o contorno da pele, reduzindo a aparência da celulite e estimulando a produção natural de colágeno, que contribui para mais firmeza e elasticidade.\n\nNa Body Soul Estética, o tratamento é realizado de forma personalizada, avaliando o grau da celulite e as áreas a serem tratadas. A técnica é segura, minimamente invasiva e com rápida recuperação, permitindo que o paciente retome suas atividades normalmente, com resultados visíveis e duradouros.",
      },
      {
        title: "Resultado",
        content: "O resultado é uma pele mais lisa, firme e uniforme, proporcionando melhora estética e aumento da autoestima.",
      },
    ],
  },
  {
    name: "Tratamento e Remoção de Queloides",
    image: procQueloides,
    whatsappText: "Tratamento%20de%20Queloides",
    sections: [
      {
        title: "Introdução",
        content: "Os queloides são cicatrizes anormais que surgem devido a uma produção excessiva de colágeno durante o processo de cicatrização. Eles podem apresentar alto ou baixo relevo, causando desconforto estético e, em alguns casos, sensibilidade ou coceira.",
      },
      {
        title: "Como funciona",
        content: "Quando não há regressão espontânea ou resposta a tratamentos convencionais, existem técnicas eficazes para controle e remoção dessas lesões, devolvendo um aspecto mais uniforme à pele.\n\nO tratamento varia de acordo com as características do queloide. Para queloides com alto relevo, como aqueles mais volumosos e comuns na orelha, é realizada a técnica de remoção por corte com plasma, que promove a retirada precisa do excesso de tecido, com controle e segurança.\n\nJá os queloides de baixo relevo, geralmente decorrentes de cirurgias ou pequenos cortes, são tratados com aplicação de corticoide injetável diretamente na lesão. Esse método atua reduzindo a inflamação e a produção excessiva de colágeno, promovendo o afinamento e melhora progressiva da cicatriz.",
      },
      {
        title: "Resultado",
        content: "Na Body Soul Estética, cada caso é avaliado de forma individual, garantindo a escolha da técnica mais adequada para cada tipo de queloide. Os procedimentos são seguros e realizados com foco em resultados naturais e progressivos.\n\nO resultado é uma pele com aparência mais uniforme, redução do volume da cicatriz e melhora significativa na autoestima do paciente.",
      },
    ],
  },
  {
    name: "Tratamentos Corporais",
    image: procCorporal,
    whatsappText: "Tratamentos%20Corporais",
    sections: [
      {
        title: "Introdução",
        content: "Na Body Soul Estética, trabalhamos com tratamentos de harmonização corporal que têm como objetivo melhorar o contorno do corpo, reduzir gordura localizada, tratar a flacidez e promover uma pele mais firme e uniforme.",
      },
      {
        title: "Como funciona",
        content: "Utilizamos aparelhos de alta tecnologia aliados a técnicas avançadas, proporcionando resultados eficazes, seguros e progressivos. Nossos protocolos são desenvolvidos para atuar de forma estratégica nas principais queixas estéticas, sempre respeitando as características individuais de cada paciente.\n\nOs tratamentos são personalizados, combinando diferentes abordagens conforme a necessidade e os objetivos de cada pessoa, o que potencializa os resultados e garante um cuidado mais completo.",
      },
      {
        title: "Resultado",
        content: "Na Body Soul Estética, priorizamos a naturalidade dos resultados, buscando realçar a beleza de forma equilibrada e harmoniosa.\n\nO resultado é um corpo mais definido, pele mais firme e uma melhora significativa na autoestima.",
      },
    ],
  },
];

const toSlug = (name: string) =>
  name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const ProcedureCard = ({ procedure, index }: { procedure: Procedure; index: number }) => (
  <ScrollReveal delay={index * 60}>
    <article id={toSlug(procedure.name)} className="group rounded-2xl overflow-hidden border border-border/50 bg-card shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 scroll-mt-36">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={procedure.image}
          alt={procedure.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 space-y-5">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand leading-tight">
          {procedure.name}
        </h2>

        {procedure.sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-light mb-2">
              {section.title}
            </h3>
            <div className="text-muted-foreground text-[15px] leading-relaxed whitespace-pre-line">
              {section.content}
            </div>
          </div>
        ))}

        {/* CTA Button */}
        <a
          href={`${WHATSAPP_BASE}${procedure.whatsappText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-full bg-gradient-brand text-primary-foreground font-semibold text-sm tracking-wide hover:shadow-elegant hover:scale-105 transition-all duration-300"
        >
          👉 Agendar pelo WhatsApp
        </a>
      </div>
    </article>
  </ScrollReveal>
);

const ProcedureNav = ({ activeSlug, onSelect }: { activeSlug: string; onSelect: (slug: string) => void }) => {
  const [open, setOpen] = useState(false);
  const activeName = procedures.find((p) => toSlug(p.name) === activeSlug)?.name ?? "Selecione um procedimento";

  return (
    <nav className="sticky top-16 z-40 bg-background/90 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 relative">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-border/50 bg-card text-sm font-medium text-brand shadow-sm hover:border-brand/50 transition-all duration-300"
        >
          <span>{activeName}</span>
          <svg className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>

        {open && (
          <div className="absolute left-4 right-4 top-full mt-1 rounded-xl border border-border/50 bg-card shadow-lg z-50 max-h-72 overflow-y-auto">
            {procedures.map((proc) => {
              const slug = toSlug(proc.name);
              const isActive = slug === activeSlug;
              return (
                <button
                  key={proc.name}
                  onClick={() => { onSelect(slug); setOpen(false); }}
                  className={`w-full text-left px-4 py-3 text-sm transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl ${
                    isActive
                      ? "bg-brand text-primary-foreground font-semibold"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {proc.name}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

const Procedimentos = () => {
  const [activeSlug, setActiveSlug] = useState(() => toSlug(procedures[0].name));

  const handleNavClick = useCallback((slug: string) => {
    setActiveSlug(slug);
    document.getElementById(slug)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSlug(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    procedures.forEach((proc) => {
      const el = document.getElementById(toSlug(proc.name));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Banner */}
      <section className="relative bg-gradient-brand pt-28 pb-16 md:pt-36 md:pb-20 px-4">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-gold/10 blur-3xl animate-float" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
          <span className="badge-label block w-fit mx-auto mb-4 !bg-primary-foreground/10 !text-primary-foreground/80 border border-primary-foreground/20">
            Nossos Procedimentos
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            Tratamentos que{" "}
            <span className="italic text-gold-light">transformam</span>
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto font-light">
            Conheça todos os nossos procedimentos realizados com tecnologia de ponta e profissionais especializados.
          </p>
        </div>
      </section>

      {/* Sticky Procedure Nav */}
      <ProcedureNav activeSlug={activeSlug} onSelect={handleNavClick} />

      {/* Procedures Grid */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-10 md:gap-14">
          {procedures.map((proc, i) => (
            <ProcedureCard key={proc.name} procedure={proc} index={i} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-cream text-center">
        <ScrollReveal>
          <h2 className="heading-section mb-4">
            Pronta para <span className="italic text-gold">começar</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Entre em contato e agende sua avaliação personalizada.
          </p>
          <a
            href="https://wa.me/5565992191416?text=Olá%20vim%20do%20site!%20Gostaria%20de%20agendar%20uma%20avaliação"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-brand text-primary-foreground font-semibold tracking-wide hover:shadow-elegant hover:scale-105 transition-all duration-300"
          >
            Agendar Avaliação
          </a>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Procedimentos;
