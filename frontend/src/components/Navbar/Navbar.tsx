import { useEffect, useState } from "react";
import "./Navbar.css";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24);
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header
      className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}
    >
      <div className="container navbar__content">
        <a
          href="#home"
          className="navbar__brand"
          onClick={closeMenu}
          aria-label="Ir para o início"
        >
          <span className="navbar__brand-name">JOÃO</span>

          <span className="navbar__brand-separator">|</span>

          <span className="navbar__brand-role">
            FULL STACK DEVELOPER
          </span>
        </a>

        <nav
          className={`navbar__nav ${
            isOpen ? "navbar__nav--open" : ""
          }`}
          aria-label="Navegação principal"
        >
          <ul className="navbar__links">
            <li>
              <a href="#home" onClick={closeMenu}>
                Início
              </a>
            </li>

            <li>
              <a href="#about" onClick={closeMenu}>
                Sobre
              </a>
            </li>

            <li>
              <a href="#projects" onClick={closeMenu}>
                Projetos
              </a>
            </li>

            <li>
              <a href="#skills" onClick={closeMenu}>
                Habilidades
              </a>
            </li>

            <li>
              <a href="#contact" onClick={closeMenu}>
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <a
          href="/cv-joao.pdf"
          className="navbar__cta"
          download
        >
          DOWNLOAD CV
        </a>

        <button
          type="button"
          className={`navbar__toggle ${
            isOpen ? "navbar__toggle--open" : ""
          }`}
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}