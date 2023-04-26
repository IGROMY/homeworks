import styles from "./Languages.module.scss";
import React from 'react';

const Languages = () => {
  return (
<section className={styles.languages}>
        <h2 className={styles.text}>Языки</h2>
        <ul>
          <li className={styles.text}>Русский;</li>
          <li className={styles.text}>Английский – В1;</li>
          <li className={styles.text}>Испанский – В1.</li>
        </ul>
      </section>

    );
};

export default Languages;
