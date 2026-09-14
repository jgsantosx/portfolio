import "./About.css";

const focusTechnologies = [
  {
    name: "React",
    icon: "devicon-react-original",
  },
  {
    name: "Java",
    icon: "devicon-java-plain",
  },
  {
    name: "Spring Boot",
    icon: "devicon-spring-original",
  },
  {
    name: "PostgreSQL",
    icon: "devicon-postgresql-plain",
  },
];

export function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__grid">
          {/* CARD PRINCIPAL */}

          <article className="about-card about-card--profile">
            <div className="about-card__profile-glow" />

            <div className="about-card__photo-wrapper">
              <div className="about-card__photo-glow" />

              <img
                src="/images/profile.jpg"
                alt="Foto profissional de João Gabriel"
                className="about-card__photo"
              />

              <span
                className="about-card__status-dot"
                aria-hidden="true"
              />
            </div>

            <div className="about-card__profile-content">
              <span className="about-card__eyebrow">
                PERFIL
              </span>

              <h2 className="about-card__name">
                JOÃO GABRIEL
              </h2>

              <p className="about-card__role">
                DESENVOLVEDOR FULL STACK
              </p>

              <div className="about-card__metadata">
                <span>
                  Rio de Janeiro, Brasil
                </span>

                <span className="about-card__available">
                  <span className="about-card__available-dot" />
                  Disponível
                </span>
              </div>

              <div className="about-card__actions">
                <a
                  href="/cv-joao.pdf"
                  download
                  className="about-card__button about-card__button--primary"
                >
                  Download CV
                </a>

                <a
                  href="#contact"
                  className="about-card__button about-card__button--secondary"
                >
                  Entrar em contato
                </a>
              </div>
            </div>

            <span
              className="about-card__decor"
              aria-hidden="true"
            >
              {"</>"}
            </span>
          </article>

          {/* SOBRE MIM */}

          <article className="about-card about-card--bio">
            <span className="about-card__eyebrow">
              SOBRE MIM
            </span>

            <h3>
              Tecnologia, disciplina e resolução de problemas.
            </h3>

            <p>
              Tenho foco em desenvolvimento
              full stack, automação de processos e banco
              de dados.
            </p>

            <p>
              Busco desenvolver soluções funcionais,
              organizadas e escaláveis, evoluindo
              constantemente minhas habilidades técnicas
              através de projetos práticos.
            </p>
          </article>

          {/* FOCO ATUAL */}

          <article className="about-card about-card--focus">
            <div className="about-card__focus-header">
              <div>
                <span className="about-card__eyebrow">
                  FOCO ATUAL
                </span>

                <h3>
                  Construindo minha stack Full Stack
                </h3>
              </div>

              <span
                className="about-card__focus-symbol"
                aria-hidden="true"
              >
                +
              </span>
            </div>

            <div className="about-card__technologies">
              {focusTechnologies.map((technology) => (
                <div
                  className="about-card__technology"
                  key={technology.name}
                >
                  <i
                    className={technology.icon}
                    aria-hidden="true"
                  />

                  <span>
                    {technology.name}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}