import React from 'react';
import styles from "./input.module.scss";

const Input = ({label, placeholder, type}) => {
  return (
    <div className={styles.container}>
        <label className={styles.label}>
          {label}
          <input className={styles.input} type={type} placeholder={placeholder}/>
        </label>
    </div>
  );
};

export default Input;
