import styles from "./FormRolesList.module.scss";
import SingleModule from "./SingleModule";
export default function FormRolesList({ formsList, setFormsList }) {
  return (
    <div className={styles.formRolesList}>
      {formsList?.map((item, index) => (
        <SingleModule key={index} item={item} setFormsList={setFormsList} />
      ))}
    </div>
  );
}
