import React from 'react';
import styles from "./Target.module.scss";
const Target = () => {
    return (

        <section className={styles.target}>
            <h2 className={styles.list_h2}{styles.text}>Цель</h2>
            <p className={styles.item}{styles.text}> Получение должности Front-End разработчика </p>
      </section>



    );
};

export default Target;
