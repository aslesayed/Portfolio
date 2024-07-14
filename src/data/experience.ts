import type { Props as ExperienceProp } from "../components/experience/props";

export const EXPERIENCE: ExperienceProp[] = [
  {
    id: "cinereview",
    dates: " AVRIL 2024 - JUILLET 2024",
    title: "Cinéreview",
    company: "Plateforme interactive pour les cinéphiles.",
    // companyUrl: "https://www.dutch.com",
    description:
      "CinéReview est conçu et architecturé pour les cinéphiles, offrant un espace interactif où les utilisateurs peuvent se retrouver pour partager leurs avis sur leurs films et séries préférés",
    technologies: [
      "React JS",
      "Vite JS",
      "Node JS",
      "Express JS",
      "MySQL",
      "API RESTful",
      "Figma",
      "PostMan",
    ],
    logo: "/logos/cine.png",
    link: "/cinereview", 
  },
  {
    id: "rayj",
    dates: "DECEMBRE 2023 - FÉVRIER 2024",
    title: "Rayj",
    company: "Plateforme de recrutement en interne.",
    // companyUrl: "https://www.absoluteweb.com",
    description:
      "Création et conception de l'optimisation des processus de recrutement interne. De nombreuses entreprises recherchent des employés déjà en poste au sein de l'organisation. Rayj a été sélectionné pour faciliter le recrutement interne, que ce soit pour des contrats à durée déterminée ou indéterminée.",
    technologies: [
      "React JS",
      "Vue JS",
      "Node JS",
      "Express JS",
      "MySQL",
      "API RESTful",
      "Figma",
      "PostMan",
    ],
    logo: "/logos/rayj.png",
    link: "/rayj", 
  },
  {
    id: "dnd",
    dates: "OCTOBRE 2023",
    title: "Dragon Paper",
    company: "Fiche Donjon & Dragon Dynamique.",
    // companyUrl: "https://www.miinto.com",
    description:
      "Dragon Paper est destiné à tous les passionnés de Donjons et Dragons. Si vous avez déjà eu du mal à suivre votre fiche de personnage, ne vous inquiétez plus.Nous avons la solution parfaite pour vous. Mon équipe et moi avons développé un site web convivial avec une fiche de joueur interactive. Les joueurs peuvent y enregistrer facilement tous les détails essentiels de leurs personnages, des capacités et compétences à l'équipement et à l'histoire.",
    technologies: [
      "JavaScript",
      "React JS",
      "Node JS",
      "MySQL",
      "Gestion d'API (Fetch)",
      "Figma",
    ],
    logo: "/logos/drag.png",
    link: "/dnd", 
  },
];
