"use client";
import styles from "./layout.module.css";
import AdminAside from "@/Components/AdminLayout/AdminAside";
import AdminMenu from "@/Components/AdminLayout/AdminMenu";
import AsideTop from "@/Components/AdminLayout/AsideTop";
import { useState } from "react";
export default function AdminLayout({ children }) {
  const [active, setActive] = useState(true);
  return (
    <section className={styles.wrapper}>
      <AdminAside active={active} setActive={setActive}>
        <AsideTop />
        <AdminMenu active={active} />
      </AdminAside>
      <main className={styles.content}>{children}</main>
    </section>
  );
}
