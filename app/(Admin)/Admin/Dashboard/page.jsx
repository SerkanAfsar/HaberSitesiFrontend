import AdminInnerContent from "@/Components/AdminLayout/AdminContent/AdminInnerContent";
import ContentHeading from "@/Components/AdminLayout/AdminContent/ContentHeading";
import DashboardContainer from "@/Containers/Dashboard";

export default function Dashboard() {
  return (
    <>
      <ContentHeading title="HABER PORTAL YÖNETİM PANELİ" />
      <AdminInnerContent>
        <DashboardContainer />
      </AdminInnerContent>
    </>
  );
}
