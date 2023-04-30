import React from 'react';
import styles from "./Title.module.scss";
const Title = ({text}) => {
  return (
    <div>
        <h2 className={styles.title}>
          {text}
        </h2>
    </div>
  );
};

export default Title;
