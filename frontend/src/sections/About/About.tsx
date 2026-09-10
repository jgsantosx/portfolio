import "./About.css";

export function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__content">
        <div className="about__heading">
          <span className="about__eyebrow">Sobre mim</span>

          <h2 className="about__title">
            Desenvolvendo aplicações completas, do frontend ao backend.
          </h2>
        </div>

        <div className="about__body">
          <div className="about__text">
            <p>
              Sou desenvolvedor Full Stack focado na construção de aplicações
              web modernas, organizadas e escaláveis.
            </p>

            <p>
              Trabalho com tecnologias de frontend e backend, buscando criar
              interfaces responsivas, APIs bem estruturadas e integrações com
              bancos de dados.
            </p>

            <p>
              Também valorizo boas práticas de desenvolvimento, organização de
              código, versionamento com Git e evolução contínua através de
              projetos práticos.
            </p>
          </div>

          <div className="about__highlights">
            <article className="about__card">
              <span>01</span>
              <h3>Frontend</h3>
              <p>
                Interfaces modernas, responsivas e focadas em boa experiência
                de uso.
              </p>
            </article>

            <article className="about__card">
              <span>02</span>
              <h3>Backend</h3>
              <p>
                APIs, regras de negócio, autenticação e integração com banco de
                dados.
              </p>
            </article>

            <article className="about__card">
              <span>03</span>
              <h3>Full Stack</h3>
              <p>
                Visão completa da aplicação, conectando frontend, backend e
                infraestrutura.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}