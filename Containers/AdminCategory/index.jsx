"use client";
import FormItemTypes from "@/Utils/FormItemTypes";
import useUIFormBody from "@/Hooks/useUIFormBody";
import Form from "@/Components/UI/Form";
export default function AdminCategoryContainer({ formData }) {
  const { body, data } = useUIFormBody({
    categoryName: {
      name: "categoryName",
      value: formData?.categoryName ? formData.categoryName : null,
      type: FormItemTypes.TEXT,
      title: "Kategori Adı Giriniz",
      placeholder: "Kategori Adı Giriniz",
    },
    seoTitle: {
      name: "seoTitle",
      value: formData?.seoTitle ? formData.seoTitle : null,
      type: FormItemTypes.TEXT,
      title: "Seo Title Giriniz",
      placeholder: "Seo Title Giriniz",
    },
    seoDescription: {
      name: "seoDescription",
      value: formData?.seoDescription ? formData.seoDescription : null,
      type: FormItemTypes.TEXT,
      title: "Seo Description Giriniz",
      placeholder: "Seo Description Giriniz",
    },
  });
  return <Form formElements={body} handleSubmit={null} />;
}
