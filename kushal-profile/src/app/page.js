"use client";
import Image from "next/image";
import { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";
import { FaStar, FaRegStar, FaChevronDown ,FaGithub, FaLinkedin, FaTwitter,FaInstagram} from "react-icons/fa";
// import {FontAwesomeIcon} from "@fontawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import styles from "./page.module.css";
// import { motion, AnimatePresence } from "framer-motion";
// const skillsData = [
//   // { name: "JavaScript", details: "Used for frontend and backend applications in various projects.",stars: 5 },
//   // { name: "React.js", details: "Built several SPAs with hooks and component-based architecture.",stars: 5 },
//   // { name: "Next.js", details: "Worked on SSR, API Routes, and SEO optimization." ,stars: 5},
//   // { name: "MongoDB", details: "Used in MERN stack applications for database management.",stars: 4 },
//   // { name: "Node.js", details: "Created backend APIs and services using Express.",stars: 4 },
//   // { name: "CSS & Tailwind", details: "Designed responsive UIs with custom styling.",stars: 5 },
  
//     // Frontend Skills (⭐ 4)
//     { name: "HTML", category: "Frontend", experience: "Advanced", stars: 4 },
//     { name: "CSS", category: "Frontend", experience: "Advanced", stars: 4 },
//     { name: "JavaScript", category: "Frontend", experience: "Advanced", stars: 4 },
//     { name: "React.js", category: "Frontend", experience: "Advanced", stars: 4 },
//     { name: "Next.js", category: "Frontend", experience: "Advanced", stars: 4 },
//     { name: "Framer Motion", category: "Frontend", experience: "Intermediate", stars: 4 },
  
//     // Backend Skills (⭐ 4.5)
//     { name: "Node.js", category: "Backend", experience: "Advanced", stars: 4.5 },
//     { name: "Express.js", category: "Backend", experience: "Advanced", stars: 4.5 },
//     { name: "MongoDB", category: "Backend", experience: "Advanced", stars: 4.5 },
//     { name: "RESTful APIs", category: "Backend", experience: "Advanced", stars: 4.5 },
//     { name: "WebSockets", category: "Backend", experience: "Intermediate", stars: 4.5 },
  
//     // Authentication & Security (⭐ 4)
//     { name: "JWT", category: "Authentication & Security", experience: "Advanced", stars: 4 },
//     { name: "OAuth", category: "Authentication & Security", experience: "Intermediate", stars: 4 },
  
//     // Cloud & Storage (⭐ 4)
//     { name: "Cloudinary", category: "Cloud & Storage", experience: "Intermediate", stars: 4 },
//     { name: "Firebase", category: "Cloud & Storage", experience: "Intermediate", stars: 4 },
  
//     // DevOps & Tools (⭐ 4)
//     { name: "Git", category: "DevOps & Tools", experience: "Advanced", stars: 4 },
//     { name: "GitHub", category: "DevOps & Tools", experience: "Advanced", stars: 4 },
//     { name: "Postman", category: "DevOps & Tools", experience: "Intermediate", stars: 4 },
  
//     // Styling & UI Libraries (⭐ 4)
//     { name: "Tailwind CSS", category: "Styling", experience: "Advanced", stars: 4 },
//     { name: "Bootstrap", category: "Styling", experience: "Intermediate", stars: 4 },
  
//     // // Other Skills (⭐ 4)
//     // { name: "GraphQL", category: "Other", experience: "Beginner", stars: 4 },
//     // { name: "Redux", category: "Other", experience: "Intermediate", stars: 4 },
  
  
// ];
const skillsData = [
  // Frontend Skills (⭐ 4)
  // { name: "HTML", category: "Frontend", experience: "Advanced", stars: 4, details: "Structured and semantic web development" },
  { name: "CSS", category: "Frontend", experience: "Advanced", stars: 4, details: "Responsive design, animations, and styling" },
  { name: "JavaScript", category: "Frontend", experience: "Advanced", stars: 4, details: "ES6+, asynchronous programming, and DOM manipulation" },
  { name: "React.js", category: "Frontend", experience: "Advanced", stars: 4, details: "Component-based architecture and state management" },
  { name: "Next.js", category: "Frontend", experience: "Advanced", stars: 4, details: "SSR, SSG, and optimized React applications" },
  // { name: "Framer Motion", category: "Frontend", experience: "Intermediate", stars: 4, details: "Smooth UI animations and interactions" },

  // Backend Skills (⭐ 4.5)
  { name: "Node.js", category: "Backend", experience: "Advanced", stars: 4.5, details: "Event-driven architecture and server-side logic" },
  { name: "Express.js", category: "Backend", experience: "Advanced", stars: 4.5, details: "Building RESTful APIs and middleware handling" },
  { name: "MongoDB", category: "Backend", experience: "Advanced", stars: 4.5, details: "NoSQL database design and optimization" },
  { name: "RESTful APIs", category: "Backend", experience: "Advanced", stars: 4.5, details: "Designing and implementing scalable APIs" },
  { name: "WebSockets", category: "Backend", experience: "Intermediate", stars: 4.5, details: "Real-time communication and event-driven updates" },

  // Authentication & Security (⭐ 4)
  { name: "JWT", category: "Authentication & Security", experience: "Advanced", stars: 4, details: "Token-based authentication and security" },
  { name: "OAuth", category: "Authentication & Security", experience: "Intermediate", stars: 4, details: "Third-party authentication with OAuth 2.0" },

  // Cloud & Storage (⭐ 4)
  { name: "Cloudinary", category: "Cloud & Storage", experience: "Intermediate", stars: 4, details: "Image and media storage optimization" },
  // { name: "Firebase", category: "Cloud & Storage", experience: "Intermediate", stars: 4, details: "Real-time database and authentication" },

  // DevOps & Tools (⭐ 4)
  { name: "Git", category: "DevOps & Tools", experience: "Advanced", stars: 4, details: "Version control and branching strategies" },
  { name: "GitHub", category: "DevOps & Tools", experience: "Advanced", stars: 4, details: "Repository management and collaboration" },
  { name: "Postman", category: "DevOps & Tools", experience: "Intermediate", stars: 4, details: "API testing and debugging" },

  // Styling & UI Libraries (⭐ 4)
  { name: "Tailwind CSS", category: "Styling", experience: "Advanced", stars: 4, details: "Utility-first styling for rapid UI development" },
  // { name: "Bootstrap", category: "Styling", experience: "Intermediate", stars: 4, details: "Pre-styled components for responsive design" },
];

export default function Home() {
  const projects = [
    {
      title: "Molarity",
      description: "A Next.js platform connecting underprivileged individuals with NGOs.",
      image: "/Molarity.png",
      link: "https://molarity.vercel.app/",
    },
    {
      title: "The OG Gift Shop",
      description: "A Next.js platform to buy gifts for your loved ones on special occasions.",
      image: "/gift.png",
      link: "https://example.com/project2",
    },
    {
      title: "TechBlog",
      description: "A Next.js blogging platform for tech enthusiasts to share their thoughts.",
      image: "/bgimg.jpeg",
      link: "https://example.com/project3",
    },
    {
      title: "AI Image Generator",
      description: "A Next.js platform to generate AI-powered images for your projects.", 
      image: "/bgimg.jpeg",
      link: "https://example.com/project4",
    },
  ];
  const experiences = [
    {
      title: "Full Stack Developer",
      date: "2023 - Present",
      company: "InDiBus Softwares Solutions PVT LTD",
      description:
        // "Developed and maintained web applications with a focus on performance and user experience. Collaborated with designers and backend developers to create seamless and efficient workflows. Implemented best practices for code quality, testing, and deployment.",
      "Worked as a Full Stack Developer, leading and collaborating on high-performance web apps, ensuring seamless workflows, code quality, and deployment.",
        image: "/indibus2.jpg",
    },
    {
      title: "Campus Ambassador",
      date: "2023 - 2024",
      company: "TechFest IIT Bombay",
      description:
        "Represented the college at TechFest IIT Bombay, organizing events and workshops, and promoting the fest among students.",
        image: "/tf.jpg",
    },
    {
      title: "Campus Ambassador",
      date: "2023 - 2024",
      company: "Coding Ninjas",
      description:
        "Represented the college at Coding Ninjas, organizing events and workshops, and promoting the fest among students.",
        image: "/cn.jpg",
    },
    // {
    //   title: "Frontend Developer",
    //   date: "2019 - Present",
    //   company: "ABC Company",
    //   description:
    //     "Worked on various projects to build responsive and interactive user interfaces using React.js and Next.js.",
    // },
  ];
  
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className={styles.heroContainer}>
      {/* Navbar */}
      <motion.nav className={styles.navbar} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </motion.nav>

      {/* Hero Section */}
      <motion.div className={styles.heroContent} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <p className={styles.tagline}>DYNAMIC WEB MAGIC WITH NEXT.JS</p>
        <h1 className={styles.heroTitle}>
          Transforming Concepts into <br />
          <span className={styles.highlight}>Seamless User Experiences</span>
        </h1>
        <p className={styles.subtitle}>Hi! I'm Kushal Rastogi, a Next.js Developer based in India</p>
        <motion.button className={styles.ctaButton} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          See my work →
        </motion.button>
      </motion.div>

      {/* About Section */}
      <div className={styles.aboutGrid}>
        <motion.div className={styles.imageProfile} initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <div className={styles.imageCard}>
            <Image src="/kushal.jpg" alt="Kushal Rastogi" width={300} height={300} />
          </div>
        </motion.div>
        <motion.div className={styles.aboutContent} initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <p className={styles.aboutText}>I'm a Next.js developer with a passion for building beautiful and functional user experiences.</p>
        
      {/* Tech Stack */}
      <motion.div className={styles.techStackCard} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
        <p className={styles.techHeading}>My Tech Stack</p>
        <div className={styles.techGrid}>
          <span>JavaScript</span>
          <span>ReactJS</span>
          <span>Express</span>
          <span>NextJS</span>
          <span>NodeJS</span>
          <span>MongoDB</span>
        </div>
      </motion.div>
      </motion.div>
        
      </div>

      <div className={styles.skillsContainer}>
        <h2 className={styles.skillsTitle}>My Skills</h2>
        <div className={styles.skillsGrid}>
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={styles.skillCard}
              onClick={() => toggleAccordion(index)}
            >
              {/* Header with skill name and arrow icon */}
              <div className={styles.skillHeader}>
                <h3>{skill.name}</h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className={styles.arrowIcon} />
                </motion.div>
              </div>

              {/* Star rating */}
              <div className={styles.skillStars}>
                {[...Array(5)].map((_, i) =>
                  i < skill.stars ? <FaStar key={i} className={styles.starFilled} /> : <FaRegStar key={i} className={styles.starEmpty} />
                )}
              </div>

              {/* Dropdown animation */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.p
                    className={styles.skillDetails}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {skill.details}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <h2 className={styles.projectHeading1}>A small selection of </h2><h2 className={styles.projectHeading2}>Recent projects</h2>

      <motion.div className={styles.projectsContainer} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className={styles.projectCard}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Image src={project.image} alt={project.title} width={300} height={180} className={styles.projectImage} />
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectDescription}>{project.description}</p>
            <a href={project.link} className={styles.projectLink} target="_blank">View Project</a>
          </motion.div>
        ))}
      </motion.div>

      <h2 className={styles.expHeading}>Experience</h2>
      <div className={styles.grid}>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={styles.experienceCard}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {exp.image && (
              <img src={exp.image} alt={exp.company} className={styles.experienceImage} />
            )}
            <p className={styles.experienceTitle}>{exp.title}</p>
            <p className={styles.experienceDate}>{exp.date}</p>
            <p className={styles.experienceCompany}>{exp.company}</p>
            <p className={styles.experienceDescription}>{exp.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Footer Section */}
      <motion.footer className={styles.footer} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <motion.a href="/KushalRastogiResume(2)(1).pdf" download className={styles.footerButton} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Download My Resume
            </motion.a>
            <motion.a href="mailto:your-email@example.com" className={styles.footerButton} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Contact Me
            </motion.a>
          </div>
          <div className={styles.footerContact}>
            <a href="mailto:kushalrastogi.kr.2003@gmail.com">Email: kushalrastogi.kr.2003@gmail.com</a>
            <p>Phone: +91 9026122184</p>
          </div>
          <div className={styles.footerSocials}>
            <motion.a href="https://www.github.com/KushalRastogi20" target="_blank" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.a>
              <FaGithub className={styles.socialIcon} />
            
            <motion.a href="https://www.linkedin.com/in/kushal-rastogi-bb1b33259" target="_blank" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <FaLinkedin className={styles.socialIcon} />
            </motion.a>
            <motion.a href="https://x.com/mekushalrastogie" target="_blank" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}></motion.a>
            <FontAwesomeIcon icon={faXTwitter} className={styles.socialIcon} />
            
            <motion.a href="https://www.instagram.com/thekushalrastogi/" target="_blank" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <FaInstagram className={styles.socialIcon} />
            </motion.a>
          </div>
        </div>
        
      </motion.footer>
    </div>
    
  );
}
