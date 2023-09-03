import styles from "./index.module.scss";
import { forwardRef } from "react";
const InputCheckbox = (props, ref) => {
  return (
    <div className={styles.checkBoxStyle}>
      <label onClick={(e) => ref.current.click()}>{props.title}</label>
      <input type="checkbox" {...props} ref={ref} />
    </div>
  );
};

export default forwardRef(InputCheckbox);
