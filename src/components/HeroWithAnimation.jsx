// components/HeroWithAnimation.jsx
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function HeroWithAnimation() {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.heroContent}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className={styles.title} variants={itemVariants}>
          <span className={styles.titleMain}>SmarTanom</span>
          <span className={styles.titleSub}>Smart Hydroponics</span>
        </motion.h1>
        
        <motion.p className={styles.description} variants={itemVariants}>
          Revolutionizing modern farming with intelligent hydroponic technology
        </motion.p>
        
        <motion.div className={styles.ctaContainer} variants={itemVariants}>
          <button className={styles.primaryBtn}>Get Started</button>
          <button className={styles.secondaryBtn}>Learn More</button>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className={styles.scrollIndicator}
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <span></span>
      </motion.div>
    </section>
  );
}