"use client";
import AdminContent from "@/Components/AdminLayout/AdminContent/AdminContent";
import styles from "./layout.module.scss";
import AdminAside from "@/Components/AdminLayout/AdminAside/AdminAside";
import AdminMenu from "@/Components/AdminLayout/AdminAside/AdminMenu";
import AsideTop from "@/Components/AdminLayout/AdminAside/AsideTop";
import ContentTop from "@/Components/AdminLayout/AdminContent/ContentTop";
import { useState } from "react";
import { adminFont } from "@/Libs/fonts";
import CustomLayoutProvider from "@/Providers/CustomLayoutProvider";
export default function AdminLayout({ children }) {
  const [active, setActive] = useState(false);
  return (
    <CustomLayoutProvider component={children}>
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
    </CustomLayoutProvider>
  );
}
