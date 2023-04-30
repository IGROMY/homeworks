import styles from "./TextArea.module.scss";
import React from "react";

const TextArea = ({label, placeholder, value, onChange}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        {label}
        <textarea className={styles.textArea} value={value} placeholder={placeholder} onChange={onChange}/>
      </label>
    </div>
  );
};

export default TextArea;
