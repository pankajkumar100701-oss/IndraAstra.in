// Single source of truth for company details used across pages.
// TODO: replace the LinkedIn URLs with the real profile links from the client.
export const site = {
  name: "IndraAstra",
  tagline: "Lower AI Costs. Higher Throughput. Better Accuracy.",
  email: "common@indraastra.in",
  location: "Bengaluru, India",
  linkedin: "https://www.linkedin.com/company/indraastra",
};

export const nav = [
  { href: "/#levers", label: "Solutions" },
  { href: "/#research", label: "Research" },
  { href: "/#vision", label: "Vision" },
  { href: "/team", label: "Team" },
];

export type Member = {
  name: string;
  role: string;
  bio: string;
  group: "Leadership" | "Founding Engineers" | "Mentor" | "Interns";
  linkedin?: string;
};

const li = (name: string) =>
  `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(name)}`;

export const team: Member[] = [
  {
    name: "Dhiraj Daga",
    role: "Chief Technical Officer",
    bio: "AI scientist-engineer with work across education, computer vision, OCR and Indic-language technology — including systems used by the Supreme Court of India.",
    group: "Leadership",
    linkedin: li("Dhiraj Daga"),
  },
  {
    name: "Sarthak Jain",
    role: "Founding AI Engineer",
    bio: "IIT (BHU) graduate, class of 2025. Builds and ships the optimisation stack behind client engagements.",
    group: "Founding Engineers",
    linkedin: li("Sarthak Jain IIT BHU"),
  },
  {
    name: "Manik Sharma",
    role: "Founding AI Engineer",
    bio: "IIT (BHU) Engineering Physics graduate focused on deep learning and optimisation.",
    group: "Founding Engineers",
    linkedin: li("Manik Sharma IIT BHU"),
  },
  {
    name: "Sunil Khana",
    role: "Mentor",
    bio: "Director at SAI Agroforestry and GreenBloom Energy. Guides strategy and growth.",
    group: "Mentor",
    linkedin: li("Sunil Khana"),
  },
  {
    name: "Raman Chaudhary",
    role: "AI Research Intern",
    bio: "IIT (BHU) Varanasi. Works on LLM efficiency, retrieval-augmented generation and knowledge distillation.",
    group: "Interns",
    linkedin: li("Raman Chaudhary IIT BHU"),
  },
  {
    name: "Yash Sahay",
    role: "Data Science Intern",
    bio: "Data science student at IIT Madras.",
    group: "Interns",
    linkedin: li("Yash Sahay IIT Madras"),
  },
  {
    name: "Eswar Kompalli",
    role: "Business Analytics Intern",
    bio: "Business analytics student supporting go-to-market and research operations.",
    group: "Interns",
    linkedin: li("Eswar Kompalli"),
  },
];
