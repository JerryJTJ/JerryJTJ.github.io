import uwaterloo from "../media/logos/uwaterlooseal.webp";
import q4inc from "../media/logos/q4inc.webp";
import uhawaii from "../media/logos/uhmanoa.webp";
import ford from "../media/logos/ford.webp";
import borealiswind from "../media/logos/borealiswind.webp";
import ualberta from "../media/logos/ualbertaseal.webp";
import type { Experience } from "./data.types";

const experiences: Array<Experience> = [
  {
    company: "University of Waterloo",
    date: "2018-2023",
    location: "Waterloo, ON",
    role: "B.A.Sc. Honours Mechatronics Engineering/Computing Option",
    image: uwaterloo,
    description: "",
  },
  {
    company: "Q4 Inc",
    date: "May-Aug 2022",
    location: "Toronto, ON",
    role: "Full-Stack Engineer Co-op",
    image: q4inc,
    description: "",
    technologies: "TypeScript, React, NodeJS, SQL, MongoDB, Cypress, Jest",
  },
  {
    company: "University of Hawai'i",
    date: "Jan-Apr 2022",
    location: "Honolulu, HI",
    role: "Software Research Engineer Co-op",
    image: uhawaii,
    description: "",
    technologies: "C++, Fortan, MATLAB, Python, MFC",
  },
  {
    company: "Ford Motor Company",
    date: "May-Aug 2021",
    location: "Kanata, ON (remote)",
    role: "Embedded Software Engineer Co-op",
    image: ford,
    description: "",
    technologies: "C++, QNX RTOS, CTest",
  },
  {
    company: "University of Hawai'i",
    date: "Sept-Dec 2020",
    location: "Honolulu, HI (remote)",
    role: "Undergraduate Researcher",
    image: uhawaii,
    description: "",
  },
  {
    company: "Borealis Wind",
    date: "Jan-Apr 2020",
    location: "Waterloo, ON",
    role: "Electrical & Controls Engineer Co-op",
    image: borealiswind,
    description: "",
    technologies: "Python, Structured Text, C++",
  },
  {
    company: "University of Alberta",
    date: "May-Aug 2019",
    location: "Edmonton, AB",
    role: "Undergraduate Research Assistant",
    image: ualberta,
    description: "",
  },
];

export default experiences;
