import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Vite",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "JWT",
      "Zod",
    ],
  },
  {
    title: "Banco de Dados",
    skills: [
      "PostgreSQL",
      "Prisma",
      "SQL",
    ],
  },
  {
    title: "Ferramentas",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "VS Code",
      "Postman",
    ],
  },
];

export function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="skills__heading">
          <span className="skills__eyebrow">Skills</span>

          <h2 className="skills__title">
            Tecnologias que utilizo no desenvolvimento de aplicações.
          </h2>

          <p className="skills__description">
            Minha stack cobre desde a construção da interface até APIs,
            bancos de dados e ferramentas utilizadas no fluxo de
            desenvolvimento.
          </p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <article className="skills__card" key={group.title}>
              <h3>{group.title}</h3>

              <ul className="skills__list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}