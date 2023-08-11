"use client";
import styles from "./AdminMenu.module.scss";
import { AdminCategoryList } from "@/Utils/AdminCategories";
import Link from "next/link";
export default function AdminMenu({ active }) {
  return (
    <div className={styles.menuWrapper}>
      {AdminCategoryList.map((item, index) => (
        <Link
          className={
            active ? `${styles.item} ${styles.active}` : `${styles.item}`
          }
          key={index}
          href={item.url}
        >
          {item.icon}
          <span style={{ animationDuration: `${(index + 1) / 3}s` }}>
            {item.title}
          </span>
        </Link>
      ))}
    </div>
  );
}
