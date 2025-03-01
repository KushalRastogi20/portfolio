"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./page.module.css";

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
        </motion.div>
      </div>

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
