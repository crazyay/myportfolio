import {
  iiitulogo,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  uidesigner,
  java,
  sql,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ejs,
  mongoose,
  cpp,
  bootstrap,
  github,
  
  iiitueconnect,
 ecommerce,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

// export const navLinks = [
//   {
//     id: "https://drive.google.com/file/d/1kCY5H3nyoJvpGOY3sdkB1Qy4FvXqRf-K/view?usp=sharing",
//     title:"Resume"

//   },
//   {
//     id: "about",
//     title: "About",
//   },
//   {
//     id: "work",
//     title: "Work",
//   },
//   {
//     id: "contact",
//     title: "Contact",
//   },
// ];

export const navLinks = [
  {
    id: "resume", 
    title: "Resume",
    type: "external",
    url: "https://drive.google.com/file/d/1VdPehR5HhVH7D25zL28FwsHo4IpOYt7O/view?usp=drive_link",
  },
  {
    id: "about",
    title: "About",
    type: "internal",
  },
  {
    id: "work",
    title: "Work",
    type: "internal",
  },
  {
    id: "contact",
    title: "Contact",
    type: "internal",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI Designer",
    icon: figma,
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
 
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  { name :"Bootstrap",
    icon: bootstrap

  },
  { name :"EJS",
    icon: ejs

  },
 

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  { name :"Mongoose",
    icon: mongoose

  },
  {
    name: "SQL",
    icon: sql,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  { name :"Github",
    icon: github

  },
  {
    name:"Java",
    icon:java
 },
 { name :"C++",
  icon: cpp

},
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [

  {
    title: "Frontend Developer",
    company_name: "Indian Institute of Information Technology Una",
    icon: iiitulogo, 
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "Redesigned and optimized the official college website, leading to a 30% increase in user engagement and reducing page load times by 90%.",
"Developed scalable RESTful APIs using Node.js and Express.js, ensuring seamless communication between the frontend and backend systems.",
"Built and implemented responsive UI components using HTML, CSS, Tailwind, JavaScript, and React.js, ensuring cross-device compatibility.",
"Collaborated with a team to design and integrate database systems using MongoDB, improving data storage and retrieval efficiency.",
"Conducted comprehensive unit, integration, and user acceptance testing (UAT), leading to significant performance and usability enhancements."
],
  }
  

  
];

const testimonials = [
 
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
 
];

const projects = [

  {
    name: "IIITUEConnect",
    description:
      "A comprehensive web application designed for the Indian Institute of Information Technology Una, enabling online registrations, complaint submission, and application processing, replacing the traditional paper-based system.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "yellow-text-gradient",
      },
      {
        name: "express",
        color: "red-text-gradient",
      },
    ],
    image: iiitueconnect, // Replace with the appropriate image variable
    source_code_link: "https://github.com/crazyay/iiitueConnect", // Replace with the actual link if available
  },

  {
    name: "Easy-Shop",
    description:
      "E-commerce platform developed using HTML, CSS, JavaScript, and EJS, offering a responsive and user-friendly interface for browsing, purchasing, and managing products. The backend is powered by Node.js, Express, and MongoDB.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "ejs",
        color: "red-text-gradient",
      },
      {
        name: "nodejs",
        color: "purple-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: ecommerce, 
    source_code_link: "https://github.com/crazyay/e-commerce",
  }
  
  
  
];

export { services, technologies, experiences, testimonials, projects };
