import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
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
        <h1 className={styles.title}>Kushal Rastogi</h1>
        <h2 className={styles.subtitle}>Full Stack Developer</h2>
        <h3 className={styles.description}>
          I am a full stack developer building scalable web applications.
         I have worked on various technologies like Next, React, Node, Express, MongoDB, etc.
         </h3>
        <h2 className={styles.subtitle}>Algorithm Engineer & Competitive Programmer </h2>
        <h3 className={styles.description}> Experienced in designing and optimizing real-world algorithms as an Algorithm Engineer,
         while excelling in solving complex problems quickly through competitive programming using Java.</h3>
        <div className={styles.image}>
          <Image
            src="/kushal.jpg"
            alt="Kushal Rastogi"
            width={200}
            height={200}
            className={styles.image}
          />
        </div>
        <h2 className={styles.subtitle}>Projects</h2>
        
    </div>
  );  
}
