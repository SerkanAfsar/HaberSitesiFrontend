"use client";
import FormItemTypes from "@/Utils/FormItemTypes";
import useUIFormBody from "@/Hooks/useUIFormBody";
import Form from "@/Components/UI/Form";
import { CrudTypes, ToastResult } from "@/Utils/helpers";
import {
  AddSingleCategoryService,
  UpdateSingleCategoryService,
} from "@/Services";
import { useRouter } from "next/navigation";
import { cookieTokenKey } from "@/Utils";

export default function AdminAddOrUpdateContainer({
  formData,
  type = CrudTypes.CREATE,
  id = null,
}) {
  const router = useRouter();

  const { body, data } = useUIFormBody({
    categoryName: {
      name: "categoryName",
      value: formData?.categoryName ?? null,
      type: FormItemTypes.TEXT,
      title: "Kategori Adı Giriniz",
      placeholder: "Kategori Adı Giriniz",
    },
    seoTitle: {
      name: "seoTitle",
      value: formData?.seoTitle ?? null,
      type: FormItemTypes.TEXT,
      title: "Seo Title Giriniz",
      placeholder: "Seo Title Giriniz",
    },
    seoDesctiption: {
      name: "seoDescription",
      value: formData?.seoDesctiption ?? null,
      type: FormItemTypes.TEXT,
      title: "Seo Description Giriniz",
      placeholder: "Seo Description Giriniz",
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result =
      type == CrudTypes.CREATE
        ? await AddSingleCategoryService({
            body: data,
          })
        : await UpdateSingleCategoryService({
            body: data,
            id,
          });
    const toastResult = ToastResult({ result, type });
    if (!toastResult) {
      return;
    }
    return router.push("/Admin/Categories", undefined, { shallow: true });
  };
  return <Form formElements={body} handleSubmit={handleSubmit} />;
}
