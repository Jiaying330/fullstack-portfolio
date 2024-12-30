import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

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
    description: `Developed and optimized front-end components using React and Sass, leveraging performance techniques like lazy loading, minification, and caching to enhance user interactions. Built reusable frontend libraries to support the Paystand ecosystem and integrated Paystand APIs for real-time payment processing and analytics using RESTful services and Axios. Collaborated with product, design, and engineering teams to deliver high-quality user experiences with JavaScript, HTML5, and Tailwind. Conducted code reviews to uphold best practices, utilized Git and GitHub for version control, and wrote unit and integration tests with Jest. `,
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "Axios"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "San Jose, California ",
  phoneNo: "+12 4555 666 00 ",
  email: "jiaying.hou.job@gmail.com",
  resume: "",
};
