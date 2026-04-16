import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxProps {
  images: string[];
  current: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox = ({ images, current, onClose, onPrev, onNext }: LightboxProps) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, onPrev, onNext]);

  const content = (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center"
      style={{ zIndex: 9999, backgroundColor: "rgba(0,0,0,0.95)" }}
      onClick={onClose}
      onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStart === null) return;
        const diff = e.changedTouches[0].clientX - touchStart;
        if (diff > 60) onPrev();
        else if (diff < -60) onNext();
        setTouchStart(null);
      }}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="fixed top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors"
        style={{ zIndex: 10000 }}
        aria-label="Fechar"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="flex-1 flex items-center justify-center w-full px-4" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[current]}
          alt={`Foto ${current + 1}`}
          className="rounded-lg"
          style={{ maxHeight: "85vh", maxWidth: "95vw", objectFit: "contain" }}
        />
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="fixed left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
        style={{ zIndex: 10000 }}
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="fixed right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
        style={{ zIndex: 10000 }}
        aria-label="Próximo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="pb-4 pt-2 text-white/60 text-sm">
        {current + 1} / {images.length}
      </div>
    </div>
  );

  return createPortal(content, document.body);
};

export default Lightbox;
