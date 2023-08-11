"use client";
import { usePathname } from "next/navigation";
import styles from "./CustomAdminLayoutProvider.module.scss";
export default function CustomAdminLayoutProvider({ children, component }) {
  const pathName = usePathname();
  if (pathName == "/Admin") {
    return <div className={styles.wrapper}>{component}</div>;
  }

  return <>{children}</>;
}
