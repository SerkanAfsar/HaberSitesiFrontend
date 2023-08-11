import styles from "./AdminInnerContent.module.scss";
export default function AdminInnerContent({ children }) {
  return <section className={styles.innerContent}>{children}</section>;
}
