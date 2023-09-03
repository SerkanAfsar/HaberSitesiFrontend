import ContentHeading from "@/Components/AdminLayout/AdminContent/ContentHeading";
import AdminInnerContent from "@/Components/AdminLayout/AdminContent/AdminInnerContent";
import RolesContainer from "@/Containers/Roles";

export default function AddRole() {
  return (
    <>
      <ContentHeading title="ROL EKLE" />
      <AdminInnerContent>
        <RolesContainer roleResult={null} />
      </AdminInnerContent>
    </>
  );
}
