import ContentHeading from "@/Components/AdminLayout/AdminContent/ContentHeading";
import AdminInnerContent from "@/Components/AdminLayout/AdminContent/AdminInnerContent";
import AddUpdateRoleContainer from "@/Containers/Roles/AddUpdateRoleContainer";

export default function AddRole() {
  return (
    <>
      <ContentHeading title="ROL EKLE" />
      <AdminInnerContent>
        <AddUpdateRoleContainer roleResult={null} />
      </AdminInnerContent>
    </>
  );
}
