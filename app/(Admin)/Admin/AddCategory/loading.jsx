import ContentHeading from "@/Components/AdminLayout/AdminContent/ContentHeading";
import AdminInnerContent from "@/Components/AdminLayout/AdminContent/AdminInnerContent";

import LoadingComponent from "@/Components/Loading/LoadingComponent";
export default function Loading() {
  return (
    <>
      <ContentHeading title="HABER PORTAL KATEGORİ EKLE" />
      <AdminInnerContent>
        <LoadingComponent />
      </AdminInnerContent>
    </>
  );
}
