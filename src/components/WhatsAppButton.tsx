import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5565992191416?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20na%20Body%20Soul.";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-elegant hover:scale-110 transition-all duration-300 group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground group-hover:scale-110 transition-transform" />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </a>
  );
};

export default WhatsAppButton;
