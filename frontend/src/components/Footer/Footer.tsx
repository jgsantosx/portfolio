import "./Footer.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__content">
        <p>
          © {currentYear} Seu Nome. Todos os direitos reservados.
        </p>

        <div className="footer__links">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="#home">
            Voltar ao topo ↑
          </a>
        </div>
      </div>
    </footer>
  );
}