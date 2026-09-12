import "./Projects.css";

const projects = [
  {
    title: "E-commerce Full Stack",
    description:
      "Aplicação completa de e-commerce com catálogo de produtos, autenticação, carrinho e integração com backend.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    type: "Full Stack",
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Sistema de Gestão",
    description:
      "Dashboard para gerenciamento de dados, usuários e operações com API REST e banco de dados.",
    stack: ["React", "Node.js", "Express", "Prisma"],
    type: "Full Stack",
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "API REST",
    description:
      "API estruturada com autenticação, validação de dados e persistência em banco relacional.",
    stack: ["Node.js", "Express", "JWT", "PostgreSQL"],
    type: "Backend",
    github: "https://github.com/",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects__heading">
          <span className="projects__eyebrow">Projetos</span>

          <h2 className="projects__title">
            Projetos que demonstram minhas habilidades na prática.
          </h2>

          <p className="projects__description">
            Alguns projetos desenvolvidos para praticar arquitetura,
            desenvolvimento frontend, backend e integração com banco de dados.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card__top">
                <span className="project-card__type">
                  {project.type}
                </span>

                <span className="project-card__number">
                  0{projects.indexOf(project) + 1}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p className="project-card__description">
                {project.description}
              </p>

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
                  Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}