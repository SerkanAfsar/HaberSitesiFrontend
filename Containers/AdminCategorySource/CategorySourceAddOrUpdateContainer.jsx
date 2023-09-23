"use client";
import FormItemTypes from "@/Utils/FormItemTypes";
import useUIFormBody from "@/Hooks/useUIFormBody";
import Form from "@/Components/UI/Form";
import { CrudTypes, ToastResult } from "@/Utils/helpers";
import { useRouter } from "next/navigation";
import { SourceTypes } from "@/Utils/SourceTypes";
import {
  AddSingleCategorySourceService,
  UpdateSingleCategorySourceService,
} from "@/Services";

export default function CategorySourceAddOrUpdateContainer({
  formData,
  categoryList,
  type = CrudTypes.CREATE,
  id = null,
}) {
  const router = useRouter();
  const categoriesList = categoryList.map((item, index) => ({
    label: item.categoryName,
    value: item.id,
  }));
  const { body, data } = useUIFormBody({
    sourceType: {
      name: "sourceType",
      value: formData?.sourceType ?? null,
      type: FormItemTypes.MULTISELECT,
      title: "Kaynak Tipi Seçiniz",
      placeholder: "Kaynak Tipi Seçiniz",
      options: SourceTypes,
      isMulti: false,
      closeMenuOnSelect: true,
      className: "basic-single",
      noOptionsMessage: () => "Kaynak Tipi Bulunamadı...",
      selectMessage: () => "Kaynak Tipi Seçiniz",
    },
    categoryId: {
      name: "categoryId",
      value: categoriesList.find((a) => a.id == formData?.categoryId) ?? null,
      type: FormItemTypes.MULTISELECT,
      title: "Kategori Seçiniz",
      placeholder: "Kategori Seçiniz",
      options: categoriesList,
      isMulti: false,
      closeMenuOnSelect: true,
      className: "basic-single",
      noOptionsMessage: () => "Kategori Bulunamadı...",
      selectMessage: () => "Kategori Seçiniz",
    },
    sourceUrl: {
      name: "sourceUrl",
      value: formData?.seoTitle ?? null,
      type: FormItemTypes.TEXT,
      title: "Kaynak Url Giriniz",
      placeholder: "Kaynak Url Giriniz",
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result =
      type == CrudTypes.CREATE
        ? await AddSingleCategorySourceService({
            body: {
              ...data,
              categoryId: data?.categoryId?.value || null,
              sourceType: data?.sourceType?.value || null,
            },
          })
        : await UpdateSingleCategorySourceService({
            body: {
              ...data,
              categoryId: data?.categoryId?.value || null,
              sourceType: data?.sourceType?.value || null,
            },
            id,
          });
    const toastResult = ToastResult({ result, type });
    if (!toastResult) {
      return;
    }
    return router.push("/Admin/CategorySourceList", undefined, {
      shallow: true,
    });
  };
  return <Form formElements={body} handleSubmit={handleSubmit} />;
}
