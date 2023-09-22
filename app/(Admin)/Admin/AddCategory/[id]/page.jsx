import ContentHeading from "@/Components/AdminLayout/AdminContent/ContentHeading";
import AdminInnerContent from "@/Components/AdminLayout/AdminContent/AdminInnerContent";
import AdminAddOrUpdateContainer from "@/Containers/AdminCategory/AdminAddOrUpdateContainer";
import { notFound } from "next/navigation";
import { GetCategoryByIdService } from "@/Services";
import { CrudTypes } from "@/Utils/helpers";

export default async function UpdateCategory({ params }) {
  const result = await GetCategoryByIdService({ id: params.id });

  if (!result.success) {
    switch (result.statusCode) {
      case 404: {
        return notFound();
      }
      // case 400: {
      //   throw new Error(result?.errorList?.join("-") ?? result);
      // }
      default: {
        throw new Error(result?.errorList?.join("-") ?? result);
      }
    }
  }
  return (
    <>
      <ContentHeading title="HABER PORTAL KATEGORİ GÜNCELLE" />
      <AdminInnerContent>
        <AdminAddOrUpdateContainer
          type={CrudTypes.UPDATE}
          formData={result.entity}
          id={params.id}
        />
      </AdminInnerContent>
    </>
  );
}
