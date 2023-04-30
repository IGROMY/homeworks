import styles from "./Experience.module.scss";
import React from 'react';
import Title from "../../ui/title/Title.jsx";

const Experience = () => {
  return (
    <section className={styles.experience}>
        <Title text="Опыт работы"/>
        <p className={styles.text}>"Главный расчетный информационный центр" Белорусской железной дороги. С 2021 до 2023
        гг.</p>
        <p className={styles.text}> Должность: инженер-программист.</p>
        <p className={styles.text}>Должностные обязанности:Сопровождение программы SAP Enhancement Package 7 for ERP 6.0.Единая корпоративная интегрированная система управления финансами и ресурсами. </p>
  </section>
    );
};

export default Experience;
