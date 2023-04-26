import styles from "./Experience.module.scss";
import React from 'react';

const Experience = () => {
  return (
    <section className={styles.experience}>
        <h2 className={styles.text}>Опыт работы </h2>
        <p className={styles.item}>"Главный расчетный информационный центр" Белорусской железной дороги. С 2021 до 2023
        гг.</p>
        <p className={styles.item}> Должность: инженер-программист.</p>
        <p className={styles.item}>Должностные обязанности:Сопровождение программы SAP Enhancement Package 7 for ERP 6.0.Единая корпоративная интегрированная система управления финансами и ресурсами. </p>
  </section>
    );
};

export default Experience;
