import "./AboutContact.css";

export function AboutContact() {
  return (
    <section className="about-contact section" id="about">
      <div className="container">
        <div className="about-contact__heading">
          <span className="about-contact__eyebrow">
            SOBRE & CONTATO
          </span>

          <h2 className="about-contact__title">
            DISCIPLINA, TECNOLOGIA E RESOLUÇÃO DE PROBLEMAS.
          </h2>
        </div>

        <div className="about-contact__grid">
          <div className="about-contact__about">
            <div className="about-contact__photo">
              <img
                src="/images/profile.jpg"
                alt="Foto profissional de João Gabriel"
              />
            </div>

            <div className="about-contact__text">
              <h3>JOÃO GABRIEL</h3>

              <p>
                Sou estudante de Análise e Desenvolvimento de Sistemas, com
                foco em desenvolvimento back-end, automação de processos,
                bancos de dados e construção de aplicações full stack.
              </p>

              <p>
                Minha experiência em ambientes de alta responsabilidade
                contribuiu para desenvolver disciplina, resiliência, foco e
                capacidade de resolver problemas sob pressão.
              </p>

              <p>
                Atualmente, busco aplicar essas competências em projetos de
                software, automação e soluções escaláveis.
              </p>
            </div>
          </div>

          <div className="about-contact__contact" id="contact">
            <div className="contact-panel">
              <span className="contact-panel__eyebrow">
                CONTATO
              </span>

              <h3>VAMOS CONSTRUIR ALGO JUNTOS.</h3>

              <form className="contact-form">
                <div className="contact-form__field">
                  <label htmlFor="name">
                    Nome
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="email">
                    E-mail
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seuemail@exemplo.com"
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="message">
                    Mensagem
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Escreva sua mensagem"
                  />
                </div>

                <button
                  type="submit"
                  className="contact-form__button"
                >
                  ENVIAR MENSAGEM
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}