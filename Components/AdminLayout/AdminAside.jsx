import { useState } from "react";
import styles from "./AdminAside.module.css";
export default function AdminAside({ children, active, setActive }) {
  return (
    <div
      onClick={(e) => setActive(!active)}
      className={
        active ? `${styles.aside} ${styles.active}` : `${styles.aside}`
      }
    >
      {children}
    </div>
  );
}
