import React from 'react';
import styles from "./LayOut.module.scss"
const LayOut = ({children}) => {
  return (
    <article className={styles.layout}>
      {children}
    </article>
  );
};

export default LayOut;
