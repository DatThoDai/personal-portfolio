import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nguyen Van Dat</h1>
        <p className={styles.description}>
          I am a web and mobile application developer with a passion for creating valuable products. 
          With experience in HTML, CSS, JavaScript, ReactJS, React Native and Java, I am always 
          looking for opportunities to learn and develop my skills.
        </p>        <a href="mailto:ndat04913@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
