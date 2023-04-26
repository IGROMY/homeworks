import styles from "./About.module.scss";
import React from 'react';

const About = () => {
  return (
    <section className={styles.aboutMe}>
      <h2 className={styles.text}> Личные данные </h2>
      <ul>
        <li className={styles.text}>Возраст: 23 года</li>
        <li className={styles.text}>
          <address> Адрес проживания: г. Витебск ул. Фрунзе 22/2 кв. 42</address>
        </li>
      </ul>
    </section>
  );
};

export default About;
