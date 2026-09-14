import { useEffect, useState } from "react";
import "./Projects.css";

type Project = {
  id: number;
  title: string;
  description: string;
  details: string;
  image: string;
  techs: string[];
  github?: string;
  link?: string;
  video?: string;
  containImage?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Inventário Doméstico",
    description:
      "Plataforma para controle de itens, organização de dados e visualização de informações de forma centralizada.",
    details:
      "Aplicação desenvolvida para organizar e controlar itens de um ambiente doméstico de forma centralizada.\n\nO projeto envolve organização de dados, persistência de informações e uma interface voltada para consulta e gerenciamento dos registros.",
    image: "/images/projects/inventario.jpg",
    techs: ["Python", "PostgreSQL", "Docker"],
    github: "#",
  },
  {
    id: 2,
    title: "Monitoramento Bancário",
    description:
      "Automação para extração, organização e análise de despesas bancárias com integração entre serviços.",
    details:
      "Projeto de automação voltado para coleta e organização de informações financeiras.\n\nA proposta é reduzir tarefas manuais e permitir que os dados sejam processados e estruturados automaticamente para análise.",
    image: "/images/projects/bancario.jpg",
    techs: ["Python", "Gmail API", "Automação"],
    github: "#",
  },
  {
    id: 3,
    title: "Automação de Rotinas Corporativas",
    description:
      "Fluxos automatizados para reduzir tarefas repetitivas e melhorar a eficiência de processos internos.",
    details:
      "Conjunto de automações criado para reduzir atividades repetitivas em processos corporativos.\n\nOs fluxos foram pensados para aumentar produtividade, padronizar tarefas e diminuir intervenções manuais.",
    image: "/images/projects/automacao.jpg",
    techs: ["Power Automate", "RPA", "Automação"],
    github: "#",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, []);

  return (
    <section
      className="projects section"
      id="projects"
    >
      <div className="container">
        <div className="projects__heading">
          <span className="projects__eyebrow">
            PORTFÓLIO
          </span>

          <h2 className="projects__title">
            PROJETOS
          </h2>

          <p className="projects__description">
            Soluções desenvolvidas para resolver
            problemas reais com foco em automação,
            organização de dados e aplicações
            escaláveis.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.id}
            >
              <div className="project-card__image">
                <img
                  src={project.image}
                  alt={`Preview do projeto ${project.title}`}
                  loading="lazy"
                  className={
                    project.containImage
                      ? "project-card__image-contain"
                      : ""
                  }
                />

                <div className="project-card__overlay">
                  {project.details && (
                    <button
                      type="button"
                      className="project-card__action"
                      onClick={() =>
                        setSelectedProject(
                          project,
                        )
                      }
                      aria-label={`Ver detalhes técnicos de ${project.title}`}
                      title="Detalhes técnicos"
                    >
                      <span aria-hidden="true">
                        ≡
                      </span>
                    </button>
                  )}

                  {project.github &&
                    project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card__action"
                        aria-label={`Ver código de ${project.title}`}
                        title="Ver código"
                      >
                        <span aria-hidden="true">
                          &lt;/&gt;
                        </span>
                      </a>
                    )}

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-card__action"
                      aria-label={`Abrir ${project.title}`}
                      title="Abrir projeto"
                    >
                      <span aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  )}

                  {project.video && (
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noreferrer"
                      className="project-card__action"
                      aria-label={`Assistir demonstração de ${project.title}`}
                      title="Ver demonstração"
                    >
                      <span aria-hidden="true">
                        ▶
                      </span>
                    </a>
                  )}
                </div>
              </div>

              <div className="project-card__content">
                <span className="project-card__number">
                  {String(project.id).padStart(
                    2,
                    "0",
                  )}
                </span>

                <h3>{project.title}</h3>

                <p>
                  {project.description}
                </p>

                <ul className="project-card__techs">
                  {project.techs.map((tech) => (
                    <li key={tech}>
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="project-card__mobile-actions">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedProject(project)
                    }
                  >
                    Detalhes
                    <span>→</span>
                  </button>

                  {project.github &&
                    project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Código
                        <span>↗</span>
                      </a>
                    )}

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visitar
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="project-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setSelectedProject(null);
            }
          }}
        >
          <div
            className="project-modal__content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              type="button"
              className="project-modal__close"
              onClick={() =>
                setSelectedProject(null)
              }
              aria-label="Fechar detalhes do projeto"
            >
              ×
            </button>

            <div className="project-modal__image">
              <img
                src={selectedProject.image}
                alt={`Preview do projeto ${selectedProject.title}`}
                className={
                  selectedProject.containImage
                    ? "project-modal__image-contain"
                    : ""
                }
              />
            </div>

            <div className="project-modal__body">
              <span className="project-modal__eyebrow">
                DETALHES TÉCNICOS
              </span>

              <h3 id="project-modal-title">
                {selectedProject.title}
              </h3>

              <div className="project-modal__description">
                {selectedProject.details
                  .split("\n\n")
                  .map(
                    (
                      paragraph,
                      index,
                    ) => (
                      <p key={index}>
                        {paragraph}
                      </p>
                    ),
                  )}
              </div>

              <div className="project-modal__stack">
                <h4>
                  Tecnologias utilizadas
                </h4>

                <ul>
                  {selectedProject.techs.map(
                    (tech) => (
                      <li key={tech}>
                        {tech}
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div className="project-modal__links">
                {selectedProject.github &&
                  selectedProject.github !==
                    "#" && (
                    <a
                      href={
                        selectedProject.github
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver código
                    </a>
                  )}

                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir projeto
                  </a>
                )}

                {selectedProject.video && (
                  <a
                    href={selectedProject.video}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver demonstração
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}