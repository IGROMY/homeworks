import React from 'react';
import styles from "./Target.module.scss";
import Title from "../../ui/title/Title.jsx";
const Target = () => {
    return (
        <section className={styles.target}>
          <Title text="Цель"/>
            <p className={styles.text}> Получение должности Front-End разработчика </p>
      </section>
    );
};

export default Target;
