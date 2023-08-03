import styles from "./DashboardItem.module.scss";
import Link from "next/link";
export default function DashboardItem({ item }) {
  return (
    <Link className={styles.item} href={item.url || "#"}>
      <span>{item.icon}</span>
      <span>{item.title}</span>
    </Link>
  );
}
