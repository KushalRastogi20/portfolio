"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from 'lucide-react';
import { 
  FaStar, 
  FaRegStar, 
  FaGithub, 
  FaLinkedin, 
  FaInstagram,
  FaChevronDown,
  FaChevronRight,
  FaExternalLinkAlt,
  FaCode
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Portfolio() {
  // State for navigation and sections
  const [activeSection, setActiveSection] = useState("home");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSkillIndex, setActiveSkillIndex] = useState(null);
  
  // Refs for sections
  const sectionsRef = useRef({});
  
  // Project data
  const projects = [
    {
      title: "Molarity",
      description: "A Next.js platform connecting underprivileged individuals with NGOs.",
      image: "/molarity.png",
      link: "https://molarity.vercel.app/",
      tech: ["Next.js", "MongoDB", "Tailwind CSS"]
    },
    {
      title: "The OG Gift Shop",
      description: "A Next.js platform to buy gifts for your loved ones on special occasions.",
      image: "/ecom.jpg",
      link: "https://example.com/project2",
      tech: ["Next.js", "React", "Node.js"]
    },
    {
      title: "TechBlog",
      description: "A Next.js blogging platform for tech enthusiasts to share their thoughts.",
      image: "/techblog.jpg",
      link: "https://example.com/project3",
      tech: ["Next.js", "Express", "MongoDB"]
    },
    {
      title: "AI Image Generator",
      description: "A Next.js platform to generate AI-powered images for your projects.", 
      image: "/image_gen.jpg",
      link: "https://example.com/project4",
      tech: ["Next.js", "OpenAI API", "Tailwind CSS"]
    },
  ];
  
  // Experience data
  const experiences = [
    {
      title: "Full Stack Developer",
      date: "2023 - Present",
      company: "InDiBus Softwares Solutions PVT LTD",
      description:
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
  ];
  
  // Skills data
  const skillsData = [
    { name: "JavaScript", category: "Frontend", experience: "Advanced", stars: 5, details: "ES6+, asynchronous programming, and DOM manipulation" },
    { name: "React.js", category: "Frontend", experience: "Advanced", stars: 5, details: "Component-based architecture and state management" },
    { name: "Next.js", category: "Frontend", experience: "Advanced", stars: 5, details: "SSR, SSG, and optimized React applications" },
    { name: "Node.js", category: "Backend", experience: "Advanced", stars: 4.5, details: "Event-driven architecture and server-side logic" },
    { name: "Express.js", category: "Backend", experience: "Advanced", stars: 5, details: "Building RESTful APIs and middleware handling" },
    { name: "MongoDB", category: "Backend", experience: "Advanced", stars: 5, details: "NoSQL database design and optimization" },
    { name: "RESTful APIs", category: "Backend", experience: "Advanced", stars: 5, details: "Designing and implementing scalable APIs" },
    { name: "Git", category: "DevOps & Tools", experience: "Advanced", stars: 4, details: "Version control and branching strategies" },
    { name: "GitHub", category: "DevOps & Tools", experience: "Advanced", stars: 4, details: "Repository management and collaboration" },
    { name: "Postman", category: "DevOps & Tools", experience: "Intermediate", stars: 4, details: "API testing and debugging" },
  ];
  //contact form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log({ name, email, message });
    setSubmitted(true);
    // Reset after submission
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
    }, 3000);
  };
  // Group skills by category
  const skillCategories = {};
  skillsData.forEach(skill => {
    if (!skillCategories[skill.category]) {
      skillCategories[skill.category] = [];
    }
    skillCategories[skill.category].push(skill);
  });
  
  // Scroll to section
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const section = sectionsRef.current[sectionId];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsNavOpen(false);
  };
  
  // Toggle skill details
  const toggleSkill = (index) => {
    setActiveSkillIndex(activeSkillIndex === index ? null : index);
  };
  
  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      Object.keys(sectionsRef.current).forEach(sectionId => {
        const section = sectionsRef.current[sectionId];
        if (!section) return;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 text-white min-h-screen">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">KR</span>
              <span className="hidden md:block text-lg font-semibold">Kushal Rastogi</span>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex">
              <ul className="flex space-x-8">
                {["home", "about", "skills", "projects", "experience", "contact"].map((section) => (
                  <li key={section}>
                    <button 
                      onClick={() => scrollToSection(section)}
                      className={`capitalize ${activeSection === section ? 'text-blue-400 font-medium' : 'text-gray-300 hover:text-white'} transition-colors`}
                    >
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isNavOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Mobile Nav */}
          <AnimatePresence>
            {isNavOpen && (
              <motion.nav 
                className="md:hidden mt-4 pb-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="flex flex-col space-y-4">
                  {["home", "about", "skills", "projects", "experience", "contact"].map((section) => (
                    <li key={section}>
                      <button 
                        onClick={() => scrollToSection(section)}
                        className={`block w-full text-left capitalize ${activeSection === section ? 'text-blue-400 font-medium' : 'text-gray-300'} py-2 px-4 rounded hover:bg-gray-800 transition-colors`}
                      >
                        {section}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          ref={el => sectionsRef.current.home = el} 
          id="home" 
          className="min-h-screen flex items-center"
        >
          <div className="container mx-auto px-10 ">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 md:order-1">
                <h2 className="text-sm uppercase tracking-wider text-blue-400 font-medium mb-2">NEXT.JS DEVELOPER</h2>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Transforming Concepts into 
                  <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Seamless User Experiences
                  </span>
                </h1>
                <p className="text-gray-400 text-lg mb-8">
                  Hi! I'm Kushal Rastogi, a Full Stack Developer specializing in Next.js,
                  creating powerful web applications with exceptional user experiences.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection('projects')}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all"
                  >
                    View My Work
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection('contact')}
                    className="bg-transparent border border-gray-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-gray-800 transition-all"
                  >
                    Contact Me
                  </motion.button>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-64 h-64 md:w-80 md:h-80"
                >
                  <div className="rounded-full overflow-hidden border-4 border-blue-500/30 shadow-xl shadow-blue-500/20">
                    <div className="rounded-full overflow-hidden w-full  bg-gradient-to-b from-blue-500/20 to-purple-500/20 p-1">
                      <img 
                        src="/Kushalppic.jpg" 
                        alt="Kushal Rastogi" 
                        className="w-full h-90 object-cover rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            >
              <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FaChevronDown className="text-blue-400" />
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* About Section */}
        <section 
          ref={el => sectionsRef.current.about = el} 
          id="about" 
          className="py-20 bg-gray-950"
        >
          <div className="container mx-auto px-8"> 
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="inline-block text-sm uppercase tracking-wider text-blue-400 font-medium mb-2 border-b-2 border-blue-400 pb-1">About Me</h2>
              <h3 className="text-3xl md:text-4xl font-bold">Who I Am</h3>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700 shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                  <p className="text-gray-300 mb-8">
                    I'm open to new opportunities, collaborations, or just a friendly chat about web development. Feel free to reach out through any of the following:
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Email</h4>
                      <a 
                        href="mailto:kushalrastogi.kr.2003@gmail.com" 
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                      >
                        kushalrastogi.kr.2003@gmail.com
                      </a>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Phone</h4>
                      <a 
                        href="tel:+919026122184" 
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        +91 9026122184
                      </a>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Social Media</h4>
                      <div className="flex space-x-4">
                        <motion.a 
                          href="https://github.com/KushalRastogi20" 
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2 }}
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          <FaGithub size={24} />
                        </motion.a>
                        <motion.a 
                          href="https://www.linkedin.com/in/kushal-rastogi-bb1b33259" 
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2 }}
                          className="text-gray-300 hover:text-blue-400 transition-colors"
                        >
                          <FaLinkedin size={24} />
                        </motion.a>
                        <motion.a 
                          href="https://x.com/mekushalrastogi" 
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2 }}
                          className="text-gray-300 hover:text-gray-400 transition-colors"
                        >
                          <FontAwesomeIcon icon={faXTwitter} size="xl" />
                        </motion.a>
                        <motion.a 
                          href="https://www.instagram.com/thekushalrastogi/" 
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2 }}
                          className="text-gray-300 hover:text-pink-400 transition-colors"
                        >
                          <FaInstagram size={24} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                 <h3 className=" font-bold mb-4">About My Journey</h3>
                <p className="text-gray-300 mb-4">
                  I'm a passionate Full Stack Developer with expertise in building modern web applications. I specialize in Next.js and the MERN stack, focusing on creating seamless user experiences that combine performance and aesthetics.
                </p>
                <p className="text-gray-300 mb-4">
                  With a strong foundation in JavaScript and its frameworks, I enjoy solving complex problems and translating business requirements into elegant technical solutions.
                </p>
                <p className="text-gray-300">
                  My approach combines technical excellence with creative design thinking to deliver projects that not only meet requirements but exceed expectations.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700 shadow-lg"
              >
                
                {/* <h3 className="text-2xl font-bold mb-4">My Tech Stack</h3>
                <div className="grid grid-cols-3 gap-4 ">
                  {["JavaScript", "ReactJS", "NextJS", "NodeJS", "Express", "MongoDB", "Git", "RESTful APIs", "Tailwind CSS"].map((tech, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-700/40 border border-gray-600 rounded-lg p-3 flex items-center justify-center text-center"
                    >
                      <span className="text-gray-200">{tech}</span>
                    </motion.div>
                  ))}
                </div> */}
                <div className="space-y-12">
                {/* Animated Quote */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-xl italic text-gray-300 text-center mb-8 border-t border-gray-700 pt-4 "
                >
                  {/* "Code is like humor. When you have to explain it, it ’ s bad." – Cory House
                   */}
                   "Code is like humor. When you have to explain it, it's bad." - Cory House

                </motion.div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">My Tech Stack</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      "JavaScript",
                      "ReactJS",
                      "NextJS",
                      "NodeJS",
                      "Express",
                      "MongoDB",
                      "Git",
                      "RESTful APIs",
                      "Tailwind CSS",
                    ].map((tech, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-700/40 border border-gray-600 rounded-lg p-3 flex items-center justify-center text-center"
                      >
                        <span className="text-gray-200">{tech}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Certificates & Achievements */}
                {/* <div>
                  <h3 className="text-2xl font-bold mb-4">Certificates & Achievements</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Frontend Developer Certification",
                        issuer: "freeCodeCamp",
                        year: "2023",
                      },
                      {
                        title: "JavaScript Algorithms and Data Structures",
                        issuer: "freeCodeCamp",
                        year: "2022",
                      },
                      {
                        title: "React Developer Certificate",
                        issuer: "Meta (Coursera)",
                        year: "2023",
                      },
                      {
                        title: "Contributor – Open Source Project",
                        issuer: "Hacktoberfest",
                        year: "2022",
                      },
                    ].map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gray-800 border border-gray-600 rounded-lg p-4"
                      >
                        <h4 className="text-lg font-semibold text-gray-100">{cert.title}</h4>
                        <p className="text-sm text-gray-400">{cert.issuer} — {cert.year}</p>
                      </motion.div>
                    ))}
                  </div>
                </div> */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">Certificates & Achievements</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-800/50 backdrop-blur-md rounded-lg p-4 border border-gray-700 shadow-lg">
                    {[
                      {
                        title: "Frontend Developer Certification",
                        issuer: "freeCodeCamp",
                        year: "2023",
                      },
                      {
                        title: "JavaScript Algorithms and Data Structures",
                        issuer: "freeCodeCamp",
                        year: "2022",
                      },
                      {
                        title: "React Developer Certificate",
                        issuer: "Meta (Coursera)",
                        year: "2023",
                      },
                      {
                        title: "Contributor - Open Source Project",
                        issuer: "Hacktoberfest",
                        year: "2022",
                      },
                    ].map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gray-900 border border-gray-700 rounded-lg p-4 transition-all duration-300 hover:bg-gray-800 hover:shadow-lg"
                      >
                        <h4 className="text-base font-semibold text-gray-200">{cert.title}</h4>
                        <p className="text-sm text-gray-400">{cert.issuer} - {cert.year}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>

              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section 
          ref={el => sectionsRef.current.skills = el} 
          id="skills" 
          className="py-20 bg-gradient-to-b from-gray-950 to-gray-900"
        >
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="inline-block text-sm uppercase tracking-wider text-blue-400 font-medium mb-2 border-b-2 border-blue-400 pb-1">Skills</h2>
              <h3 className="text-3xl md:text-4xl font-bold">My Technical Expertise</h3>
            </motion.div>
            
            <div className="space-y-10">
              {Object.keys(skillCategories).map((category, categoryIndex) => (
                <motion.div 
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-400">{category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skillCategories[category].map((skill, index) => {
                      const globalIndex = skillsData.findIndex(s => s.name === skill.name);
                      return (
                        <motion.div 
                          key={index}
                          whileHover={{ scale: 1.02 }}
                          className="bg-gray-800/70 backdrop-blur-sm rounded-lg border border-gray-700 p-4 shadow-lg cursor-pointer"
                          onClick={() => toggleSkill(globalIndex)}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="text-lg font-semibold">{skill.name}</h4>
                            <motion.div
                              animate={{ rotate: activeSkillIndex === globalIndex ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <FaChevronDown className="text-gray-400" />
                            </motion.div>
                          </div>
                          
                          <div className="flex items-center mb-2">
                            <span className="text-sm text-gray-400 mr-2">{skill.experience}</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                i < Math.floor(skill.stars) ? 
                                  <FaStar key={i} className="text-yellow-400 text-sm" /> : 
                                  i === Math.floor(skill.stars) && skill.stars % 1 !== 0 ?
                                    <FaStar key={i} className="text-yellow-400 text-sm opacity-50" /> :
                                    <FaRegStar key={i} className="text-gray-500 text-sm" />
                              ))}
                            </div>
                          </div>
                          
                          <AnimatePresence>
                            {activeSkillIndex === globalIndex && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-sm text-gray-300 pt-2 border-t border-gray-700"
                              >
                                {skill.details}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section 
          ref={el => sectionsRef.current.projects = el} 
          id="projects" 
          className="py-20 bg-gradient-to-b from-gray-900 to-gray-950"
        >
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="inline-block text-sm uppercase tracking-wider text-blue-400 font-medium mb-2 border-b-2 border-blue-400 pb-1">Projects</h2>
              <h3 className="text-3xl md:text-4xl font-bold">Recent Work</h3>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-lg group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-gray-700/50 text-xs font-medium text-gray-300 py-1 px-2 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3">
                      <motion.a 
                        href={project.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <span>View Demo</span>
                        <FaExternalLinkAlt size={12} />
                      </motion.a>
                      
                      <motion.a 
                        href="#" 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-1 text-sm font-medium text-gray-400 hover:text-gray-300 transition-colors"
                      >
                        <span>View Code</span>
                        <FaCode size={12} />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <a 
                href="https://github.com/KushalRastogi20" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>See more projects on GitHub</span>
                <FaChevronRight size={12} />
              </a>
            </motion.div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section 
          ref={el => sectionsRef.current.experience = el} 
          id="experience" 
          className="py-20 bg-gradient-to-b from-gray-950 to-gray-900"
        >
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="inline-block text-sm uppercase tracking-wider text-blue-400 font-medium mb-2 border-b-2 border-blue-400 pb-1">Experience</h2>
              <h3 className="text-3xl md:text-4xl font-bold">Professional Journey</h3>
            </motion.div>
            
            <div className="max-w-4xl mx-auto ">
              <div className="relative pl-8 border-l-2 border-gray-700 space-y-10">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -left-[41px] w-20 h-20 rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-500">
                      <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                        <img 
                          src={exp.image}
                          alt={exp.company}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg p-6 border border-gray-700 shadow-lg ml-4">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <div className="mt-2 md:mt-0">
                          <span className="text-sm font-medium text-blue-400 bg-blue-400/10 py-1 px-3 rounded-full">
                            {exp.date}
                          </span>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-medium text-gray-300 mb-3">{exp.company}</h4>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-12 border border-gray-700 shadow-lg h-full">
                  <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                  
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        placeholder="Your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                      <textarea 
                        id="message" 
                        rows={4} 
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    
                    <div>
                      <motion.button 
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all"
                      >
                        Send Message
                      </motion.button>
                    </div>
                  </form>
                </div>
              </motion.div> */}
              <div className="py-16 w-full max-w-3xl mx-auto">
      {/* Added proper spacing to prevent overlap */}
                <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-gray-700 shadow-lg mt-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                      <textarea 
                        id="message" 
                        rows={4} 
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        placeholder="Your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                    
                    <div>
                      <button 
                        onClick={handleSubmit}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-blue-500/40 transition-all flex items-center justify-center"
                      >
                        {submitted ? 'Message Sent!' : 'Send Message'}
                        {!submitted && <Send className="ml-2 h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                </div>
                </div>
            </div>
          </div>
        </section>
        
        {/* Footer Section */}
        <footer className="bg-black py-10 border-t border-gray-800">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Kushal Rastogi</span>
                <p className="text-gray-400 mt-2">Full Stack Next.js Developer</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <motion.a 
                  href="/KushalRastogiResume(2)(1).pdf" 
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Download CV
                </motion.a>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Kushal Rastogi. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
        </main>
        </div>
  )
}
        
        {/* Contact Section
        <section 
          ref={el => sectionsRef.current.contact = el} 
          id="contact" 
          className="py-20 bg-gradient-to-b from-gray-900 to-black"
        >
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="inline-block text-sm uppercase tracking-wider text-blue-400 font-medium mb-2 border-b-2 border-blue-400 pb-1">Contact</h2>
              <h3 className="text-3xl md:text-4xl font-bold">Get In Touch</h3>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-lg h-full">
                  <h3 className="text-2xl */}
