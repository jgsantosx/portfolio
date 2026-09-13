import "./Footer.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__content">
        <p className="footer__copyright">
          © {currentYear} JOÃO GABRIEL | DESENVOLVIDO EM GOTHAM.
        </p>

        <div className="footer__links">
          <a
            href="https://github.com/Jgsantosx"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jgsantosx/"
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