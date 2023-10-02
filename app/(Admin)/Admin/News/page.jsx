import ContentHeading from "@/Components/AdminLayout/AdminContent/ContentHeading";
import AdminInnerContent from "@/Components/AdminLayout/AdminContent/AdminInnerContent";

import { GetAllCategoriesService, GetNewsListService } from "@/Services";
import AdminNewsListContainer from "@/Containers/AdminNews/AdminNewsListContainer";

export default async function News({ searchParams }) {
  const categoriesResult = await GetAllCategoriesService();
  if (!categoriesResult.success) {
    throw new Error(categoriesResult?.errorList?.join("-") ?? categoriesResult);
  }
  const newsListResult = await GetNewsListService({
    sayfa: searchParams?.sayfa || 1,
    limit: process.env.LIMIT_SIZE,
    categoryId: searchParams?.categoryId || null,
  });
  if (!newsListResult.success) {
    throw new Error(newsListResult?.errorList?.join("-") ?? newsListResult);
  }
  return (
    <>
      <ContentHeading title="HABER PORTAL HABERLER " />
      <AdminInnerContent>
        <AdminNewsListContainer
          result={newsListResult}
          categoriesResult={categoriesResult}
        />
      </AdminInnerContent>
    </>
  );
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
