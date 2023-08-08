"use client";
import { useState } from "react";
import styles from "./index.module.scss";
export default function Accordion({ title, children }) {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.accordion} onClick={() => setActive(!active)}>
      <div
        className={
          active
            ? `${styles.accordion_header} ${styles.active}`
            : `${styles.accordion_header}`
        }
      >
        {title}
      </div>
      <div
        className={
          active
            ? `${styles.accordion_content} ${styles.active}`
            : styles.accordion_content
        }
      >
        {children}
      </div>
    </div>
  );
}
