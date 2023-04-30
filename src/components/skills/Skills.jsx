import styles from "./Skills.module.scss";
import React from 'react';
import Title from "../../ui/title/Title.jsx";

const Skills = () => {
  return (
    <section className={styles.skills}>
      <Title text="Профессиональные навыки и знания"/>
      <ul>
        <li className={styles.text}>Знание HTML5, CSS/SASS/LESS, опыт адаптивной и кроссбраузерной верстки;</li>
        <li className={styles.text}>Знание JS, PHP.</li>
      </ul>
    </section>
  );
};

export default Skills;
