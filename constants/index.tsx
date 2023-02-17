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
    path: "https://twitter.com/Zubaid_Rasool9",
  },
];
export const work = [
  {
    title: "Full Stack Developer",
    date: "2021 - On going",
    content:
      "I am working as a Full stack developer with Share Mobility. There 3 applications of Share Mobility from which 2 are web applications. One is Admin Dashboard created in Angular 10 and other is Rider app which is built in React.js The backend is built in Express with MySQL. I work on both frontend applications as well as on backend side.",
  },
  {
    title: "Sr. MEAN/MERN Stack Developer",
    date: "2020 - 2021",
    content:
      "I worked with SeeBiz as Senior MEAN/MERN Stack Developer. SeeBiz is an online sales portal and networking platform that allows manufacturers, distributors, wholesalers and retailers to exchange goods and connect with each other at one place. There all 3 applications are web based. One is Admin Dashboard created in Reactjs, the Inventory management in Reactjs as well, the SeeBiz platform in Angular js whcih we updated to Angular 10. Backend in Expressjs with mongoDB.",
  },
  {
    title: "MEAN/MERN Stack Developer",
    date: "2018 - 2020",
    content:
      "I started my professional career with Burj Soft Pvt Ltd as an Angular developer. Later I added Reactjs, Nodejs, Express and mongoDB into my skill set.",
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
      "Web development refers in general to the tasks associated with developing websites for hosting via intranet or internet.",
    svg: Webdevelopment,
  },
  {
    title: "UI Design",
    content:
      "User interface design or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience.",
    svg: Webdesign,
  },

  {
    title: "Responsive Design",
    content:
      "Responsive web design or responsive design is an approach to web design that aims to make web pages render well on a variety of devices and window or screen sizes from minimum to maximum display size to ensure usability and satisfaction.",
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
    title: "HTML5",
    content:
      "HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.",
    svg: Html,
    href: "https://www.w3schools.com/html/",
  },
  {
    title: "CSS3",
    content:
      "CSS3 stands for Cascading Style Sheet level 3, which is the advanced version of CSS. It is used for structuring, styling, and formatting web pages. Several new features have been added to CSS3 and it is supported by all modern web browsers.",
    svg: Css,
    href: "https://www.w3schools.com/css/css_intro.asp",
  },
  {
    title: "JavaScript",
    content:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.",
    svg: Js,
    href: "https://www.w3schools.com/js/",
  },
  {
    title: "MUI",
    content:
      "Material UI is an open-source React component library that implements Google's Material Design. It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.",
    svg: MUI,
    href: "https://material.angular.io/",
  },
  {
    title: "Tailwind",
    content:
      "Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.",
    svg: Tailwind,
    href: "https://tailwindcss.com/",
  },
  {
    title: "Angular",
    content:
      "Angular is a TypeScript-based, free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.",
    svg: Angular,
    href: "https://angular.io/",
  },
  {
    title: "ReactJS",
    content:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
    svg: ReactJS,
    href: "https://reactjs.org/",
  },
  {
    title: "Node Js",
    content:
      "Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.",
    svg: NodeJs,
    href: "https://nodejs.org/en/",
  },
  {
    title: "ExpressJS",
    content:
      "Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.",
    svg: ExpressJS,
    href: "https://expressjs.com/",
  },
  {
    title: "MongoDB",
    content:
      "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License which is deemed non-free by several distributions.",
    svg: MongoDB,
    href: "https://www.mongodb.com/cloud/atlas/lp/try4?utm_content=rlsavisitor&utm_source=google&utm_campaign=gs_emea_rlsamulti_search_core_brand_atlas_desktop_rlsa&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=14412646455&adgroup=131761126492&gclid=CjwKCAjwmJeYBhAwEiwAXlg0AZMyAclmsrbpHD-8px8iiPrQiYbClQDLqvRKBkWw05vtR0rcHyzrIBoCe8MQAvD_BwE",
  },
  {
    title: "MSSQL",
    content:
      "Microsoft SQL Server is a relational database management system developed by Microsoft. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications—which may run either on the same computer or on another computer across a network.",
    svg: MSSQL,
    href: "https://www.microsoft.com/en-us/sql-server/sql-server-downloads",
  },
  {
    title: "PostgreSQL",
    content:
      "PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance. It was originally named POSTGRES, referring to its origins as a successor to the Ingres database developed at the University of California, Berkeley.",
    svg: PostgreSQL,
    href: "https://www.postgresql.org/",
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
