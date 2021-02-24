import React from "react";
import styles from "../styles/componentes/ExperienceBar.module.css";

const ExperienceBar = () => {
  return (
    <header className={styles.experienceBar}>
      <span>0xp</span>
      <div>
        <div style={{ width: "50%" }} />
        <span className={styles.currentExperience} style={{ left: "50%" }}>
          300 xp
        </span>
      </div>
      <span>600px</span>
    </header>
  );
};

export default ExperienceBar;
