import styles from "./ContentHeading.module.scss";
export default function ContentHeading({ title, links }) {
  return <div className={styles.contentHeadingWrapper}>{title}</div>;
}
