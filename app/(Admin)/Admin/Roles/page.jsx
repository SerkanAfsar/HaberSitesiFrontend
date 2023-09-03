import RolesContainer from "@/Containers/Roles";
import ContentHeading from "@/Components/AdminLayout/AdminContent/ContentHeading";
import AdminInnerContent from "@/Components/AdminLayout/AdminContent/AdminInnerContent";

export default function Roles() {
  const roles = ["deneme 1", "deneme 2", "deneme 3"];
  return (
    <>
      <ContentHeading title="ROL YÖNETİMİ" />
      <AdminInnerContent>
        <RolesContainer rolesList={roles} />
      </AdminInnerContent>
    </>
  );
}
