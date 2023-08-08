import ContentHeading from "@/Components/AdminLayout/ContentHeading";
import AdminInnerContent from "@/Components/AdminLayout/AdminInnerContent";
import AdminCategoryContainer from "@/Containers/AdminCategory";
export default function AddCategory() {
  return (
    <>
      <ContentHeading title="HABER PORTAL KATEGORİ EKLE" />
      <AdminInnerContent>
        <AdminCategoryContainer />
      </AdminInnerContent>
    </>
  );
}
