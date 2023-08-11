import AdminContent from "@/Components/AdminLayout/AdminContent/AdminContent";
import styles from "./layout.module.scss";
import AdminAside from "@/Components/AdminLayout/AdminAside/AdminAside";
import ContentTop from "@/Components/AdminLayout/AdminContent/ContentTop";
import { adminFont } from "@/Libs/fonts";
import CustomAdminLayoutProvider from "@/Providers/CustomAdminLayoutProvider";

export default function AdminLayout({ children }) {
  return (
    <CustomAdminLayoutProvider component={children}>
      <section className={`${styles.wrapper} ${adminFont.className}`}>
        <AdminAside />
        <main className={styles.content}>
          <ContentTop />
          <AdminContent>{children}</AdminContent>
        </main>
      </section>
    </CustomAdminLayoutProvider>
  );
}
