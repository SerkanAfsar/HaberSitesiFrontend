import FormItemTypes from "@/Utils/FormItemTypes";
import { memo } from "react";
import styles from "./index.module.scss";
import InputText from "../InputText";

const Form = ({
  handleSubmit,
  subItems = null,
  formElements = null,
  type = "add",
}) => {
  return (
    <form
      onSubmit={async (e) => await handleSubmit(e)}
      className={`${styles.form}`}
    >
      {Object.keys(formElements)?.map((key, value) => {
        switch (formElements[key]["type"]) {
          case FormItemTypes.TEXT:
            return <InputText key={value} {...formElements[key]} />;
          //   case InputConstants.TYPE_CONSTANTS.TEXTAREA:
          //     return <FormTextBox key={value} {...formElements[key]} />;
          //   case InputConstants.TYPE_CONSTANTS.DROPDOWN:
          //     return <FormDropDown key={value} {...formElements[key]} />;
          //   case InputConstants.TYPE_CONSTANTS.EDITOR:
          //     return <Editor key={value} {...formElements[key]} />;
          //   case InputConstants.TYPE_CONSTANTS.FILE:
          //     return <FormFile key={value} {...formElements[key]} />;
          default:
            return <InputText key={value} {...formElements[key]} />;
        }
      })}
      {subItems && subItems}
      <div className={styles.submitArea}>
        <button type="submit">{type == "add" ? "KAYDET" : "GÜNCELLE"}</button>
      </div>
    </form>
  );
};
export default memo(Form);
