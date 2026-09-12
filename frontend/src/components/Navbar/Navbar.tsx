import { useState } from "react";
import "./Navbar.css";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container navbar__content">
        <a href="#home" className="navbar__logo" onClick={closeMenu}>
          João Gabriel
        </a>

        <button
          className="navbar__toggle"
          type="button"
          aria-label="Abrir menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__nav ${isOpen ? "navbar__nav--open" : ""}`}>
          <ul className="navbar__links">
            <li><a href="#home" onClick={closeMenu}>Início</a></li>
            <li><a href="#about" onClick={closeMenu}>Sobre</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projetos</a></li>
            <li><a href="#experience" onClick={closeMenu}>Experiência</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}