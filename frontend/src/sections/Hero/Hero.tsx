import "./Hero.css";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__content">
        <div className="hero__text">
          <span className="hero__eyebrow">Olá, eu sou</span>

          <h1 className="hero__title">
            João Gabriel
          </h1>

          <h2 className="hero__subtitle">
            Desenvolvedor Full Stack
          </h2>

          <p className="hero__description">
            Desenvolvo aplicações web completas, criando experiências
            modernas no frontend e soluções robustas no backend.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="hero__button hero__button--primary">
              Ver projetos
            </a>

            <a href="#contact" className="hero__button hero__button--secondary">
              Entrar em contato
            </a>
          </div>

          <div className="hero__socials">
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
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card">
            <span>Full Stack Developer</span>

            <strong>
              React
              <br />
              Node.js
              <br />
              TypeScript
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}