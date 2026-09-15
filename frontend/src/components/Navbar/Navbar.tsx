import { useEffect, useState } from "react";

import "./Navbar.css";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      // Na Home / topo do site, a navbar fica sempre visível
      if (currentScrollY <= 120) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Scroll para baixo: esconde
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        setIsOpen(false);
      }

      // Scroll para cima: mostra
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header
      className={`navbar ${
        isVisible ? "navbar--visible" : "navbar--hidden"
      }`}
    >
      <div className="container navbar__content">
        <a
          href="#home"
          className="navbar__brand"
          onClick={closeMenu}
          aria-label="Ir para o início"
        >
          <span className="navbar__brand-name">
            JOÃO
          </span>

          <span className="navbar__brand-separator">
            |
          </span>

          <span className="navbar__brand-role">
            FULL STACK DEVELOPER
          </span>
        </a>

        <nav
          id="primary-navigation"
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
              <a
                href="#experience"
                onClick={closeMenu}
              >
                Experiência
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={closeMenu}
              >
                Projetos
              </a>
            </li>

            <li>
              <a href="#skills" onClick={closeMenu}>
                Habilidades
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={closeMenu}
              >
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
            isOpen
              ? "navbar__toggle--open"
              : ""
          }`}
          onClick={() =>
            setIsOpen((current) => !current)
          }
          aria-label={
            isOpen
              ? "Fechar menu"
              : "Abrir menu"
          }
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}