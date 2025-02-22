import Image from "next/image";
import styles from "./page.module.css";
// import Link from "next/link";

export default function Home() {
  
  const projects = [
    {
      title: 'Molarity',
      description: 'This platform is a Next.js web application where people can upload details of underprivileged individuals to connect them with registered NGOs for support and assistance.',
      image: '/Molarity.png',
      link: 'https://molarity.vercel.app/',
      // link: 'https://example.com/project1',
    },
    {
      title: 'The OG Gift Shop',
      description: 'This platform is a Next.js web application where people can buy gifts for their loved ones',
      // description: 'An innovative e-commerce platform.',
      image: '/gift.png',
      link: 'https://example.com/project2',
    },
    {
      title: 'Project Three',
      description: 'A responsive portfolio website.',
      image: '/project3.jpg',
      link: 'https://example.com/project3',
    },
    {
      title: 'Project Four',
      description: 'A real-time chat application.',
      image: '/project4.jpg',
      link: 'https://example.com/project4',
    },
    {
      title: 'Project Five',
      description: 'An AI-powered analytics dashboard.',
      image: '/project5.jpg',
      link: 'https://example.com/project5',
    },
  ];
  return (
    <div className={styles.main}>
      <nav className={styles.nav}>
        {/* <h1 className={styles.title}>Kushal Rastogi</h1>   */}
        <ul className={styles.navList}>
          {/* <li className={styles.navItem}>Kushal Rastogi</li> */}
          <li className={styles.navItem}>About</li>
          <li className={styles.navItem}>Projects</li>
          <li className={styles.navItem}>Skills</li>
          <li className={styles.navItem}>Contact</li>
        </ul>
        
      </nav>
        <h1 className={styles.title1}>Kushal Rastogi</h1>
        <h2 className={styles.subtitle}>Full Stack Developer</h2>
        <h3 className={styles.description}>
          I am a full stack developer building scalable web applications.
         I have worked on various technologies like Next, React, Node, Express, MongoDB, etc.
         </h3>
        <h2 className={styles.subtitle}>Algorithm Engineer & Competitive Programmer </h2>
        <h3 className={styles.description}> Experienced in designing and optimizing real-world algorithms as an Algorithm Engineer,
         while excelling in solving complex problems quickly through competitive programming using Java.</h3>
         <h2 className={styles.subtitle}>Algorithm Engineer & Competitive Programmer </h2>
        <h3 className={styles.description}> Experienced in designing and optimizing real-world algorithms as an Algorithm Engineer,
         while excelling in solving complex problems quickly through competitive programming using Java.</h3>
        <div className={styles.image}></div>
        <div className={styles.image}>
          <Image
            src="/kushal.jpg"
            alt="Kushal Rastogi"
            width={200}
            height={200}
            className={styles.image}
          />
        </div>
        {/* <h2 className={styles.subtitle2}>Projects</h2> */}
        {/* <h3 className={styles.description}>1. <a href="www.google.com">Project 1</a></h3> */}
        {/* <nav className={styles.navList}>
          <h3 className={styles.description}>1. Project 1</h3>
          <h4 className={styles.description}>Developer Name : Kushal Rastogi</h4>
          <h4 className={styles.description}>Link: <a href="www.google.com">Vercel</a> </h4>
      </nav> */}
      <h3 className={styles.titleProject}>Projects</h3>
          <p className={styles.introProject}>
            Here are some of the projects I have worked on.</p>
        
       <section className={styles.sectionProject}>
          
      <div className={styles.containerProject}>
        {/* <h2 className={styles.titleProject}>My Projects</h2> */}
        <div className={styles.gridProject}>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardProject}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className={styles.imageProject}
              />
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.descriptionProject}>{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>

    </div>
  );  
}
