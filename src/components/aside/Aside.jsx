import React from 'react';
import styles from "./Aside.module.scss";
import avatar from "../../assets/IMG.jpg";
import inst from "../../assets/instagram 3.svg";
import vk from "../../assets/vk.svg";
import git from "../../assets/github 2.svg";
import Button from "../../ui/button/Button.jsx";
import SocialMedia from "../../ui/socialMedia/SocialMedia.jsx";
const Aside = () => {
    const handleDownload = () =>{
      alert("Hello");

    }
  return (
    <aside className={styles.aside}>
      <div className={styles.asideImg}>
        <img className={styles.img} src={avatar} alt="мое ебало"/>
      </div>

      <p className={styles.asideText}> MIHAILOUSKI IHAR </p>

      <p className={styles.asideText}> FrontEnd DEVELOPER </p>

      <div className={styles.asideConnect}>
        <SocialMedia href="https://www.instagram.com/" src="inst" alt="instagram"/>
        <SocialMedia href="https://vk.com/id172971908" src="vk" alt="VK"/>
       <SocialMedia href="https://github.com/IGROMY" src="git" alt="GitHub"/>

      </div>
      <div className={styles.button}>

        <Button onClick={handleDownload} text="DOWNLOAD"/>
        {/*<button type="button" className={styles.downloadButton} > DOWNLOAD CV</button>*/}
      </div>
    </aside>
  );
};

export default Aside;
