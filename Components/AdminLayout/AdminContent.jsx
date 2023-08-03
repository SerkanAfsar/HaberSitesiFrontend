import styles from "./AdminContent.module.scss";
export default function AdminContent({ children }) {
  return <section className={styles.adminContent}>{children}</section>;
}
