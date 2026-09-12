import "./Contact.css";

export function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container contact__content">
        <div className="contact__heading">
          <span className="contact__eyebrow">Contato</span>

          <h2 className="contact__title">
            Vamos conversar sobre oportunidades e projetos.
          </h2>

          <p className="contact__description">
            Estou disponível para oportunidades profissionais, projetos e
            colaborações. Entre em contato pelos canais abaixo.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__item">
              <span>E-mail</span>

              <a href="mailto:seuemail@email.com">
                seuemail@email.com
              </a>
            </div>

            <div className="contact__item">
              <span>LinkedIn</span>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/seuusuario
              </a>
            </div>

            <div className="contact__item">
              <span>GitHub</span>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                github.com/seuusuario
              </a>
            </div>
          </div>

          <div className="contact__cta">
            <h3>Tem uma oportunidade?</h3>

            <p>
              Se você procura um desenvolvedor Full Stack para integrar sua
              equipe ou colaborar em um projeto, ficarei feliz em conversar.
            </p>

            <a
              href="mailto:seuemail@email.com"
              className="contact__button"
            >
              Enviar e-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}