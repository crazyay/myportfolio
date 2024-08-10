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
    url: "https://drive.google.com/file/d/1kCY5H3nyoJvpGOY3sdkB1Qy4FvXqRf-K/view?usp=sharing",
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [

  {
    title: "Frontend Developer",
    company_name: "Indian Institute of Information Technology Una",
    icon: iiitulogo, 
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "Collaborated with a team to develop and maintain the official college website.",
      "Implemented responsive UI components using HTML, CSS, JavaScript, and React.js.",
      "Worked closely with backend developers to integrate APIs and enhance user experience.",
      "Conducted testing sessions for load handling, efficiency, and security, and gathered feedback to make necessary improvements.",
    ],
  }
  

  
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [

  {
    name: "IIITUEConnect",
    description:
      "A comprehensive web application designed for the Indian Institute of Information Technology Una, enabling online registration, complaint submission, and application processing, replacing the traditional paper-based system.",
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
    name: "E-Shop",
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
  
  
  // {
  //   name: "Car Rent",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
