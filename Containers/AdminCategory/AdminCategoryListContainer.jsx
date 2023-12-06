"use client";
import Datatable from "@/Components/Datatable/Datatable";
import {
  DeleteSingleCategoryService,
  DownCategoryService,
  UpCategoryService,
} from "@/Services";
import { CrudTypes, ToastResult } from "@/Utils/helpers";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

export default function AdminCategoryListContainer({ result }) {
  const categoryList = result?.entities;
  const router = useRouter();
  const headers = {
    Id: "Id",
    KategoriAdi: "Kategori Adı",
    Siralama: "Sıralama",
  };

  useEffect(() => {
    router.refresh();
  }, [router]);

  const toUpCategory = async ({ id }) => {
    const result = await UpCategoryService({ id });
    ToastResult({ result, type: CrudTypes.UPDATE });
    router.refresh();
  };

  const toDownCategory = async ({ id }) => {
    const result = await DownCategoryService({ id });
    ToastResult({ result, type: CrudTypes.UPDATE });
    router.refresh();
  };

  const categoriesData = categoryList?.map((item, index) => ({
    id: item.id,
    categoryName: item.categoryName,
    siralama: (
      <>
        <FaArrowUp
          style={{ cursor: "pointer" }}
          onClick={(e) => toUpCategory({ id: item.id })}
        />
        <br />
        <FaArrowDown
          style={{ cursor: "pointer" }}
          onClick={(e) => toDownCategory({ id: item.id })}
        />
      </>
    ),
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
