import "./AboutContact.css";

export function AboutContact() {
  return (
    <section className="about-contact section" id="contact">
      <div className="container">
        <div className="about-contact__heading">
          <span className="about-contact__eyebrow">
            CONTATO
          </span>

          <h2 className="about-contact__title">
            VAMOS CONSTRUIR ALGO JUNTOS.
          </h2>

          <p className="about-contact__description">
            Tem um projeto, oportunidade ou ideia em mente?
            Entre em contato comigo.
          </p>
        </div>

        <div className="about-contact__contact">
          <div className="contact-panel">
            <form
              className="contact-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="contact-form__field">
                <label htmlFor="name">
                  Nome
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  autoComplete="name"
                  required
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
                  autoComplete="email"
                  required
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
                  required
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
    </section>
  );
}