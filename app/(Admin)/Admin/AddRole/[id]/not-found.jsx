import ContentHeading from "@/Components/AdminLayout/AdminContent/ContentHeading";
import AdminInnerContent from "@/Components/AdminLayout/AdminContent/AdminInnerContent";

export default function NotFoundRole() {
  return (
    <>
      <ContentHeading title="ROL İŞLEMLERİ" />
      <AdminInnerContent>
        <h5>Aradığınız Rol Bulunamadı</h5>
      </AdminInnerContent>
    </>
  );
}
