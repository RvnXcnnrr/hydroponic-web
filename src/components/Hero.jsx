// components/Hero.jsx
import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          <span className={styles.titleMain}>SmarTanom</span>
          <span className={styles.titleSub}>Smart Hydroponics</span>
        </h1>
        <p className={styles.description}>
          Revolutionizing modern farming with intelligent hydroponic technology
        </p>
        <div className={styles.ctaContainer}>
          <button className={styles.primaryBtn}>Get Started</button>
          <button className={styles.secondaryBtn}>Learn More</button>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span></span>
      </div>
    </section>
  );
}