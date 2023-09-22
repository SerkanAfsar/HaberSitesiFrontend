import ContentHeading from "@/Components/AdminLayout/AdminContent/ContentHeading";
import AdminInnerContent from "@/Components/AdminLayout/AdminContent/AdminInnerContent";
import AdminAddOrUpdateContainer from "@/Containers/AdminCategory/AdminAddOrUpdateContainer";
export default function AddCategory() {
  return (
    <>
      <ContentHeading title="HABER PORTAL KATEGORİ EKLE" />
      <AdminInnerContent>
        <AdminAddOrUpdateContainer formData={null} />
      </AdminInnerContent>
    </>
  );
}
