import { GetCategoryListService } from "@/Services";
import { notFound } from "next/navigation";
import ContentHeading from "@/Components/AdminLayout/AdminContent/ContentHeading";
import AdminInnerContent from "@/Components/AdminLayout/AdminContent/AdminInnerContent";
import AdminCategoryListContainer from "@/Containers/AdminCategory/AdminCategoryListContainer";

export default async function Categories({ searchParams }) {
  const result = await GetCategoryListService({
    sayfa: searchParams.sayfa || 1,
    limit: process.env.LIMIT_SIZE,
  });

  if (!result.success) {
    switch (result.statusCode) {
      case 404: {
        return notFound();
      }
      case 400: {
        throw new Error(result?.errorList?.join("-") ?? result);
      }
      default: {
        throw new Error(result?.errorList?.join("-") ?? result);
      }
    }
  }
  return (
    <>
      <ContentHeading title="KATEGORİ LİSTESİ" />
      <AdminInnerContent>
        <AdminCategoryListContainer result={result} />
      </AdminInnerContent>
    </>
  );
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
