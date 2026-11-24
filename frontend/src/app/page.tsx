import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/hero/Hero';
import Skills from '@/components/skills/Skills';
import Projects from '@/components/projects/Projects';
import Experience from '@/components/experience/Experience';
import Education from '@/components/education/Education';
import Terminal from '@/components/terminal/Terminal';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <main id="main-content" className={styles.mainContent}>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Terminal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
