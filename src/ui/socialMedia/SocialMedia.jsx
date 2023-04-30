import React from 'react';
import styles from "./SocialMedia.module.scss";


const SocialMedia = ({href,src, alt}) => {
  return (

      <div className={styles.svg}>
        <a href={href}>  <img className={styles.svg} src={src} alt={alt}/> </a>
      </div>

  );
};

export default SocialMedia;
