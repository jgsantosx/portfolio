import "./Experience.css";

const experiences = [
  {
    id: 1,
    period: "2025 — Atual",
    role: "Estagiário Desenvolvimento RPA",
    company: "Priner",
    current: true,
    description:
      "Desenvolvimento de automações e aplicações web, integração entre sistemas, consumo de APIs REST, manipulação e processamento de dados, além de apoio no levantamento de requisitos, realização de testes e elaboração de documentação técnica.",
    icon: "💻",
  },
  {
    id: 2,
    period: "2025 — 2026",
    role: "Estagiário de TI",
    company: "Lions Club",
    current: false,
    description:
      "Suporte e orientação a usuários idosos e pessoas com deficiência visual na utilização de internet, smartphones, Windows e Pacote Office, prestando auxílio no uso de ferramentas digitais e na resolução de dúvidas relacionadas à tecnologia.",
    icon: "⚙️",
  },
];

const education = [
  {
    id: 1,
    period: "2024 — 2026",
    course: "Análise e Desenvolvimento de Sistemas",
    institution: "Universidade Veiga de Almeida",
    status: "Em andamento",
    description:
      "Formação voltada para desenvolvimento de software, banco de dados, engenharia de sistemas e construção de aplicações.",
    icon: "🎓",
  },
  {
    id: 2,
    period: "2016 — 2019",
    course: "Técnico em Desenvolvimento Web",
    institution: "Colégio Santo Inácio",
    status: "Concluído",
    description:
      "Formação técnica voltada ao desenvolvimento de aplicações web, com conhecimentos em PHP, Laravel, SQL, HTML, CSS e JavaScript. Durante o curso, também foram abordados fundamentos de redes de computadores, arquitetura de computadores, banco de dados e conceitos relacionados ao desenvolvimento e funcionamento de sistemas.",
    icon: "🎓",
  },
];

export function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="experience__heading">
          <span className="experience__badge">
            &lt; TRAJETÓRIA /&gt;
          </span>

          <h2 className="experience__title">
            EXPERIÊNCIA & FORMAÇÃO
          </h2>

          <p className="experience__description">
            Projetos, estudos e experiências que fazem parte da minha evolução
            profissional e técnica.
          </p>
        </div>

        <div className="experience__columns">
          <div className="experience__column">
            <h3 className="experience__column-title">
              EXPERIÊNCIA
            </h3>

            <div className="timeline">
              {experiences.map((item) => (
                <article
                  className="timeline__item"
                  key={item.id}
                >
                  <span
                    className="timeline__node"
                    aria-hidden="true"
                  />

                  <div className="timeline__card">
                    <div className="timeline__top">
                      <div className="timeline__identity">
                        <div
                          className="timeline__icon"
                          aria-hidden="true"
                        >
                          {item.icon}
                        </div>

                        <div>
                          <h4 className="timeline__role">
                            {item.role}
                          </h4>

                          <span className="timeline__company">
                            @ {item.company}
                          </span>
                        </div>
                      </div>

                      <div className="timeline__badges">
                        <span className="timeline__period">
                          {item.period}
                        </span>

                        {item.current && (
                          <span className="timeline__current">
                            <span
                              className="timeline__pulse"
                              aria-hidden="true"
                            />

                            Atual
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="timeline__description">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="experience__column">
            <h3 className="experience__column-title">
              FORMAÇÃO
            </h3>

            <div className="timeline">
              {education.map((item) => (
                <article
                  className="timeline__item"
                  key={item.id}
                >
                  <span
                    className="timeline__node"
                    aria-hidden="true"
                  />

                  <div className="timeline__card">
                    <div className="timeline__top">
                      <div className="timeline__identity">
                        <div
                          className="timeline__icon"
                          aria-hidden="true"
                        >
                          {item.icon}
                        </div>

                        <div>
                          <h4 className="timeline__role">
                            {item.course}
                          </h4>

                          <span className="timeline__company">
                            {item.institution}
                          </span>
                        </div>
                      </div>

                      <div className="timeline__badges">
                        <span className="timeline__period">
                          {item.period}
                        </span>

                        <span className="timeline__status">
                          {item.status}
                        </span>
                      </div>
                    </div>

                    <p className="timeline__description">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}