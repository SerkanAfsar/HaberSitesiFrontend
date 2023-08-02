import styles from "./ContentHeading.module.css";
export default function ContentHeading({ title, links }) {
  return <div className={styles.contentHeadingWrapper}>{title}</div>;
}
