function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  const isDark = savedTheme === "dark";

  if (isDark) {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }

  const desktopToggle = document.getElementById("theme-toggle");
  const mobileToggle = document.getElementById("theme-toggle-mobile");

  if (desktopToggle) {
    desktopToggle.checked = isDark;
    desktopToggle.addEventListener("change", (e) => {
      const checked = e.target.checked;
      if (checked) {
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
      }
      if (mobileToggle) {
        mobileToggle.checked = checked;
      }
    });
  }

  if (mobileToggle) {
    mobileToggle.checked = isDark;
    mobileToggle.addEventListener("change", (e) => {
      const checked = e.target.checked;
      if (checked) {
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
      }
      if (desktopToggle) {
        desktopToggle.checked = checked;
      }
    });
  }
}

const translations = {
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "profile.greeting": "Hello, I'm",
    "profile.role": "Computer Science Student",

    "about.subtitle": "Get To Know More",
    "about.title": "About Me",
    "about.experienceTitle": "Experience",
    "about.experienceText": "3 years\nBasic Development",
    "about.educationTitle": "Education",
    "about.educationText": "Computer Science\nIUT Campus 3 IFS",
    "about.text":
      "My name is Clément, and I am currently pursuing a Bachelor’s degree in Computer Science at the IUT in Ifs (Campus 3). Passionate about programming and systems, I have grown since graduating from high school (with a focus on Math and Computer Science) to become a versatile future engineer. With proficiency in several programming languages (C, Python, Java, SQL, Shell), I am a persistent and curious individual, capable of working both independently and as part of a team. An avid tennis player and music lover, I enjoy tackling complex challenges and turning ideas into functional solutions.",

    "skills.subtitle": "Explore My",
    "skills.title": "Skills",
    "skills.devTitle": "Development",
    "skills.basic": "Basic",
    "skills.notion": "Notions",
    "skills.htmlTitle": "HTML",
    "skills.cssTitle": "CSS",
    "skills.pythonTitle": "Python",
    "skills.jsTitle": "JavaScript",
    "skills.sqlTitle": "SQL",
    "skills.bashTitle": "Bash / Shell",
    "skills.javaTitle": "Java",
    "skills.cTitle": "C",

    "projects.subtitle": "Discover my",
    "projects.title": "Projects",
    "projects.eduTitle": "ÉDUC’ARTE PROJECT",
    "projects.eduMeta": "Educational project • 2024–2025",
    "projects.eduText":
      "Creation of a web server to simulate the greenhouse effect, hosted on an ESP32 board. Use of humidity and temperature sensors, recording results in CSV.",
    "projects.eduTech": "Technologies: Python, HTML5, CSS3.",

    "projects.gameTitle": "UNIVERSITY PROJECT",
    "projects.gameMeta": "University project • 2025–2026",
    "projects.gameText":
      "Full implementation of the game engine and movement logic. Creation of an ergonomic console interface with input error handling, all in C.",
    "projects.gameTech":
      "Technologies: C, error handling, game engine architecture.",

    "projects.saeTitle": "UNIVERSITY PROJECT",
    "projects.saeMeta": "University project • 2025–2026",
    "projects.saeText":
      "Setup of a development workstation. Configuration of a virtual machine in dual boot Windows 10/Ubuntu with shared partition and user management.",
    "projects.saeTech":
      "Technologies: Windows 10, Ubuntu, virtualization, user management.",
    "projects.sae2Text": "Development of a web platform and database to support the Local Travel Plan (PLD) for a community of 53 municipalities. The project aims to identify the mobility needs of 73,700 residents while addressing energy transition challenges.",
    "projects.sae2Tech": "HTML5, CSS3, SQL, UI/UX Design, Project Management (Backlog).",

    "contact.subtitle": "Get in Touch",
    "contact.title": "Contact Me",
    "contact.linkedin": "LinkedIn",
  },
  fr: {
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.contact": "Contact",

    "profile.greeting": "Bonjour, je suis",
    "profile.role": "Étudiant en Informatique",

    "about.subtitle": "En savoir plus",
    "about.title": "À propos de moi",
    "about.experienceTitle": "Expérience",
    "about.experienceText": "3 ans\nDéveloppement de base",
    "about.educationTitle": "Formation",
    "about.educationText": "Informatique\nIUT Campus 3 IFS",
    "about.text":
      "Je m’appelle Clément et je prépare actuellement un BUT en informatique à l’IUT d’Ifs (Campus 3 de l'Université de Caen). Passionné par la programmation et les systèmes, j’ai évolué depuis le lycée (spécialités Mathématiques et Numérique & Sciences Informatiques) pour devenir un futur ingénieur polyvalent. À l’aise avec plusieurs langages (C, Python, Java, SQL, Shell), je suis persévérant et curieux, capable de travailler aussi bien en autonomie qu’en équipe. Joueur de tennis et amateur de musique, j’aime relever des défis complexes et transformer des idées en solutions fonctionnelles.",

    "skills.subtitle": "Découvrez mes",
    "skills.title": "Compétences",
    "skills.devTitle": "Développement",
    "skills.basic": "Bases",
    "skills.notion": "Notions",
    "skills.htmlTitle": "HTML",
    "skills.cssTitle": "CSS",
    "skills.pythonTitle": "Python",
    "skills.jsTitle": "JavaScript",
    "skills.sqlTitle": "SQL",
    "skills.bashTitle": "Bash / Shell",
    "skills.javaTitle": "Java",
    "skills.cTitle": "C",

    "projects.subtitle": "Découvrez mes",
    "projects.title": "Projets",
    "projects.eduTitle": "PROJET ÉDUC’ARTE",
    "projects.eduMeta": "Projet pédagogique • 2024–2025",
    "projects.eduText":
      "Création d’un serveur web pour simuler l’effet de serre, hébergé sur une carte ESP32. Utilisation de capteurs d’humidité et de température, enregistrement des résultats en CSV.",
    "projects.eduTech": "Technologies : Python, HTML5, CSS3.",

    "projects.gameTitle": "PROJET UNIVERSITAIRE",
    "projects.gameMeta": "Projet universitaire • 2025–2026",
    "projects.gameText":
      "Implémentation complète du moteur de jeu et de la logique de déplacement. Création d’une interface console ergonomique avec gestion des erreurs de saisie, le tout en langage C.",
    "projects.gameTech":
      "Technologies : C, gestion d’erreurs, architecture de moteur de jeu.",

    "projects.saeTitle": "PROJET UNIVERSITAIRE",
    "projects.saeMeta": "Projet universitaire • 2025–2026",
    "projects.saeText":
      "Installation d’un poste pour le développement. Configuration d’une machine virtuelle en dual boot Windows 10/Ubuntu avec partitionnement commun et gestion d’utilisateurs.",
    "projects.saeTech":
      "Technologies : Windows 10, Ubuntu, virtualisation, gestion des utilisateurs.",
    "projects.sae2Text": "Création d'un site web et d'une base de données pour accompagner l'élaboration du Plan Local de Déplacements (PLD). L'objectif est de recenser les besoins de mobilité de 73 700 habitants face aux enjeux de la transition énergétique",
    "projects.sae2Tech": "HTML5, CSS3, SQL, Maquettage (UI/UX), Gestion de projet (Backlog).",

    "contact.subtitle": "Entrons en contact",
    "contact.title": "Contactez-moi",
    "contact.linkedin": "LinkedIn",
  },
};

function setLanguage(lang) {
  const selected = translations[lang] ? lang : "en";
  localStorage.setItem("lang", selected);
  document.documentElement.lang = selected;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = translations[selected][key];
    if (!value) return;

    // Conserver les sauts de ligne pour les textes multi-lignes
    if (value.includes("\n")) {
      el.innerHTML = value.replace(/\n/g, "<br />");
    } else {
      el.innerText = value;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "fr";
  setLanguage(savedLang);
  initTheme();
});