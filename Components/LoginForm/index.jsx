"use client";
import styles from "./index.module.scss";
import useUIFormBody from "@/Hooks/useUIFormBody";
import FormItemTypes from "@/Utils/FormItemTypes";
import Form from "../UI/Form";
import { LoginAdminService } from "@/Services";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AlertBox from "../UI/AlertBox";

export default function LoginForm() {
  const router = useRouter();
  const [errors, setErrors] = useState(null);
  const { body, data } = useUIFormBody({
    eMail: {
      name: "eMail",
      value: null,
      type: FormItemTypes.EMAIL,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(null);
    const result = await LoginAdminService({ body: data });
    if (result.success) {
      setCookie(process.env.NEXT_PUBLIC_COOKIE_NAME, result.entity);
      return router.push("/Admin/Dashboard");
    }
    setErrors(result.errorList);
    return;
  };
  return (
    <div className={styles.formWrapper}>
      <Form formElements={body} handleSubmit={handleSubmit} />
      {errors && <AlertBox errMessage={errors} isFadeOut={true} />}
    </div>
  );
}
