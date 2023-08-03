"use client";
import styles from "./AdminAside.module.scss";
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
