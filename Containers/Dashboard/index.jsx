import DashboardItem from "@/Components/Dasboard/DashboardItem";
import styles from "./index.module.scss";
export default function DashboardContainer() {
  return (
    <div className={styles.wrapper}>
      <DashboardItem />
      <DashboardItem />
      <DashboardItem />
      <DashboardItem />
      <DashboardItem />
      <DashboardItem />
      <DashboardItem />
      <DashboardItem />
    </div>
  );
}
