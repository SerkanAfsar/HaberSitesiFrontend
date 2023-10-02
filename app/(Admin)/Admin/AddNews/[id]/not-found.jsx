import ContentHeading from "@/Components/AdminLayout/AdminContent/ContentHeading";
import AdminInnerContent from "@/Components/AdminLayout/AdminContent/AdminInnerContent";

export default function NotFoundPage() {
  return (
    <>
      <ContentHeading title="HABER PORTAL HABER" />
      <AdminInnerContent>
        <h3>Aradığınız Haber Bulunamadı</h3>
      </AdminInnerContent>
    </>
  );
}
