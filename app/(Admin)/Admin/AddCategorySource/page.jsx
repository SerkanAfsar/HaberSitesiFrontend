import ContentHeading from "@/Components/AdminLayout/AdminContent/ContentHeading";
import AdminInnerContent from "@/Components/AdminLayout/AdminContent/AdminInnerContent";
import CategorySourceAddOrUpdateContainer from "@/Containers/AdminCategorySource/CategorySourceAddOrUpdateContainer";
import { GetAllCategoriesService } from "@/Services";

export default async function AddCategorySource() {
  const categoriesResult = await GetAllCategoriesService();
  if (!categoriesResult.success) {
    throw new Error(categoriesResult?.errorList?.join("-") ?? categoriesResult);
  }
  return (
    <>
      <ContentHeading title="HABER PORTAL KATEGORİ URL EKLE" />
      <AdminInnerContent>
        <CategorySourceAddOrUpdateContainer
          categoryList={categoriesResult.entities}
        />
      </AdminInnerContent>
    </>
  );
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
