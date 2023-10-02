"use client";
import FormItemTypes from "@/Utils/FormItemTypes";
import useUIFormBody from "@/Hooks/useUIFormBody";
import Form from "@/Components/UI/Form";
import { CrudTypes, ToastResult, buildFormData } from "@/Utils/helpers";
import { AddSingleNewsService, UpdateSingleNewsService } from "@/Services";
import { useRouter } from "next/navigation";
import { SourceTypes } from "@/Utils/SourceTypes";
import { useState } from "react";

export default function AdminAddOrUpdateNewsContainer({
  formData,
  type = CrudTypes.CREATE,
  id = null,
  categories = null,
}) {
  const categoryValues = categories?.map((item, index) => ({
    label: item.categoryName,
    value: item.id,
  }));
  const router = useRouter();
  const [newsFile, setNewsFile] = useState(null);

  const {
    body: paramsBody,
    data,
    setData,
  } = useUIFormBody({
    categoryId: {
      name: "categoryId",
      value:
        categoryValues.find((a) => a.value == formData?.categoryId) ?? null,
      type: FormItemTypes.MULTISELECT,
      title: "Kategori Seçiniz",
      placeholder: "Kategori Seçiniz",
      options: categoryValues,
    },
    newsSource: {
      name: "newsSource",
      value: SourceTypes.find((a) => a.value == formData?.newsSource) ?? null,
      type: FormItemTypes.MULTISELECT,
      title: "Kaynak Tipi Seçiniz",
      placeholder: "Kaynak Tipi Seçiniz",
      options: SourceTypes,
    },
    newsTitle: {
      name: "newsTitle",
      value: formData?.newsTitle ?? null,
      type: FormItemTypes.TEXT,
      title: "Haber Başlık Giriniz",
      placeholder: "Haber Başlık Giriniz",
    },
    newsSubTitle: {
      name: "newsSubTitle",
      value: formData?.newsSubTitle ?? null,
      type: FormItemTypes.TEXT,
      title: "Haber Alt Başlık Giriniz",
      placeholder: "Haber Alt Başlık Giriniz",
    },
    newsContent: {
      name: "newsContent",
      value: formData?.newsContent ?? null,
      type: FormItemTypes.TEXT,
      title: "Haber İçerik Giriniz",
      placeholder: "Haber İçerik Giriniz",
    },
    seoTitle: {
      name: "seoTitle",
      value: formData?.seoTitle ?? null,
      type: FormItemTypes.TEXT,
      title: "Seo Title Giriniz",
      placeholder: "Seo Title Giriniz",
    },
    seoDesctiption: {
      name: "seoDesctiption",
      value: formData?.seoDesctiption ?? null,
      type: FormItemTypes.TEXT,
      title: "Seo Description Giriniz",
      placeholder: "Seo Description Giriniz",
    },

    newsPicture: {
      name: "newsPicture",
      value: null,
      type: "file",
      title: "Resim Seçiniz",
      placeholder: "Resim Seçiniz",
      accept: "image/*",
      onChange: (e) => setNewsFile(e.target.files[0]),
    },
    sourceUrl: {
      name: "sourceUrl",
      value: formData?.sourceUrl ?? null,
      type: FormItemTypes.TEXT,
      title: "Kaynak Url Giriniz",
      placeholder: "Kaynak Url Giriniz",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newData = {
      ...data,
      categoryId: data.categoryId.value,
      newsSource: data.newsSource.value,
      newsPicture: newsFile,
    };
    console.log(newData);
    const formData = new FormData();
    if (type == CrudTypes.UPDATE) {
      formData.append("id", id);
    }

    buildFormData(formData, newData);

    const result =
      type == CrudTypes.CREATE
        ? await AddSingleNewsService({
            body: formData,
          })
        : await UpdateSingleNewsService({
            body: formData,
            id,
          });
    const toastResult = ToastResult({ result, type });
    if (!toastResult) {
      return;
    }
    return router.push("/Admin/News", undefined, { shallow: true });
  };
  return <Form formElements={paramsBody} handleSubmit={handleSubmit} />;
}
