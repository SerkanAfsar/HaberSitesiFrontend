"use client";
import styles from "./index.module.scss";
import useUIFormBody from "@/Hooks/useUIFormBody";
import FormItemTypes from "@/Utils/FormItemTypes";
import Form from "../UI/Form";

export default function LoginForm() {
  const { body, data } = useUIFormBody({
    eMail: {
      name: "eMail",
      value: null,
      type: FormItemTypes.TEXT,
      title: "E-Posta",
      placeholder: "E-Posta Adresinizi Giriniz",
    },
    password: {
      name: "password",
      value: null,
      type: FormItemTypes.TEXT,
      title: "Şifre",
      placeholder: "Şifrenizi Giriniz",
    },
  });
  return (
    <div className={styles.formWrapper}>
      <Form formElements={body} handleSubmit={null} />
    </div>
  );
}
