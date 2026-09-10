import "./Navbar.css";

export function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__content">
        <a href="#home" className="navbar__logo">
          Seu Nome
        </a>

        <nav>
          <ul className="navbar__links">
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}