import styles from "./AdminInnerContent.module.css";
export default function AdminInnerContent({ children }) {
  return <section className={styles.innerContent}>{children}</section>;
}
