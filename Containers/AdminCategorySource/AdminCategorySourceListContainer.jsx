"use client";
import Datatable from "@/Components/Datatable/Datatable";
import DropdownList from "@/Components/UI/DropdownList/DropdownList";
import { DeleteSingleCategorySourceService } from "@/Services";
import { CrudTypes, ToastResult } from "@/Utils/helpers";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminCategorySourceListContainer({
  result,
  categoriesResult,
}) {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const headers = {
    Id: "Id",
    KategoriAdi: "Kategori Adı",
    KaynakAdi: "Kaynak Adi",
    KaynakUrl: "Kaynak Url",
  };

  const categoriesList = categoriesResult?.entities?.map((item) => ({
    label: item.categoryName,
    value: item.id,
  }));

  useEffect(() => {
    router.refresh();
  }, [router]);

  const categorySourceUrlData = result?.entities?.map((item, index) => ({
    id: item.id,
    kategoriAdi: item?.category?.categoryName ?? null,
    kaynakAdi: item.sourceTypeName,
    KaynakUrl: item.sourceUrl,
  }));

  const handleDelete = async ({ id }) => {
    const result = await DeleteSingleCategorySourceService({ id });
    ToastResult({ result, type: CrudTypes.DELETE });
    router.refresh();
  };

  return (
    <>
      <DropdownList
        title={"Kategori Seçiniz"}
        name={"drp_kategori"}
        options={categoriesList}
        onChange={(item) =>
          setSelectedCategory(item.value == 0 ? null : item.label)
        }
      />
      <Datatable
        headers={headers}
        data={
          selectedCategory
            ? categorySourceUrlData.filter(
                (a) => a.kategoriAdi == selectedCategory
              )
            : categorySourceUrlData
        }
        handleDelete={handleDelete}
        detailPageUrl={`/Admin/AddCategorySource`}
        total={result.totalCount || 0}
      />
    </>
  );
}
