import styles from "./index.module.scss";
export default function InputText({
  type,
  title,
  name,
  placeholder,
  value,
  onChange,
  ...props
}) {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={name}>{title}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}
