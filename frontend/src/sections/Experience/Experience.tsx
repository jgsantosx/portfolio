import "./Experience.css";

const experiences = [
  {
    period: "2026 — Atual",
    role: "Desenvolvedor Full Stack",
    company: "Projetos pessoais",
    description:
      "Desenvolvimento de aplicações web completas, trabalhando com frontend, backend, APIs REST, banco de dados e versionamento com Git.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
  },
  {
    period: "2025 — 2026",
    role: "Desenvolvimento Web",
    company: "Estudos e projetos",
    description:
      "Construção de projetos para desenvolvimento de habilidades em interfaces responsivas, lógica de programação e integração entre aplicações.",
    technologies: ["JavaScript", "HTML", "CSS", "Git"],
  },
];

export function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="experience__heading">
          <span className="experience__eyebrow">Experiência</span>

          <h2 className="experience__title">
            Minha trajetória no desenvolvimento.
          </h2>

          <p className="experience__description">
            Experiências, estudos e projetos que fazem parte da minha evolução
            como desenvolvedor.
          </p>
        </div>

        <div className="experience__timeline">
          {experiences.map((experience) => (
            <article
              className="experience__item"
              key={`${experience.role}-${experience.period}`}
            >
              <div className="experience__period">
                {experience.period}
              </div>

              <div className="experience__content">
                <span className="experience__company">
                  {experience.company}
                </span>

                <h3>{experience.role}</h3>

                <p>{experience.description}</p>

                <ul className="experience__technologies">
                  {experience.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}