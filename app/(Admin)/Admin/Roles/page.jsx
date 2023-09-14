import ContentHeading from "@/Components/AdminLayout/AdminContent/ContentHeading";
import AdminInnerContent from "@/Components/AdminLayout/AdminContent/AdminInnerContent";
import { GetAllRolesService } from "@/Services";
import RoleListContainer from "@/Containers/Roles/RolesListContainer";

export default async function Roles() {
  const result = await GetAllRolesService();
  if (!result.success && result.statusCode == 400) {
    throw new Error(result?.errorList[0]);
  }

  return (
    <>
      <ContentHeading title="ROL LİSTESİ" />
      <AdminInnerContent>
        <RoleListContainer roleList={result.entities} />
      </AdminInnerContent>
    </>
  );
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
