import styles from "./Skills.module.scss";
import React from 'react';

const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2 className={styles.text}>Профессиональные навыки и знания</h2>
      <ul>
        <li className={styles.text}>Знание HTML5, CSS/SASS/LESS, опыт адаптивной и кроссбраузерной верстки;</li>
        <li className={styles.text}>Знание JS, PHP.</li>
      </ul>
    </section>
  );
};

export default Skills;
