"use client";
import AdminContent from "@/Components/AdminLayout/AdminContent";
import styles from "./layout.module.scss";
import AdminAside from "@/Components/AdminLayout/AdminAside";
import AdminMenu from "@/Components/AdminLayout/AdminMenu";
import AsideTop from "@/Components/AdminLayout/AsideTop";
import ContentTop from "@/Components/AdminLayout/ContentTop";
import { useState } from "react";
import { adminFont } from "@/Libs/fonts";
export default function AdminLayout({ children }) {
  const [active, setActive] = useState(false);
  return (
    <section className={`${styles.wrapper} ${adminFont.className}`}>
      <AdminAside active={active}>
        <AsideTop active={active} setActive={setActive} />
        <AdminMenu active={active} />
      </AdminAside>
      <main className={styles.content}>
        <ContentTop />
        <AdminContent>{children}</AdminContent>
      </main>
    </section>
  );
}
