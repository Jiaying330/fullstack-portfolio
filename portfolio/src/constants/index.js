import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = [
  `Welcome to my corner of the internet! I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB.`,
  `My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.`,
  `I've also ventured into machine learning, exploring its applications from natural language processing to computer vision, to enhance how we interact with technology. Outside of coding, I enjoy staying active, art, and exploring new technologies.`,
];

export const EXPERIENCES = [
  {
    year: "Oct. 2022 - Dec. 2024",
    role: "Full Stack Developer",
    company: "GLOBO",
    description: `Developed and maintained responsive and cross-browser-compatible web applications using React.js, TypeScript, and Node.js, ensuring scalability and maintainability. Designed and integrated RESTful APIs with PostgreSQL for structured data management, Redis for caching, and Elasticsearch for real-time analytics, enabling efficient data processing and retrieval. Implemented secure user authentication and authorization using Auth0 with JWT tokens, adhering to industry security standards. Enhanced accessibility by optimizing screen reader support to improve the user experience. `,
    technologies: [
      "Sass",
      "React.js",
      "Chart.js",
      "PostgreSQL",
      "Redis",
      "AWS",
    ],
  },
  {
    year: "Feb. 2020 - Mar. 2022",
    role: "React Developer",
    company: "Avail Medsystems",
    description: `Developed an interactive scheduling interface using React.js, leveraging custom hooks for secure handling of repetitive logic like login and API requests. Optimized state management with Redux to ensure smooth user interactions, managing complex states such as user sessions and notifications. Built unit and integration tests with Jest and React Testing Library to ensure reliability. Collaborated with backend teams to integrate microservices built with Java Spring Boot, facilitating real-time messaging. Implemented responsive web design for a consistent user experience across devices and maintained CI/CD pipelines using GitLab and Jenkins to automate deployments.`,
    technologies: ["React.js", "Redux", "GitLab", "Jenkins"],
  },
  {
    year: "Jan. 2019 - Jan. 2020",
    role: "Frontend Developer",
    company: "Paystand",
    description: `Developed and optimized front-end components using React, leveraging performance techniques like lazy loading, minification, and caching to enhance user interactions. Built reusable frontend libraries to support the Paystand ecosystem and integrated Paystand APIs for real-time payment processing and analytics using RESTful services and Axios. Collaborated with product, design, and engineering teams to deliver high-quality user experiences with JavaScript, HTML5, and Tailwind. Conducted code reviews to uphold best practices, utilized Git and GitHub for version control, and wrote unit and integration tests with Jest. `,
    technologies: ["React.js", "Tailwind CSS", "Axios"],
  },
];

export const PROJECTS = [
  {
    title: "Admin Dashboard",
    image: project1,
    link: "https://github.com/Jiaying330/admin-dashboard",
    description:
      "Built a modern React Admin Dashboard with Material-UI, Redux Toolkit, and advanced data visualization using Nivo and Chart.js. Integrated FullCalendar for scheduling, MUI Data Grid for interactive tables, and Formik with Yup for robust form handling. Implemented Pro Sidebar navigation, React Router for routing, and comprehensive testing to ensure reliability and performance.",
    technologies: [
      "HTML",
      "Material UI",
      "React.js",
      "Nivo Charts",
      "Node.js",
      "MongoDB",
    ],
  },
  {
    title: "Nasdaq Private Market Homepage",
    image: project2,
    link: "https://nasdaq-private-market.vercel.app/",
    description:
      "Recreated the Nasdaq Private Market homepage using React, TypeScript, and CSS, implementing modern and complex animations for an engaging user experience. Developed with Vite for fast builds and previews, and styled with Emotion and Sass for dynamic, scalable designs. Leveraged React hooks for state and lifecycle management and ensured code quality with ESLint and TypeScript. This project highlights expertise in creating visually appealing, interactive, and maintainable web applications.",
    technologies: ["HTML", "CSS", "Sass", "React.js", "TypeScript"],
  },
  {
    title: "Crypto Hunter",
    image: project3,
    link: "https://crypto-tracker-inky-iota.vercel.app/",
    description:
      "Developed a crypto currency tracking app using React and the CoinGecko API to fetch and display real-time cryptocurrency data. Enhanced the user experience with interactive charts created using Chart.js. Styled the application with Material-UI and Emotion for a modern, responsive design. Integrated React Router for seamless navigation, optimized data fetching with Axios, and Firebase for authentication.",
    technologies: ["HTML", "CSS", "React.js", "Chart.js", "Firebase"],
  },
];

export const EDUCATIONS = [
  {
    year: "Sept. 2022 - May. 2024",
    school: "University of Pennsylvania",
    degree: "Master's Degree",
    description:
      "My M.S.E. in Systems Engineering focused on Machine Learning, Web Development, Optimization, and Engineering Entrepreneurship, effectively blending analytical rigor with innovative thinking.",
  },
  {
    year: "Sept. 2018 - June 2022",
    school: "University of California, Santa Cruz",
    degree: "Bachelor's Degree",
    description:
      "My B.S. in Computer Science focused on Game Design and complemented by coursework in Advanced Programming, Algorithm Analysis, and Software Engineering, merges technical proficiency with creative design.",
  },
];

export const CONTACT = {
  address: "San Jose, California ",
  phoneNo: "+1 702 703 0162 ",
  email: "jiaying.hou.job@gmail.com",
  resume:
    "https://docs.google.com/document/d/1rtSu7vAOKp_vs_37RnDAufFobA7PKBqUQK5YS9k3TU4/edit?usp=sharing",
};
