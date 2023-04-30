import styles from "./Education.module.scss";
import React from 'react';
import Title from "../../ui/title/Title.jsx";


const Education = () => {
  return (
        <section className={styles.education}>
          <Title text="Образование"/>

            <p className={styles.text}> 2017 – 2021 гг. - Международный государственный экологический университет им.
              А.Д.Сахарова</p>
            <p className={styles.text}>Специальность:Информационные системы и технологии</p>
            <p className={styles.text}>Квалификация: Инженер-программист. Эколог</p>
      </section>
        );
    };

    export default Education;
