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

      default: {
        throw new Error(categories?.errorList?.join("-") ?? categories);
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
export const dynamic = "force-dynamic";
export const revalidate = 0;
