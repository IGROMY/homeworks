import styles from "./Languages.module.scss";
import React from 'react';
import Title from "../../ui/title/Title.jsx";

const Languages = () => {
  return (
<section className={styles.languages}>
  <Title text="Языки"/>

        <ul>
          <li className={styles.text}>Русский;</li>
          <li className={styles.text}>Английский – В1;</li>
          <li className={styles.text}>Испанский – В1.</li>
        </ul>
      </section>

    );
};

export default Languages;
