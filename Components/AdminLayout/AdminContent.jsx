import styles from "./AdminContent.module.css";
export default function AdminContent({ children }) {
  return <section className={styles.adminContent}>{children}</section>;
}
