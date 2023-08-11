import ContentHeading from "@/Components/AdminLayout/AdminContent/ContentHeading";
import AdminInnerContent from "@/Components/AdminLayout/AdminContent/AdminInnerContent";
import AdminCategoryContainer from "@/Containers/AdminCategory";
export default function AddCategory() {
  return (
    <>
      <ContentHeading title="HABER PORTAL KATEGORİ EKLE" />
      <AdminInnerContent>
        <AdminCategoryContainer formData={null} />
      </AdminInnerContent>
    </>
  );
}
