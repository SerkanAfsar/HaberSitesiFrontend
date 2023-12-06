"use client";
import Datatable from "@/Components/Datatable/Datatable";
import DropdownList from "@/Components/UI/DropdownList/DropdownList";
import {
  DeleteSingleCategorySourceService,
  DeleteSingleNewsService,
} from "@/Services";
import { CrudTypes, ToastResult } from "@/Utils/helpers";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function AdminNewsListContainer({ result, categoriesResult }) {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const headers = {
    Id: "Id",
    HaberBaslik: "Haber Başlık",
    Kategorisi: "Kategori Adi",
  };

  const categoriesList = categoriesResult?.entities?.map((item) => ({
    label: item.categoryName,
    value: item.id,
  }));

  useEffect(() => {
    router.refresh();
  }, [router]);

  const newsListUrlData = result?.entities?.map((item, index) => ({
    id: item.id,
    haberBaslik: item?.newsTitle ?? null,
    kategorisi: item?.category?.categoryName ?? null,
  }));

  const handleDelete = async ({ id }) => {
    const result = await DeleteSingleNewsService({ id });
    ToastResult({ result, type: CrudTypes.DELETE });
    if (newsListUrlData.length == 1) {
      const params = new URLSearchParams(searchParams);
      const sayfaValue = params.get("sayfa");
      if (sayfaValue) {
        params.set(
          "sayfa",
          sayfaValue != 1 ? parseInt(sayfaValue - 1) : sayfaValue
        );
        router.refresh();
        return router.push(`${pathName}?${params.toString()}`);
      }
    }
    return router.refresh();
  };

  return (
    <>
      <DropdownList
        title={"Kategori Seçiniz"}
        name={"drp_kategori"}
        options={categoriesList}
        onChange={(item) => {
          router.push(
            item.value == 0
              ? `${pathName}`
              : `${pathName}?categoryId=${item.value}&sayfa=1`
          );
        }}
      />
      <Datatable
        headers={headers}
        data={newsListUrlData}
        handleDelete={handleDelete}
        detailPageUrl={`/Admin/AddNews`}
        total={result.totalCount || 0}
      />
    </>
  );
}
