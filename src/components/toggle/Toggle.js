import React from "react";
import styles from "./toggle.module.css";

const Toggle = ({ toggle }) => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={(ev) => toggle(ev)} />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
};

export default Toggle;
