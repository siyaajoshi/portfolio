import {
  FaDiagramProject,
  FaEnvelope,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser
} from "react-icons/fa6";
import {
  Dna,
  Efinancer,
  Digigirlz,
  Website,
  Cyber,
  cisco,
  panel,
  microsoft,
  siberX,
  rbc,
  bruce,
  tanmay
} from "../assets";

export const Socials = [
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uri: "https://www.linkedin.com/in/siyajoshi/",
    color: "#0072b1",
  },
  {
    id: `email-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "mailto:siyaj52@gmail.com",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uri: "https://github.com/siyaajoshi",
    color: "#fff",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Qualifications",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  {
    id: `Web-${Date.now()}`,
    name: "Website Portfolio",
    imgSrc: Website
  },
  {
    id: `Dna-${Date.now()}`,
    name: "DNA App",
    imgSrc: Dna,
    gitURL: "https://github.com/siyaajoshi/DNA-App",
  },
  {
    id: `Efinancer-${Date.now()}`,
    name: "E-Financer",
    imgSrc: Efinancer,
    gitURL: "https://github.com/siyaajoshi/E-Financer",
  },
];

export const EventsData = [
  {
    id: `panel-${Date.now()}`,
    name: "RBC Panelist",
    imgSrc: panel,
  },
  {
    id: `Cyber-${Date.now()}`,
    name: "Cybersecurity Training and Work Integrated Learning Program",
    imgSrc: Cyber,
  },
  {
    id: `GH-${Date.now()}`,
    name: "Bruce Ross- Group Head of T&O",
    imgSrc: bruce,
  },
  {
    id: `Digi-${Date.now()}`,
    name: "Digigirlz",
    imgSrc: Digigirlz,
  },
  {
    id: `microsoft-${Date.now()}`,
    name: "Microsoft Event",
    imgSrc: microsoft,
  },
  {
    id: `SiberX-${Date.now()}`,
    name: "SiberX Event",
    imgSrc: siberX,
  },
  {
    id: `rbc-${Date.now()}`,
    name: "Women in Tech - RBC",
    imgSrc: rbc,
  },
  {
    id: `cisco-${Date.now()}`,
    name: "Cisco Event",
    imgSrc: cisco,
  },
  {
    id: `tanmay-${Date.now()}`,
    name: "Tanmay Bakshi - Google Development Student Club",
    imgSrc: tanmay,
  }
];
