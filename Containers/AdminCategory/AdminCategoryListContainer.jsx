"use client";
import Datatable from "@/Components/Datatable/Datatable";
import { DeleteSingleCategoryService } from "@/Services";
import { CrudTypes, ToastResult } from "@/Utils/helpers";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminCategoryListContainer({ result }) {
  const categoryList = result?.entities;
  const router = useRouter();
  const headers = {
    Id: "Id",
    KategoriAdi: "Kategori Adı",
  };

  useEffect(() => {
    router.refresh();
  }, [router]);

  const categoriesData = categoryList?.map((item, index) => ({
    id: item.id,
    categoryName: item.categoryName,
  }));

  const handleDelete = async ({ id }) => {
    const result = await DeleteSingleCategoryService({ id });
    ToastResult({ result, type: CrudTypes.DELETE });
    router.refresh();
  };
  return (
    <Datatable
      headers={headers}
      data={categoriesData}
      handleDelete={handleDelete}
      detailPageUrl={`/Admin/AddCategory`}
      total={result.totalCount || 0}
    />
  );
}
