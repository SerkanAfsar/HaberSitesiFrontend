"use client";
import ContentHeading from "@/Components/AdminLayout/AdminContent/ContentHeading";
import AdminInnerContent from "@/Components/AdminLayout/AdminContent/AdminInnerContent";
export default function Error({ error }) {
  return (
    <>
      <ContentHeading title="HABER PORTAL HABER GÜNCELLE" />
      <AdminInnerContent>{error.message}</AdminInnerContent>
    </>
  );
}
