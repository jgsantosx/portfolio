import {
  useEffect,
  useState,
  type CSSProperties,
} from "react";

import "./Skills.css";

type Category =
  | "all"
  | "frontend"
  | "backend"
  | "database"
  | "automation"
  | "tools";

type Skill = {
  name: string;
  category: Exclude<Category, "all">;
  icon?: string;
  short?: string;
  color: string;
};

const skills: Skill[] = [
  {
    name: "HTML5",
    category: "frontend",
    icon: "devicon-html5-plain",
    color: "#E34F26",
  },
  {
    name: "CSS3",
    category: "frontend",
    icon: "devicon-css3-plain",
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: "devicon-javascript-plain",
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: "devicon-typescript-plain",
    color: "#3178C6",
  },
  {
    name: "React",
    category: "frontend",
    icon: "devicon-react-original",
    color: "#61DAFB",
  },
  {
    name: "Vite",
    category: "frontend",
    icon: "devicon-vitejs-plain",
    color: "#646CFF",
  },
  {
  name: "Django",
  category: "backend",
  icon: "devicon-django-plain",
  color: "#44B78B",
},
{
  name: "Java",
  category: "backend",
  icon: "devicon-java-plain",
  color: "#ED8B00",
},
{
  name: "Spring Boot",
  category: "backend",
  icon: "devicon-spring-original",
  color: "#6DB33F",
},
  {
    name: "Node.js",
    category: "backend",
    icon: "devicon-nodejs-plain",
    color: "#5FA04E",
  },
  {
    name: "Express",
    category: "backend",
    icon: "devicon-express-original",
    color: "#F9FAFB",
  },
  {
    name: "Python",
    category: "backend",
    icon: "devicon-python-plain",
    color: "#3776AB",
  },

  {
    name: "PostgreSQL",
    category: "database",
    icon: "devicon-postgresql-plain",
    color: "#4169E1",
  },
  {
  name: "MySQL",
  category: "database",
  icon: "devicon-mysql-plain",
  color: "#4479A1",
  },
  {
    name: "SQL",
    category: "database",
    short: "SQL",
    color: "#F5A623",
  },

  {
    name: "Power Automate",
    category: "automation",
    short: "PA",
    color: "#0066FF",
  },
  {
    name: "Selenium",
    category: "automation",
    icon: "devicon-selenium-original",
    color: "#43B02A",
  },

  {
    name: "Docker",
    category: "tools",
    icon: "devicon-docker-plain",
    color: "#2496ED",
  },
  {
    name: "Git",
    category: "tools",
    icon: "devicon-git-plain",
    color: "#F05032",
  },
  {
    name: "GitHub",
    category: "tools",
    icon: "devicon-github-original",
    color: "#F9FAFB",
  },
  {
    name: "Linux / WSL2",
    category: "tools",
    icon: "devicon-linux-plain",
    color: "#FCC624",
  },
  {
    name: "Android",
    category: "tools",
    icon: "devicon-android-plain",
    color: "#3DDC84",
  },
];

const categories: {
  key: Category;
  label: string;
}[] = [
  {
    key: "all",
    label: "Todos",
  },
  {
    key: "frontend",
    label: "Frontend",
  },
  {
    key: "backend",
    label: "Backend",
  },
  {
    key: "database",
    label: "Banco de dados",
  },
  {
    key: "automation",
    label: "Automação",
  },
  {
    key: "tools",
    label: "Ferramentas",
  },
  
];

const MOBILE_INITIAL = 8;

export function Skills() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("all");

  const [mobileExpanded, setMobileExpanded] =
    useState(false);

  const [isMobile, setIsMobile] =
    useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter(
          (skill) =>
            skill.category === activeCategory,
        );

  const displayedSkills =
    isMobile &&
    !mobileExpanded &&
    filteredSkills.length > MOBILE_INITIAL
      ? filteredSkills.slice(0, MOBILE_INITIAL)
      : filteredSkills;

  const getCategoryCount = (
    category: Category,
  ) => {
    if (category === "all") {
      return skills.length;
    }

    return skills.filter(
      (skill) => skill.category === category,
    ).length;
  };

  const handleCategoryChange = (
    category: Category,
  ) => {
    setActiveCategory(category);
    setMobileExpanded(false);
  };

  return (
    <section
      className="skills section"
      id="skills"
    >
      <div className="container">
        <div className="skills__heading">
          <span className="skills__eyebrow">
            STACK
          </span>

          <h2 className="skills__title">
            HABILIDADES PRINCIPAIS
          </h2>

          <p className="skills__description">
            Tecnologias e ferramentas utilizadas no
            desenvolvimento de aplicações, automações
            e soluções full stack.
          </p>
        </div>

        <div
          className="skills__categories"
          aria-label="Filtrar habilidades por categoria"
        >
          {categories.map((category) => {
            const active =
              activeCategory === category.key;

            return (
              <button
                type="button"
                key={category.key}
                className={`skills__category ${
                  active
                    ? "skills__category--active"
                    : ""
                }`}
                onClick={() =>
                  handleCategoryChange(
                    category.key,
                  )
                }
                aria-pressed={active}
              >
                <span>
                  {category.label}
                </span>

                <span className="skills__category-count">
                  {getCategoryCount(
                    category.key,
                  )}
                </span>
              </button>
            );
          })}
        </div>

        <p className="skills__counter">
          {filteredSkills.length}{" "}
          {filteredSkills.length === 1
            ? "tecnologia"
            : "tecnologias"}
        </p>

        <div className="skills__grid">
          {displayedSkills.map(
            (skill, index) => (
              <article
                className="skill-card"
                key={skill.name}
                style={
                  {
                    "--skill-color":
                      skill.color,
                    "--skill-delay": `${index * 35}ms`,
                  } as CSSProperties
                }
              >
                <div className="skill-card__glow" />

                <div className="skill-card__accent" />

                <div className="skill-card__icon">
                  {skill.icon ? (
                    <i
                      className={skill.icon}
                      style={{
                        color: skill.color,
                      }}
                      aria-hidden="true"
                    />
                  ) : (
                    <span
                      style={{
                        color: skill.color,
                      }}
                    >
                      {skill.short}
                    </span>
                  )}
                </div>

                <h3 className="skill-card__name">
                  {skill.name}
                </h3>

                <div className="skill-card__bar">
                  <span />
                </div>
              </article>
            ),
          )}
        </div>

        {isMobile &&
          filteredSkills.length >
            MOBILE_INITIAL && (
            <div className="skills__more">
              <button
                type="button"
                className="skills__more-button"
                onClick={() =>
                  setMobileExpanded(
                    (value) => !value,
                  )
                }
              >
                {mobileExpanded
                  ? "Ver menos"
                  : `Ver mais ${
                      filteredSkills.length -
                      MOBILE_INITIAL
                    }`}
              </button>
            </div>
          )}
      </div>
    </section>
  );
}