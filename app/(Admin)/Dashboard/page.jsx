import AdminInnerContent from "@/Components/AdminLayout/AdminInnerContent";
import ContentHeading from "@/Components/AdminLayout/ContentHeading";
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
