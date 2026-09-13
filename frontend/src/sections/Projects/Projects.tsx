import "./Projects.css";

const projects = [
  {
    title: "Sistema de Inventário Doméstico",
    description:
      "Plataforma para controle de itens, organização de dados e visualização de informações de forma centralizada.",
    image: "/images/projects/inventario.jpg",
    stack: ["Docker", "Python", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Monitoramento Bancário",
    description:
      "Automação para extração, organização e análise de despesas bancárias com integração entre serviços.",
    image: "/images/projects/bancario.jpg",
    stack: ["Python", "Gmail API", "Arquitetura"],
    github: "#",
    demo: "#",
  },
  {
    title: "Automação de Rotinas Corporativas",
    description:
      "Fluxos automatizados para reduzir tarefas repetitivas e melhorar a eficiência de processos internos.",
    image: "/images/projects/automacao.jpg",
    stack: ["Power Automate", "RPA"],
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects__heading">
          <span className="projects__eyebrow">PORTFÓLIO</span>

          <h2 className="projects__title">
            PROJETOS
          </h2>

          <p className="projects__description">
            Soluções desenvolvidas para resolver problemas reais com foco em
            automação, organização de dados e aplicações escaláveis.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card__image">
                <img
                  src={project.image}
                  alt={`Preview do projeto ${project.title}`}
                />
              </div>

              <div className="project-card__content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <ul className="project-card__stack">
                  {project.stack.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>

                <div className="project-card__actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver projeto
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}