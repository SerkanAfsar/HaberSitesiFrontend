import { useState } from "react";
import styles from "./AdminAside.module.css";
export default function AdminAside({ children, active }) {
  return (
    <div
      className={
        active ? `${styles.aside} ${styles.active}` : `${styles.aside}`
      }
    >
      {children}
    </div>
  );
}
