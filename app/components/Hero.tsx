import React from 'react';
import styles from './herohome.module.css'; 

const Herohome = () => {
  return (
    <div className={styles.heroContainer}>
    
      <div className={styles.heroOverlay}></div>

      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading}>
          Welcome to My Shop website
        </h1>
        <p className={styles.heroParagraph}>
          Explore the best products and offers just for you.
        </p>
        <button className={styles.heroButton}>
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Herohome;
