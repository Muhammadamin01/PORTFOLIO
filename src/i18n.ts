export type Language = "uz" | "en" | "ru";

export interface Translations {
  home: string;
  about: string;
  projects: string;
  contact: string;
  heroTitle: string;
  heroDesc: string;
}

const translations: Record<Language, Translations> = {
  uz: {
    home: "Asosiy",
    about: "Men haqimda",
    projects: "Loyihalar",
    contact: "Bog'lanish",
    heroTitle: "Men Zakariyo",
    heroDesc: "Full Stack Dasturchi",
  },
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    heroTitle: "I'm Zakariyo",
    heroDesc: "Full Stack Developer",
  },
  ru: {
    home: "Главная",
    about: "Обо мне",
    projects: "Проекты",
    contact: "Контакты",
    heroTitle: "Я Закариё",
    heroDesc: "Full Stack Разработчик",
  },
};

export default translations;
