"use client";
import Image from "next/image";
import { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";
import { FaStar, FaRegStar, FaChevronDown } from "react-icons/fa";

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
  { name: "HTML", category: "Frontend", experience: "Advanced", stars: 4, details: "Structured and semantic web development" },
  { name: "CSS", category: "Frontend", experience: "Advanced", stars: 4, details: "Responsive design, animations, and styling" },
  { name: "JavaScript", category: "Frontend", experience: "Advanced", stars: 4, details: "ES6+, asynchronous programming, and DOM manipulation" },
  { name: "React.js", category: "Frontend", experience: "Advanced", stars: 4, details: "Component-based architecture and state management" },
  { name: "Next.js", category: "Frontend", experience: "Advanced", stars: 4, details: "SSR, SSG, and optimized React applications" },
  { name: "Framer Motion", category: "Frontend", experience: "Intermediate", stars: 4, details: "Smooth UI animations and interactions" },

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
  { name: "Firebase", category: "Cloud & Storage", experience: "Intermediate", stars: 4, details: "Real-time database and authentication" },

  // DevOps & Tools (⭐ 4)
  { name: "Git", category: "DevOps & Tools", experience: "Advanced", stars: 4, details: "Version control and branching strategies" },
  { name: "GitHub", category: "DevOps & Tools", experience: "Advanced", stars: 4, details: "Repository management and collaboration" },
  { name: "Postman", category: "DevOps & Tools", experience: "Intermediate", stars: 4, details: "API testing and debugging" },

  // Styling & UI Libraries (⭐ 4)
  { name: "Tailwind CSS", category: "Styling", experience: "Advanced", stars: 4, details: "Utility-first styling for rapid UI development" },
  { name: "Bootstrap", category: "Styling", experience: "Intermediate", stars: 4, details: "Pre-styled components for responsive design" },
];

export default function Home() {
  const projects = [
    {
      title: "Molarity",
      description: "A platform connecting underprivileged individuals with NGOs.",
      image: "/Molarity.png",
      link: "https://molarity.vercel.app/",
    },
    {
      title: "The OG Gift Shop",
      description: "A Next.js platform to buy gifts.",
      image: "/gift.png",
      link: "https://example.com/project2",
    },
    {
      title: "TechBlog",
      description: "A Next.js blogging platform for tech enthusiasts.",
      image: "/bgimg.jpeg",
      link: "https://example.com/project3",
    },
    {
      title: "Portfolio 2.0",
      description: "A beautifully animated portfolio using Next.js.",
      image: "/bgimg.jpeg",
      link: "https://example.com/project4",
    },
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

      {/* <div className={styles.skillsContainer}>
      <h2 className={styles.skillsTitle}>My Skills</h2>
      <div className={styles.skillsGrid}>
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={styles.skillCard}
            onClick={() => toggleAccordion(index)}
          >
            <h3>{skill.name}</h3>
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
    </div> */}
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
      {/* Projects */}
      {/* <motion.div className={styles.projectCard} initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
        <p className={styles.projectHeading}>Projects</p>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div className={styles.projectCard} key={index}>
              <div className={styles.projectImage}>
                <Image src={project.image} alt={project.title} width={300} height={200} />
              </div>
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        </motion.div> */}
      <h2 className={styles.project}>A small selection of recent projects</h2>

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
    </div>
  );
}
