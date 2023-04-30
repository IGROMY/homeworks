import styles from "./About.module.scss";
import React from 'react';
import Title from "../../ui/title/Title.jsx";

const About = () => {
  return (
    <section className={styles.aboutMe}>
      <Title text="Contact me"/>

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
