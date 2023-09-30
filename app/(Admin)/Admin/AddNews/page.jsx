import AdminAddOrUpdateNewsContainer from "@/Containers/AdminNews/AdminAddOrUpdateNewsContainer";
import ContentHeading from "@/Components/AdminLayout/AdminContent/ContentHeading";
import AdminInnerContent from "@/Components/AdminLayout/AdminContent/AdminInnerContent";
import { GetAllCategoriesService } from "@/Services";

export default async function AddNews() {
  const categories = await GetAllCategoriesService();
  if (!categories.success) {
    switch (categories.statusCode) {
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
      <ContentHeading title="HABER PORTAL HABER EKLE" />
      <AdminInnerContent>
        <AdminAddOrUpdateNewsContainer
          categories={categories?.entities}
          formData={null}
        />
      </AdminInnerContent>
    </>
  );
}
