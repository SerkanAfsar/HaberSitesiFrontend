"use client";
import { usePathname } from "next/navigation";
import styles from "./CustomLayoutProvider.module.scss";
export default function CustomLayoutProvider({ children, component }) {
  const pathName = usePathname();
  if (pathName == "/Admin") {
    return <div className={styles.wrapper}>{component}</div>;
  }

  return { children };
}
