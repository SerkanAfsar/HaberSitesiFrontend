import styles from "./AdminMenu.module.css";
import { AdminCategoryList } from "@/Utils/AdminCategories";
import Link from "next/link";

export default function AdminMenu() {
  return (
    <div className={styles.menuWrapper}>
      {AdminCategoryList.map((item, index) => (
        <Link className={styles.item} key={index} href={item.url}>
          {item.icon} <span>{item.title}</span>
        </Link>
      ))}
    </div>
  );
}
