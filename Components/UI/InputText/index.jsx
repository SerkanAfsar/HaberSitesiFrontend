import styles from "./index.module.scss";
export default function InputText({ type, title, name, placeholder }) {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={name}>{title}</label>
      <input type={type} name={name} id={name} placeholder={placeholder} />
    </div>
  );
}
