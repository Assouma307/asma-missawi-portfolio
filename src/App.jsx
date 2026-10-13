
import { useState } from "react";
import "./App.css";

const content = {
  fr: {
    nav: ["Accueil", "À propos", "Compétences", "Projets", "Contact"],
    available: "Ouverte aux opportunités",
    greeting: "Bonjour, je suis",
    name: "Asma Missawi",
    role: "Développeuse Odoo & ERP",
    description:
      "Je conçois et développe des solutions métier, des modules Odoo personnalisés et des applications web pour optimiser les processus des entreprises.",
    contact: "Me contacter",
    projectsButton: "Découvrir mes projets",
    aboutLabel: "À PROPOS",
    aboutTitle: "Transformer les besoins métier en solutions techniques",
    aboutText:
      "Ingénieure en informatique spécialisée dans le développement Odoo, j'interviens sur la personnalisation des ERP, l'automatisation des processus et le développement de fonctionnalités adaptées aux besoins métier.",
    experience: "7 ans d'expérience",
    experienceText: "Développement Odoo et solutions ERP",
    skillsLabel: "COMPÉTENCES",
    skillsTitle: "Mes outils au quotidien",
    skillsText:
      "Des compétences techniques pour développer, intégrer et maintenir des applications métier.",
    projectsLabel: "PROJETS",
    projectsTitle: "Quelques réalisations",
    projectsText:
      "Des solutions pensées pour répondre à des besoins métier concrets.",
    project1: "Personnalisation Odoo",
    project1Text:
      "Développement de modules personnalisés, adaptation des vues et automatisation des processus métier.",
    project2: "E-commerce",
    project2Text:
      "Personnalisation de sites e-commerce Odoo, amélioration de l'expérience utilisateur et intégration de fonctionnalités.",
    project3: "Automatisation ERP",
    project3Text:
      "Automatisation des mises à jour de prix fournisseurs et optimisation des traitements de données.",
    more: "En savoir plus",
    contactLabel: "CONTACT",
    contactTitle: "Un projet en tête ?",
    contactText:
      "Vous cherchez une développeuse Odoo ou souhaitez collaborer sur un projet ? Échangeons !",
    email: "M'envoyer un e-mail",
    footer: "Conçu et développé par Asma Missawi.",
    codeFooter: "Prête à créer",
scrollText: "Défiler pour explorer",
navLabel: "Navigation principale",
  },
  en: {
    nav: ["Home", "About", "Skills", "Projects", "Contact"],
    available: "Open to opportunities",
    greeting: "Hello, I'm",
    name: "Asma Missawi",
    role: "Odoo & ERP Developer",
    description:
      "I design and develop business solutions, custom Odoo modules, and web applications to help companies optimize their processes.",
    contact: "Contact me",
    projectsButton: "Explore my projects",
    aboutLabel: "ABOUT",
    aboutTitle: "Turning business needs into technical solutions",
    aboutText:
      "I'm a computer science engineer specializing in Odoo development, ERP customization, process automation, and features tailored to business requirements.",
    experience: "7 years of experience",
    experienceText: "Odoo development and ERP solutions",
    skillsLabel: "SKILLS",
    skillsTitle: "Tools I work with",
    skillsText:
      "Technical skills to build, integrate, and maintain business applications.",
    projectsLabel: "PROJECTS",
    projectsTitle: "Selected projects",
    projectsText:
      "Solutions designed to address real business needs.",
    project1: "Odoo Customization",
    project1Text:
      "Custom module development, view customization, and business process automation.",
    project2: "E-commerce",
    project2Text:
      "Odoo e-commerce customization, user experience improvements, and feature integration.",
    project3: "ERP Automation",
    project3Text:
      "Supplier price update automation and data processing optimization.",
    more: "Learn more",
    contactLabel: "CONTACT",
    contactTitle: "Have a project in mind?",
    contactText:
      "Looking for an Odoo developer or interested in collaborating? Let's talk!",
    email: "Send me an email",
    footer: "Designed and developed by Asma Missawi.",
    codeFooter: "Ready to build",
scrollText: "Scroll to explore",
navLabel: "Main navigation",
  },
};

const skills = [
  "Python",
  "Odoo",
  "PostgreSQL",
  "JavaScript",
  "XML / QWeb",
  "HTML & CSS",
  "Git",
  "React",
  "Node.js",
];

