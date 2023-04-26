import React from 'react';
import styles from "./Aside.module.scss";
import avatar from "../../assets/IMG.jpg";
import inst from "../../assets/instagram 3.svg";
import vk from "../../assets/vk.svg";
import git from "../../assets/github 2.svg";
const Aside = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.asideImg}>
        <img className={styles.img} src={avatar} alt="мое ебало"/>
      </div>

      <p className={styles.asideText}> MIHAILOUSKI IHAR </p>

      <p className={styles.asideText}> FrontEnd DEVELOPER </p>

      <div className={styles.asideConnect}>
        <div className={styles.svg}>
          <img className={styles.svg} src={inst} alt=""/>
        </div>
        <div className={styles.svg}>
          <img className={styles.social} src={vk} alt=""/>
        </div>
        <div className={styles.svg}>
          <img className={styles.social} src={git} alt=""/>
        </div>
      </div>
      <div className={styles.button}>
        <button type="button" className={styles.downloadButton} > DOWNLOAD CV</button>
      </div>
    </aside>
  );
};

export default Aside;
