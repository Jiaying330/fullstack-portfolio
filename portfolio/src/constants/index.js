import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = [
  `Welcome to my corner of the internet! I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB.`,
  `My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.`,
  `I've also ventured into machine learning, exploring its applications from natural language processing to computer vision, to enhance how we interact with technology. Outside of coding, I enjoy staying active, art, and exploring new technologies.`,
];

export const EXPERIENCES = [
  {
    year: "Jan. 2021 - Jan. 2022",
    role: "Advanced Programming Course Grader",
    company: "UCSC",
    description: `Assessed C++ programming projects for over 100 students in the Advanced Programming course, contributing to their growth and understanding of advanced programming concepts`,
    technologies: ["C", "C++", "Algorithm", "Data Structure"],
  },
  {
    year: "Mar. 2020 - Mar. 2021",
    role: "UCSC Chinese Alumni Association",
    company: "Avail Medsystems",
    description: `Implemented a staffing management system in C++/C# for account management and event notifications for both the board and members. Designed and executed a MySQL data schema and wrote a configuration class that facilitated seamless database connection with the backend. Constructed essential features such as login and authentication systems for the official website using Java and the Spring framework, ensuring robust user data security. Agilely managed project progress, utilizing JIRA, and maintained version control with Git for streamlined collaboration and efficient project development.
.`,
    technologies: [
      "Visual Studio",
      "C++",
      "C#",
      "SQL",
      ".Net",
      "Java",
      "Spring",
      "Jira",
    ],
  },
  {
    year: "Jul. 2019 - Aug. 2019",
    role: "Software Developer",
    company: "Fly Technology",
    description: `Developed VR scenes and implemented electric power features using Unity, enhancing virtual training experiences. Contributed to the creation of a web-based teaching management platform using JavaScript and HTML. Optimized the VR development process and prepared documentation for future reference.
`,
    technologies: ["React.js", "HTML", "JavaScript", "C#", "Unity"],
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
  phoneNo: "+1 702 927 0189 ",
  email: "jiaying.hou330@gmail.com",
  resume:
    "https://docs.google.com/document/d/1rg2W_nPMUAxg7q9R4itG1eHoBVk_4oHLL_pRTM23s0s/edit?usp=sharing",
};
