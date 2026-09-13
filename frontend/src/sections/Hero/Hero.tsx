import "./Hero.css";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__overlay" />

      <div className="container hero__content">
        <div className="hero__text">
          <span className="hero__eyebrow">
            CRIANDO SOLUÇÕES ROBUSTAS.
          </span>

          <h1 className="hero__title">
            <span>JOÃO GABRIEL.</span>
            <span>DESENVOLVEDOR FULL STACK.</span>
          </h1>

          <p className="hero__description">
            Desenvolvimento de sistemas escaláveis, banco de dados e
            automação de processos com precisão.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="hero__button">
              VER PROJETOS
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

        <div className="hero__scroll">
          <span>SCROLL</span>

          <div className="hero__scroll-line" />
        </div>
      </div>
    </section>
  );
}