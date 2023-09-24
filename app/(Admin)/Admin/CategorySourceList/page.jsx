import {
  GetCategorySourcesByPagination,
  GetAllCategoriesService,
} from "@/Services";
import { notFound } from "next/navigation";
import ContentHeading from "@/Components/AdminLayout/AdminContent/ContentHeading";
import AdminInnerContent from "@/Components/AdminLayout/AdminContent/AdminInnerContent";
import AdminCategoryListContainer from "@/Containers/AdminCategory/AdminCategoryListContainer";
import AdminCategorySourceListContainer from "@/Containers/AdminCategorySource/AdminCategorySourceListContainer";

export default async function CategorySourceList({ searchParams }) {
  const [categorySourcesList, categoriesResult] = await Promise.all([
    GetCategorySourcesByPagination({
      sayfa: searchParams.sayfa || 1,
      limit: process.env.LIMIT_SIZE,
      categoryId: searchParams.categoryId || null,
    }),
    GetAllCategoriesService(),
  ]);

  if (!categorySourcesList.success) {
    switch (result.statusCode) {
      case 404: {
        return notFound();
      }
      case 400: {
        throw new Error(categorySourcesList?.errorList?.join("-") ?? result);
      }
      default: {
        throw new Error(categorySourcesList?.errorList?.join("-") ?? result);
      }
    }
  }

  if (!categoriesResult.success) {
    throw new Error(categoriesResult?.errorList?.join("-") ?? categoriesResult);
  }

  return (
    <>
      <ContentHeading title="KATEGORİ URL LİSTESİ" />
      <AdminInnerContent>
        <AdminCategorySourceListContainer
          result={categorySourcesList}
          categoriesResult={categoriesResult}
        />
      </AdminInnerContent>
    </>
  );
}
export const dynamic = "force-dynamic";
export const revalidate = 0;
