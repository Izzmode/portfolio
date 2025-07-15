interface ResumeCardObj {
  title: string;
  subtitle: string;
  content: string;
  order: number;
}

interface contentText {
  paragraphOne: string;
  paragraphOneII?: string;
  paragraphTwo?: string;
  paragraphTwoII?: string;
}

export const aboutMeText: contentText = {
  paragraphOne: `I am a waitress turned preschool-teacher, turned salesperson, and eventually found my passion in development. 
                I absolutely love to learn new things and strive to be better than I am today. 
                My passion is problem-solving, finding the bug and `,
  paragraphOneII: ` fixing it, 
                creating reusable functions and overall making good, clean code.`,
  paragraphTwo: `My goal is always to evolve and to actively seek out new knowledge and skills!`,
};

export const experienceCardText: ResumeCardObj[] = [
  {
    title: "Developer",
    subtitle: "Nexer Tech Talent | 2025 - present",
    content:
      "I am currently working as a developer at SBAB via Nexer Tech Talent.",
    order: 1,
  },
  {
    title: "Developer Summerjob",
    subtitle: "Dise | Summer 2024",
    content:
      "Used TypeScript to develop and update ad templates for our CMS and player displays",
    order: 2,
  },
  {
    title: "Frontend Developer Intern",
    subtitle: "SeenThis | 2023 - 2024",
    content:
      "Deepened my knowledge in React, Vue.js, Node.js, GraphQL, Apollo and Git version control.",
    order: 3,
  },
];

export const educationCardText: ResumeCardObj[] = [
  {
    title: "KYH Yrkeshögskola",
    subtitle: "Frontend Developer 2022 - 2024",
    content:
      "Vocational College where theory was mixed with practial learning.",
    order: 1,
  },
  {
    title: "Karlstads University",
    subtitle: "Preschool teacher 2014 - 2018",
    content: "Pedagogy, psychology and leadership",
    order: 2,
  },
];
