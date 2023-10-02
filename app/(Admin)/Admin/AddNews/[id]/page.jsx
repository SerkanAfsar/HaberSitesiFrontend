import AdminAddOrUpdateNewsContainer from "@/Containers/AdminNews/AdminAddOrUpdateNewsContainer";
import ContentHeading from "@/Components/AdminLayout/AdminContent/ContentHeading";
import AdminInnerContent from "@/Components/AdminLayout/AdminContent/AdminInnerContent";
import { GetAllCategoriesService, GetNewsByIdService } from "@/Services";
import { notFound } from "next/navigation";
import { CrudTypes } from "@/Utils/helpers";

export default async function UpdateNews({ params }) {
  const categories = await GetAllCategoriesService();
  const newsDetail = await GetNewsByIdService({ id: params.id });
  if (!categories.success) {
    switch (categories.statusCode) {
      default: {
        throw new Error(result?.errorList?.join("-") ?? result);
      }
    }
  }
  if (!newsDetail.success) {
    switch (newsDetail.statusCode) {
      case 404: {
        return notFound();
      }
      default: {
        throw new Error(result?.errorList?.join("-") ?? result);
      }
    }
  }
  return (
    <>
      <ContentHeading title="HABER PORTAL HABER GÜNCELLE" />
      <AdminInnerContent>
        <AdminAddOrUpdateNewsContainer
          categories={categories?.entities}
          formData={newsDetail.entity}
          type={CrudTypes.UPDATE}
          id={params.id}
        />
      </AdminInnerContent>
    </>
  );
}
export const dynamic = "force-dynamic";
export const revalidate = 0;