function App() {
  const [language, setLanguage] = useState("fr");
  const t = content[language];

  const projects = [
    {
      number: "01",
      title: t.project1,
      description: t.project1Text,
      tags: ["Python", "Odoo", "XML"],
    },
    {
      number: "02",
      title: t.project2,
      description: t.project2Text,
      tags: ["Odoo", "JavaScript", "CSS"],
    },
    {
      number: "03",
      title: t.project3,
      description: t.project3Text,
      tags: ["Python", "PostgreSQL", "Automation"],
    },
  ];

  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Asma Missawi - Home">
          asma<span>.</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {t.nav.map((item, index) => {
            const sections = [
              "#home",
              "#about",
              "#skills",
              "#projects",
              "#contact",
            ];

            return (
              <a key={item} href={sections[index]}>
                {item}
              </a>
            );
          })}
        </nav>

        <button
          className="language-switch"
          onClick={() =>
            setLanguage((current) => (current === "fr" ? "en" : "fr"))
          }
          aria-label="Change language"
        >
          {language === "fr" ? "EN ↗" : "FR ↗"}
        </button>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              {t.available}
            </div>

            <p className="eyebrow">{t.greeting}</p>
            <h1>
              {t.name.split(" ")[0]}
              <br />
              <span>{t.name.split(" ").slice(1).join(" ")}.</span>
            </h1>

            <h2>{t.role}</h2>
            <p className="hero-description">{t.description}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                {t.contact} <span>↗</span>
              </a>
              <a className="button button-secondary" href="#projects">
                {t.projectsButton}
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Assouma307"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/asma-missawi-ab6340104/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Developer illustration">
            <div className="visual-glow" />
            <div className="code-card">
              <div className="code-card-header">
                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span>developer.py</span>
              </div>
              <div className="code-content">
                <p><span className="code-purple">class</span> Developer:</p>
                <p className="indent">
                  name = <span className="code-green">"Asma"</span>
                </p>
                <p className="indent">
                  role = <span className="code-green">"Odoo Dev"</span>
                </p>
                <p className="indent">
                  skills = [<span className="code-orange">"Python"</span>,
                </p>
                <p className="indent">
                  &nbsp;&nbsp;<span className="code-orange">"ERP"</span>,
                  <span className="code-orange"> "Web"</span>]
                </p>
                <p className="code-comment"># Always learning...</p>
                <p>
                  <span className="code-purple">return</span>{" "}
                  <span className="code-green">solutions</span>
                </p>
              </div>
              <div className="code-card-footer">
                <span className="status-dot" /> Ready to build
              </div>
            </div>
            <div className="floating-tag tag-top">{"{ }"} Python</div>
            <div className="floating-tag tag-bottom">✳ Odoo ERP</div>
          </div>

          <a className="scroll-indicator" href="#about">
            ↓ <span>Scroll to explore</span>
          </a>
        </section>

        <section className="section about-section" id="about">
          <p className="section-label">{t.aboutLabel}</p>
          <h2 className="section-title">{t.aboutTitle}</h2>
          <p className="section-description">{t.aboutText}</p>

          <div className="experience-card">
            <span className="experience-number">7<span>+</span></span>
            <div>
              <h3>{t.experience}</h3>
              <p>{t.experienceText}</p>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <p className="section-label">{t.skillsLabel}</p>
          <h2 className="section-title">{t.skillsTitle}</h2>
          <p className="section-description">{t.skillsText}</p>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                <span className="skill-symbol">✳</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <p className="section-label">{t.projectsLabel}</p>
          <h2 className="section-title">{t.projectsTitle}</h2>
          <p className="section-description">{t.projectsText}</p>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-arrow">↗</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <p className="section-label">{t.contactLabel}</p>
          <h2 className="section-title">{t.contactTitle}</h2>
          <p className="section-description">{t.contactText}</p>
          <a
            className="button button-primary"
            href="mailto:missawiasma2019@gmail.com"
          >
            {t.email} <span>↗</span>
          </a>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          asma<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} {t.footer}</p>
        <a href="#home" className="back-to-top">
          ↑
        </a>
      </footer>
    </div>
  );
}

export default App;