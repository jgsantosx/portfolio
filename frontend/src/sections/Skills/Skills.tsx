import "./Skills.css";

const skills = [
  {
    name: "Python",
    level: 85,
  },
  {
    name: "PostgreSQL",
    level: 80,
  },
  {
    name: "Docker",
    level: 75,
  },
  {
    name: "WSL2",
    level: 80,
  },
  {
    name: "Android",
    level: 65,
  },
  {
    name: "Power Automate",
    level: 75,
  },
  {
    name: "Selenium",
    level: 70,
  },
  {
    name: "SQL",
    level: 85,
  },
];

export function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="skills__heading">
          <span className="skills__eyebrow">
            STACK
          </span>

          <h2 className="skills__title">
            HABILIDADES PRINCIPAIS
          </h2>

          <p className="skills__description">
            Tecnologias e ferramentas que utilizo para desenvolver,
            automatizar e estruturar soluções.
          </p>
        </div>

        <div className="skills__grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.name}>
              <div className="skill-card__icon">
                <span>
                  {skill.name.charAt(0)}
                </span>
              </div>

              <h3>{skill.name}</h3>

              <div className="skill-card__progress">
                <div
                  className="skill-card__progress-bar"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <span className="skill-card__level">
                {skill.level}%
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}