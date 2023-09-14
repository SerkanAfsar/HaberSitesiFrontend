import ContentHeading from "@/Components/AdminLayout/AdminContent/ContentHeading";
import AdminInnerContent from "@/Components/AdminLayout/AdminContent/AdminInnerContent";
import AddUpdateRoleContainer from "@/Containers/Roles/AddUpdateRoleContainer";
import { GetSingleRoleService } from "@/Services";
import { notFound } from "next/navigation";
import { CrudTypes } from "@/Utils/helpers";

export default async function UpdateRole({ params }) {
  const result = await GetSingleRoleService({ id: params.id });
  if (result.statusCode == 404) {
    notFound();
  }

  return (
    <>
      <ContentHeading title="ROL Güncelle" />
      <AdminInnerContent>
        <AddUpdateRoleContainer
          roleResult={result.entity}
          type={CrudTypes.UPDATE}
        />
      </AdminInnerContent>
    </>
  );
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
