import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375312138/SwPWPBchFuFewecT.png";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "Procedimentos", href: "/procedimentos", isPage: true },
  { label: "Resultados", href: "#resultados" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (item: typeof menuItems[0]) => {
    setIsOpen(false);
    if (item.isPage) {
      navigate(item.href);
      return;
    }
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return;
    }
    const el = document.querySelector(item.href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-brand/80 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" onClick={() => document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" })}>
            <img
              src={LOGO_URL}
              alt="Body Soul"
              className="h-8 md:h-10 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </a>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-10 h-10 flex items-center justify-center z-[60] group"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            <div className="flex flex-col justify-center items-center w-6 h-6">
              <span
                className={`block h-[2px] w-6 bg-primary-foreground rounded-full transition-all duration-300 ease-out ${
                  isOpen ? "rotate-45 translate-y-[5px]" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-primary-foreground rounded-full transition-all duration-300 ease-out mt-[8px] ${
                  isOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-primary-foreground rounded-full transition-all duration-300 ease-out mt-[8px] ${
                  isOpen ? "-rotate-45 -translate-y-[13px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Full-screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-[55] transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-brand/90 backdrop-blur-2xl"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <nav className="relative z-10 flex flex-col items-center justify-center h-full">
          <ul className="space-y-2 text-center">
            {menuItems.map((item, i) => (
              <li
                key={item.label}
                className={`transition-all duration-500 ${
                  isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: isOpen ? `${i * 80 + 150}ms` : "0ms" }}
              >
                <button
                  onClick={() => handleClick(item)}
                  className="text-3xl md:text-5xl font-heading font-light text-beige hover:text-gold-light transition-all duration-300 py-3 px-8 block tracking-wide hover:tracking-wider"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Decorative line */}
          <div
            className={`mt-12 w-16 h-[1px] bg-gold-light/40 transition-all duration-700 ${
              isOpen ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transitionDelay: isOpen ? "600ms" : "0ms" }}
          />
        </nav>
      </div>
    </>
  );
};

export default Header;
