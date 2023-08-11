"use client";
import { useState } from "react";
import styles from "./AdminAside.module.scss";
import AsideTop from "./AsideTop";
import AdminMenu from "./AdminMenu";
export default function AdminAside() {
  const [active, setActive] = useState(false);
  return (
    <div
      className={
        active ? `${styles.aside} ${styles.active}` : `${styles.aside}`
      }
    >
      <AsideTop active={active} setActive={setActive} />
      <AdminMenu active={active} />
    </div>
  );
}
