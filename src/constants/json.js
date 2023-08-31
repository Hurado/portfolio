import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  git
} from "../assets/tech";
import { carrent, jobit, tripguide } from "../assets/projects";

import { studiofigura, IBPM, OSKAR, LaboPrint } from "../assets/company";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: carrent,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Backend Developer",
    icon: jobit,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Intern in the IT Department",
    company_name: "Studio Figura International ",
    icon: studiofigura,
    iconBg: "#383E56",
    date: "August 2021 - November 2021",
    points: [
      "Modernization of the current website (HTML, CSS, JS)",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Creation, configuration and access assignment in the cloud.",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company_name: "Studio Figura International",
    icon: studiofigura,
    iconBg: "#383E56",
    date: "Nov 2021 - Feb 2021",
    points: [
      "Website modernization (JavaScript, PHP)",
      "Hardware configuration",
      "HelpDesk",
    ],
  },
  {
    title: "The participant of the IBPM Academy",
    company_name: "IBPM",
    icon: IBPM,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Mar 2022",
    points: [
      "Development of business applications (Fullstack)",
      "Database management",
    ],
  },

  {
    title: "Junior Frontend Developer",
    company_name: "OSKAR",
    icon: OSKAR,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - April 2022",
    points: [
      "Developing and maintaining web applications using React.js and NextJs.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews",
      "Working in Agile method (Jira)",
      "Working on Linux with GitLab, PostMan,Slack",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company_name: "Labo Print",
    icon: LaboPrint,
    iconBg: "#E6DEDD",
    date: "May 2022 - July 2022",
    points: [
      "Modernization of the current website in terms of bugs in JS, PHP, Magento.",
      "Work on Linux (Ubuntu), FTP and Discord.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export { services, technologies, experiences, testimonials };
