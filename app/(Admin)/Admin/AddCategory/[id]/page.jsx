import ContentHeading from "@/Components/AdminLayout/AdminContent/ContentHeading";
import AdminInnerContent from "@/Components/AdminLayout/AdminContent/AdminInnerContent";
import AdminCategoryContainer from "@/Containers/AdminCategory";
import { notFound } from "next/navigation";
import { GetCategoryById, TestDeneme } from "@/Services";

export default async function UpdateCategory({ params }) {
  const result = await GetCategoryById({ id: params.id });

  return (
    <>
      <ContentHeading title="HABER PORTAL KATEGORİ GÜNCELLE" />
      <AdminInnerContent>
        <AdminCategoryContainer />
      </AdminInnerContent>
    </>
  );
}
