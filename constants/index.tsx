import Linkdin from "../public/assets/images/linkedin.svg";
import Github from "../public/assets/images/github.svg";
import Twitter from "../public/assets/images/twitter.svg";
import Html from "../public/assets/images/html.svg";
import Css from "../public/assets/images/css.svg";
import Js from "../public/assets/images/javascript.svg";
import MUI from "../public/assets/images/material-ui.svg";
import Tailwind from "../public/assets/images/tailwindcss.svg";
import Angular from "../public/assets/images/angularjs.svg";
import NodeJs from "../public/assets/images/node-js.svg";
import ReactJS from "../public/assets/images/react.svg";
import MongoDB from "../public/assets/images/mongodb.svg";
import MSSQL from "../public/assets/images/mysql.svg";
import PostgreSQL from "../public/assets/images/postgresql.svg";
import ExpressJS from "../public/assets/images/express-js.svg";
import Webdevelopment from "../public/assets/images/webdevelopment.svg";
import Webdesign from "../public/assets/images/web-design.png";
import Responsivedesign from "../public/assets/images/responsive-design.png";

export const navItems = [
  { name: "Home", href: "Home", current: false },
  { name: "About", href: "About", current: false },
  { name: "Service", href: "Service", current: false },
  { name: "Resume", href: "Resume", current: false },
  { name: "Projects", href: "Projects", current: false },
  { name: "Contact", href: "Contact", current: false },
];

export const icons = [
  {
    svg: Linkdin,
    path: "https://www.linkedin.com/in/zubaid-rasool-3040b6135",
  },
  {
    svg: Github,
    path: "https://github.com/zubaidrasool007",
  },
  {
    svg: Twitter,
    path: "https://twitter.com/Zubaid_Rasool9?t=NTma4cWg1kt1bLrOajelkA&s=09",
  },
];
export const work = [
  {
    title: "Full Stack Web Developer",
    date: "2021 - Now",
    content:
      "I have been working as Full Stack Web Developer for two years now. I use to work with hybrid technologies consist of Angular, React.JS, Node.JS, Express.JS, SQL and MongoDB",
  },
  {
    title: "MEAN/MERN Stack Developer",
    date: "2019 - 2021",
    content:
      "Working with Node.JS, its framework Express and MongoDB from 2019 to onward. I have worked on multiple Apps with MEAN and MERN technologies form 2019 to onward.",
  },
  {
    title: "Front-End Developer",
    date: "2018 - 2019",
    content:
      "I have been front-end developer from the begining of my career. I started my professional career working with JavaScript's framework Angular, later I worked on React.JS.",
  },
];

export const education = [
  {
    title: "Master’s Degree",
    date: "2016 - 2018",
    content:
      "I have master’s degree in Computer Science from Bahaul Din Zakariya University Multan.",
  },
  {
    title: "Bachelor’s Degree",
    date: "2013 - 2016",
    content:
      "I have done my bachelor’s from Bahaul Din Zakariya University Multan in 2016.",
  },
];
export const servicesContent = [
  {
    title: "Web Development",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
    svg: Webdevelopment,
  },
  {
    title: " UI Design",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
    svg: Webdesign,
  },

  {
    title: "  Responsive Design",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
    svg: Responsivedesign,
  },
];
export const projectWork = [
  { path: "/assets/images/laptop.webp" },
  { path: "/assets/images/design.webp" },
  { path: "/assets/images/work.jpg" },
  { path: "/assets/images/work2.jpg" },
  { path: "/assets/images/work3.jpg" },
  { path: "/assets/images/work4.jpg" },
];
export const workingSkills = [
  {
    title: "Html",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
    svg: Html,
    href: "https://www.w3schools.com/html/",
  },
  {
    title: "Css",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
    svg: Css,
    href: "https://www.w3schools.com/css/css_intro.asp",
  },
  {
    title: "JavaScript",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
    svg: Js,
    href: "https://www.w3schools.com/js/",
  },
  {
    title: "MUI",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
    svg: MUI,
    href: "https://material.angular.io/",
  },
  {
    title: "Tailwind",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
    svg: Tailwind,
    href: "https://tailwindcss.com/",
  },
  {
    title: "Angular",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
    svg: Angular,
    href: "https://angular.io/",
  },
  {
    title: "Node Js",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
    svg: NodeJs,
    href: "https://nodejs.org/en/",
  },
  {
    title: "ReactJS",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
    svg: ReactJS,
    href: "https://reactjs.org/",
  },
  {
    title: "MongoDB",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
    svg: MongoDB,
    href: "https://www.mongodb.com/cloud/atlas/lp/try4?utm_content=rlsavisitor&utm_source=google&utm_campaign=gs_emea_rlsamulti_search_core_brand_atlas_desktop_rlsa&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=14412646455&adgroup=131761126492&gclid=CjwKCAjwmJeYBhAwEiwAXlg0AZMyAclmsrbpHD-8px8iiPrQiYbClQDLqvRKBkWw05vtR0rcHyzrIBoCe8MQAvD_BwE",
  },
  {
    title: "MSSQL",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
    svg: MSSQL,
    href: "https://www.microsoft.com/en-us/sql-server/sql-server-downloads",
  },
  {
    title: "PostgreSQL",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
    svg: PostgreSQL,
    href: "https://www.postgresql.org/",
  },
  {
    title: "ExpressJS",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
    svg: ExpressJS,
    href: "https://expressjs.com/",
  },
];
export const reviews = [
  {
    title: "Ali",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Usama",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Noman",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Asad",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Hasnain",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Fakhar",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];
